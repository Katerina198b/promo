import { Header } from 'antd/lib/layout/layout';
import { Menu } from 'antd';
import styles from './Head.module.css';
import { ReactElement } from 'react';

export const Head = (): ReactElement => {
  console.log('styles', styles);
  return (
    <Header className={styles.head}>
      <div className={styles.logo} />
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
};
