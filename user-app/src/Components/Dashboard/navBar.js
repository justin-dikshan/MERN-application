import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { withRouter } from "react-router";
const { Header, Content, Footer } = Layout;


class NavBar extends React.Component {

    reDirect = () => {
        this.props.history.push('/dashboard');
    }

    render() {
        return(
            <Header>
                <div className="logo" />
                <h2 style={{color:'white', float:'left'}} onClick={this.reDirect}>USER MANAGEMENT</h2>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{float: 'right'}}>

                </Menu>
            </Header>
        );
    }
}

export default withRouter(NavBar);