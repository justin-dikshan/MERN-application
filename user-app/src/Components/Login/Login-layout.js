import React from 'react';
import './login-layout.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import LoginForm from "./login-form";

const { Header, Content, Footer } = Layout;

class LoginUi extends React.Component{


    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <h2 style={{color:'white', float:'left'}}>USER MANAGEMENT</h2>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{float: 'right'}}>

                    </Menu>
                </Header>
                <Content style={{ padding: '50px 50px', height : '100vh' }}>
                    <div className="site-layout-content">
                        <h1>LOG IN</h1>
                        <div style={{margin:'0 auto'}}>
                            <LoginForm/>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}

export default LoginUi;