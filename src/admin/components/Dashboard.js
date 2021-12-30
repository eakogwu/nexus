import React, {Fragment, useEffect, useState} from 'react';
import {Layout, Menu, Breadcrumb, Avatar, Empty, Table, Badge, Tag, Popconfirm, Button, notification} from 'antd';
import {
    DesktopOutlined,
    TeamOutlined,
   PoweroffOutlined,

} from '@ant-design/icons';
import {deleteApi, getApi, postApi} from "../../apiCalls";
import {useNavigate} from "react-router";
import Cookies from "js-cookie";

const { Header, Content, Footer, Sider } = Layout;


const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [people,setPeople] = useState([]);
    const navigate = useNavigate();
    let dname = Cookies.get('name');

    useEffect( () => {
        getApi('/enroll').then( res => {
            setPeople(res.data.data.map ( (data, index) => {
                    data.key = index+1;
                    data.index = index+1;
                    return data;
                }));
        });
    },[]);

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

    const successNotification = () => {
        notification["success"]({
            message: 'deleted successfully',
            description:
                'Record has been deleted from the database',
        });
    }


    function deleteData(id) {
       deleteApi(`/enroll/${id}`)
           .then( res => {
               if (res.status === 201){
                   successNotification();
                   setPeople(people.filter( p => p.id !== id))
               }

           })
           .catch(err => {
               console.log(err);
           });

    }

    const columns = [
        {
            title: '#',
            dataIndex: 'index',
            key: 'index',
            sorter:true,
            defaultSortOrder: 'descend',
            sortDirections: ['descend']
        }, {
            title: 'First name',
            dataIndex: 'firstname',
            key: 'firstname',
        },
        {
            title: 'Last name',
            dataIndex: 'lastname',
            key: 'lastname',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text,student) => <Popconfirm title='Are you sure to delete'
            placement='topRight'
            onConfirm={ () => deleteData(student.id) }
            okText='Yes'
            cancelText='No'>
                <Button>Delete</Button>
            </Popconfirm>
        },

    ];

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
                            {people?
                                <Table dataSource={people} columns={columns}
                                       title={ () => {
                                          return(
                                              <>
                                                  <Tag>Number of people enrolled</Tag>
                                                  <Badge count={people.length} className="site-badge-count" />
                                              </>
                                              )}
                                       }

                                /> : <Empty />}

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}> Nexus | Nursing ©2021, All right reserved.</Footer>
                </Layout>
            </Layout>
        </Fragment>
    );
};

export default Dashboard;