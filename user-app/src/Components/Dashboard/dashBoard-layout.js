import React from 'react';

import { Layout, Menu, } from 'antd';
import Slider from "./slider";
import "./sideLayout";
import ContentLayout from "./sideLayout";
import {connect} from 'react-redux';
import {profileFetch} from '../../Actions/userActions';


class DashBoardLayout extends React.Component{
    componentDidMount() {
        this.props.profileFetch()
    }


    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Slider/>
                <ContentLayout/>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {

}

export default connect(null, { profileFetch })(DashBoardLayout);