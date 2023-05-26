import React, { useState, useEffect } from 'react';
import { MenuDataItem, ProLayout, getMenuData } from '@ant-design/pro-components'
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { ProLayoutProps } from '@ant-design/pro-layout';
import { BaseMenuProps } from '@ant-design/pro-layout/lib/components/SiderMenu/BaseMenu';

interface AppItem {
  icon: string;
  title: string;
  desc: string;
  url: string;
  target: string;
  children?: AppItem[];
}

const BasicLayout = (props: ProLayoutProps) => {
  const { children } = props;
  const [loading, setLoading] = useState(true);
  const [collapsed, setCollapsed] = useState(false);



  const appList: AppItem[] = [
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      title: 'baidu',
      desc: 'BAIDU',
      url: 'http://baodu.com',
      target: '_blank',
      children: []
    }
  ];

  const menuHeaderRender = (logo: any ,title: any): React.ReactNode => {
    return (
      <span style={{color: '#3e75ff', fontWeight: 'bold'}}>{ title }</span>
    )
  }

  const menuFooterRender = (menuProps: any): React.ReactNode => {
    console.log('menuProps', menuProps);
    return (
      <div>footer</div>
    )
  }

  const onMenuHeaderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('onMenuHeaderClick', e);
  }

  const menuExtraRender = (menuProps: any): React.ReactNode => {
    return (
      <div>菜单头部</div>
    )
  }

  const onTopMixMenuHeaderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('onTopMixMenuHeaderClick', e);
  }

  const contentStyle = {
    backgroundColor: '#f0f0f0',
    padding: '24px',
  }

  const layout: 'top' | 'side' | 'mix' = 'side';

  const onCollapse = (collapsed: boolean) => {
    console.log('onCollapse', collapsed);
    setCollapsed(collapsed)
  }

  const onPageChange = (location: any) => {
    console.log('onPageChange', location);
  }

  const headerRender = (): React.ReactNode => {
    return (
      <div style={{height: '48px', lineHeight: '48px', textAlign: 'right', paddingRight: '24px'}}>
        <Button type="primary">登录</Button>
      </div>
    )
  }

  const actionsRender = (layoutProps: any): React.ReactNode[] => {
    console.log('actionsRender', layoutProps);
    return (
      [
        <Button type="primary">config</Button>,
        <Button type="primary">info</Button>
        ]
    )
  }

  const collapsedButtonRender = (collapsed: boolean): React.ReactNode => {
    if (collapsed) {
      return (
        <Button type='link' onClick={() => onCollapse(false)} title='展开'>
          <MenuUnfoldOutlined />
        </Button>
      )
    }
    return (
      <Button type='link' onClick={() => onCollapse(true)} title="折叠">
        <MenuFoldOutlined />
        </Button>
    )
  }

  const footerRender = (props: ProLayoutProps): React.ReactNode => {
    return (
      <div style={{ textAlign: 'center', padding: '16px 0' }}>
        <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">
          <img src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" alt="logo" style={{ width: '16px', marginRight: 8 }} />
          reactumi
        </a>
        <br />
        <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">reactumi</a>
        <span> - </span>
        <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">reactumi</a>
        <span> - </span>
        <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">reactumi</a>
      </div>
    )
  }

  // 自定义页面 时才会生效
  const pageTitleRender = (props: ProLayoutProps, defaultDom: React.ReactNode): string => {
    console.log('pageTitleRender', props, defaultDom);
    return  defaultDom as string;
  }

  const menuRender = (props: ProLayoutProps, dom: React.ReactNode): React.ReactNode => {
    console.log('menuRender', props, dom);
    return (
      dom
    )
  }

  const postMenuData = (menuData: any[]): any[] => {
    console.log('postMenuData', menuData);
    return menuData;
  }

  const menuItemRender = (item: any, dom: React.ReactNode, props: BaseMenuProps): React.ReactNode => {
    console.log('menuItemRender', item, dom);
    return dom;
  }

  const subMenuItemRender = (itemProps: MenuDataItem): React.ReactNode => {
    console.log('subMenuItemRender',itemProps);
    return <span>sub</span>;
  }

  const menuDataRender = (menuData: MenuDataItem[]): MenuDataItem[] => {
    console.log('menuDataRender', menuData);
    return menuData;
  }

  const breadcrumbRender = (route)=> {
    console.log('breadcrumbRender', route);
    return route
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const proLayoutProps = {
    title: 'reactumi',
    logo: 'assets/images/logo.png',
    pure: false,
    loading,
    appList,
    menuHeaderRender,
    menuFooterRender,
    onMenuHeaderClick,
    menuExtraRender,
    onTopMixMenuHeaderClick,
    contentStyle,
    layout,
    fixedHeader: true,
    fixSiderbar: true,
    siderWidth: 208,
    collapsed,
    onCollapse,
    onPageChange,
    headerRender,
    actionsRender,
    collapsedButtonRender,
    footerRender,
    pageTitleRender,
    menuRender,
    postMenuData,
    menuItemRender,
    subMenuItemRender,
    menuDataRender,
    breadcrumbRender
  }
  return (
    <ProLayout
      {...proLayoutProps}
    >{children}</ProLayout>
  )
}

export default BasicLayout;
