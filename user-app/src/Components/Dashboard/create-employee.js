import React from 'react';
import { Layout } from 'antd';
import Slider from "./slider";
import NavBar from "./navBar";
import ContentLayout from "./sideLayout";
import CreateForm from "./create-form";

class CreateEmployee extends React.Component{
    render() {
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <Slider/>
                <ContentLayout create_form={<CreateForm/>}/>
            </Layout>
        );
    }
}
export default CreateEmployee;