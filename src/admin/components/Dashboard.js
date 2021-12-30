import React, {Fragment, useEffect, useState} from 'react';
import { Layout, Menu, Breadcrumb,Avatar,Empty} from 'antd';
import {useSelector} from "react-redux";
import {
    DesktopOutlined,
    TeamOutlined,
   PoweroffOutlined,

} from '@ant-design/icons';
import {postApi} from "../../apiCalls";
import {useNavigate} from "react-router";
import Cookies from "js-cookie";

const { Header, Content, Footer, Sider } = Layout;


const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { email,username,name } = useSelector(state => state.user);
    const navigate = useNavigate();
    let dname = Cookies.get('name');

    useEffect( () => {

    },[])

   const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

   const loggout = () => {
     postApi('/logout',{}).then(res =>{
         navigate('/');
     }).catch(err => {
         console.log(err);
     });
   }


    return (
        <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<Avatar size="small" />}>
                            { dname }
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Nexus
                        </Menu.Item>
                        <Menu.Item key="9" icon={<TeamOutlined />}>
                            Registered Nurses
                        </Menu.Item>
                        <Menu.Item key="10" onClick={loggout} icon={<PoweroffOutlined />}>
                            Logout
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item>Registered</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Empty />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}> Nexus | Nursing ©2021, All right reserved.</Footer>
                </Layout>
            </Layout>
        </Fragment>
    );
};

export default Dashboard;