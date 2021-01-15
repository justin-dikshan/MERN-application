import React from 'react';
import NavBar from "./navBar";
import {Layout} from "antd";
import {connect} from "react-redux";

const {Content, Footer} = Layout;

class ContentLayout extends React.Component{

    authorised = this.props.auth.isAuthenticated;

    render() {
        return (
        <Layout className="site-layout">
            <Content style={{ margin: '0 16px' }}>
                <NavBar/>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    {this.props.create_form}

                </div>
                { this.authorised ? <h2>You have a valid Login.</h2> : <h2>You haven't Logged In.</h2>}

            </Content>
            <Footer style={{ textAlign: 'center' }}>TEST</Footer>
        </Layout>
    );
    }
}
const mapStateToProps = state => ({
    auth : state.auth,
    errors : state.errors
})

export default connect(mapStateToProps, )(ContentLayout);