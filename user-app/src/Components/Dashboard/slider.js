import React from 'react';
import {Link} from "react-router-dom";
import { Layout, Menu,  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './dashBoard-layout.css';
import { logOutUser } from '../../Actions/authActions';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import sideLayout from "./sideLayout";

const { Sider } = Layout;
const { SubMenu } = Menu;

class Slider extends React.Component{

     state = {
        collapsed: false,
    };

    onCollapse = collapsed => {

        this.setState({ collapsed });
    };

    logOut = () => {
        this.props.logOutUser(this.props.history)
    }

    render() {
        const { collapsed } = this.state;
        return (
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">
                            <Link to="/create" >Create</Link>
                        </Menu.Item>
                        <Menu.Item key="4" onClick={this.logOut}>Logout</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default connect(null, { logOutUser })(withRouter(Slider));