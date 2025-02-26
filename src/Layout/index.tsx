import React from 'react';
import { UnorderedListOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {Link,Outlet,useLocation} from "react-router-dom";
import styles from './index.module.scss'

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
	key: 'good',
	label: '商品管理',
	icon: <ShopOutlined />,
	children: [
	  { key: 'goodlist', label: <Link to='/good/list'>商品列表</Link> },
	],
  },
  {
	key: 'order',
	label: '订单管理',
	icon: <UnorderedListOutlined />,
	children: [
	  { key: 'orderlist', label: <Link to='/order/list'>订单列表</Link> },
	],
  },
  {
	key: 'user',
	label: '用户管理',
	icon: <UserOutlined />,
	children: [
	  { key: 'userlist', label: <Link to='/user/list'>用户列表</Link> },
	],
  },
];

const App: React.FC = () => {
  const location = useLocation();
  const {pathname} = location
  const selectKey = pathname.split('/').join('')
  const openKey = pathname.split('/')[1]
  return (
	  <div className={styles.layoutWrapper}>
		<Menu
			style={{ width: 256 }}
			defaultSelectedKeys={[selectKey]}
			defaultOpenKeys={[openKey]}
			mode="inline"
			items={items}
		/>
		<div style={{flex: 1}}>
		  <Outlet/>
		</div>
	  </div>
  );
};

export default App;