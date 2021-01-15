import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react'
import LoginUi from "./Login-layout";
import axios from "axios";
import { connect } from 'react-redux';
import { loginUser } from "../../Actions/authActions";
import {withRouter} from "react-router-dom";

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 20,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 0,
        span:24,
    },
};


class LoginForm extends React.Component{
    constructor() {
        super();
        this.state = {
            email : '',
            password : '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
            }
        )
    }


    onSubmit = (event) => {
        this.props.loginUser(this.state, this.props.history)
    }

    render() {
        return (
            <Form {...layout} name="basic" initialValues={{remember: true,}} onFinish={this.onSubmit} onFinishFailed={() => console.log("failed")} style={{width: '50%', margin:'0px auto'}}>
                <Form.Item label="Username" name="username" rules={[{required: true, message: 'Please input your username!',},]} style={{textAlign: 'center'}} >
                    <Input name="email" onChange={this.handleChange}/>
                </Form.Item>

                <Form.Item label="Password" name="password" rules={[{required: true, message: 'Please input your password!',},]}>
                    <Input.Password name="password" onChange={this.handleChange}/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default connect(null, {loginUser})(withRouter(LoginForm));
