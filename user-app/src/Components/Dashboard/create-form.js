import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { DatePicker, Space, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};
const tailLayout = {
    wrapperCol: { offset: 0, span: 24 },
};

class CreateForm extends React.Component{

    constructor() {
        super();
        this.state = {
            name : '',
            email : '',
            password : '',
            birthday : '',
            role : '',
            department : '',
        }
    }
    handleChange = (e, value) => {
        this.setState({
            [e.target.name] : e.target.value
            }
        )
    }
    handleDateChange = (date, dateString) => {
        this.setState({
            birthday : dateString
        })
    }
    handleSelectChange = nameOf => value => {
        this.setState({ [nameOf]: value});
    }
    onSubmitClick = () => {
        const user = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password,
            birthday : this.state.birthday,
            role : this.state.role,
            department : this.state.department,
        }
        axios.post('http://localhost:5001/api/users', user)
            .then((res) => console.log(res.data)).catch(err => console.log(err))
    }


    render() {
        return (
            <Form{...layout} name="basic" initialValues={{ remember: true }} style={{width: '50%', margin:'0px auto'}}>
                <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input the Name!' }]}>
                    <Input name="name" onChange={event => this.handleChange(event)}/>
                </Form.Item>

                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input the email!' }]}>
                    <Input name="email" onChange={event => this.handleChange(event)}/>
                </Form.Item>

                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input the Password!' }]}>
                    <Input.Password name="password" onChange={event => this.handleChange(event)}/>
                </Form.Item>

                <Form.Item label="Birthday" name="birthday" rules={[{ required: true, message: 'Please input the Birthday!' }]}>
                    <DatePicker style={{float:'left'}} name="birthday" onChange={this.handleDateChange}/>
                </Form.Item>

                <Form.Item label="Role" name="role" rules={[{ required: true, message: 'Please input the Birthday!' }]}>
                    <Select defaultValue="agent" style={{ width: 120, float: 'left' }} name="role" onSelect={this.handleSelectChange("role")}>
                        <Option value="manager">Manager</Option>
                        <Option value="lead">Team Lead</Option>
                        <Option value="agent">Agent</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Department" name="department" rules={[{ required: true, message: 'Please input the Birthday!' }]}>
                    <Select defaultValue="sales" style={{ width: 120, float: 'left' }} name="department" onSelect={this.handleSelectChange("department")}>
                        <Option value="sales">Sales</Option>
                        <Option value="hr">HR</Option>

                    </Select>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" onClick={this.onSubmitClick}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default CreateForm;