import { Layout, Space } from 'antd';
import React from 'react';
const { Header } = Layout;

import './AppHeader.css';
import 'antd/dist/antd.css';

import HeaderSearch from './headerSearch/index';
import HeaderAvatar from './headerAvatar/index';
import HeaderAppStore from './headerAppStore/index';
import HeaderMenu from './headerMenu/index';

const AppHeader: React.FC = () => {
    return (
        <div>
            <Header className="header app-header">
                <img className="app-logo" width={200} height={50} src="./serviceo-logo-White.svg" />
                <Space className="right">
                    <HeaderSearch />
                    <HeaderMenu />
                    <HeaderAvatar />
                    <HeaderAppStore />
                </Space>
            </Header>
        </div>
    );
};

export default AppHeader;
