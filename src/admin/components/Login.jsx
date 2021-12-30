import React, {useState} from 'react';
import 'antd/dist/antd.css';
import styled from "styled-components";
import {postApi} from "../../apiCalls";
import {useNavigate} from "react-router";
import { Form, Input, Button, Checkbox } from 'antd';
import {loggedin} from "../../features/userSlice";
import {useDispatch} from "react-redux";
import Cookies from 'js-cookie'

const Login = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();

    const onFinish = (values) => {
        const data = {
            'email':values.email,
            'password':values.password
        }
        postApi('/login',data).then( res =>{
            const {user,token} = res;
            dispatch(loggedin(user));
            Cookies.set('name',user.name);
            Cookies.set('token',token);
            setLoading(false);
            navigate('/admin/dashboard');
        }).catch(err => {
            console.log(err.message);
            setLoading(false);
        })

    };

    const onFinishFailed = (errorInfo) => {
        setLoading(false);
        console.log('Failed:', errorInfo);
    };

    return (


        <Section>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email address"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email address!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" loading={loading} onClick={setLoading}  htmlType="submit">
                        {loading?"please wait...":"Login"}
                    </Button>
                </Form.Item>
            </Form>
        </Section>

    );
};

const Section = styled.section`
    width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Login;