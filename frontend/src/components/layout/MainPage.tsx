import React, {useState} from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import HomeComponent from '../../pages/Home';
import ProfileComponent from '../../pages/Profile';
import TablesComponent from '../../pages/Table';
import TestComponent from '../../pages/List';
import Footer from "./Footer";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'sub1',
        label: 'Navigation One',
        icon: <MailOutlined />,
        children: [
            {
                key: 'g1',
                label: 'Item 1',
                type: 'group',
                children: [
                    { key: '1', label: 'Home' },
                    { key: '2', label: 'Profile' },
                ],
            },
            {
                key: 'g2',
                label: 'Item 2',
                type: 'group',
                children: [
                    { key: '3', label: 'Table' },
                    { key: '4', label: 'Request' },
                ],
            },
        ],
    },
    {
        key: 'sub2',
        label: 'Navigation Two',
        icon: <AppstoreOutlined />,
        children: [
            { key: '5', label: 'Option 5' },
            { key: '6', label: 'Option 6' },
            {
                key: 'sub3',
                label: 'Submenu',
                children: [
                    { key: '7', label: 'Option 7' },
                    { key: '8', label: 'Option 8' },
                ],
            },
        ],
    },
    {
        type: 'divider',
    },
    {
        key: 'sub4',
        label: 'Navigation Three',
        icon: <SettingOutlined />,
        children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
        ],
    },
    {
        key: 'grp',
        label: 'Group',
        type: 'group',
        children: [
            { key: '13', label: 'Option 13' },
            { key: '14', label: 'Option 14' },
        ],
    },
];

const App: React.FC = () => {

    const [page, setPage] = useState(1);

    const Home = () => <HomeComponent/>;
    const Profile = () => <ProfileComponent/>;
    const Table = () => <TablesComponent/>;
    const Test = () => <TestComponent/>;


    // 상태에 따라 렌더링할 컴포넌트를 선택
    const renderComponent = () => {
        switch (page) {
            case 1:
                return <Home />;
            case 2:
                return <Profile />;
            case 3:
                return <Table />;
            case 4:
                return <Test/>
            default:
                return <Home />;
        }
    };


    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        console.log('click ', e.key);
        setPage(parseInt(e.key));
    };

    return (
        <>
            <div style={{ display: 'flex' }}>
                <Menu
                    onClick={onClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                />
                <div style={{ flex: 1, padding: '20px' }}>
                    {renderComponent()}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default App;