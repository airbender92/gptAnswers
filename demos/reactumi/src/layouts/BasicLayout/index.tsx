import {
  CaretDownFilled,
  DoubleRightOutlined,
  GithubFilled,
  InfoCircleFilled,
  LogoutOutlined,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined
} from '@ant-design/icons';

import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProCard,
  ProConfigProvider,
  ProLayout,
  SettingDrawer
} from '@ant-design/pro-components';
import { css } from '@emotion/css';
import {
  Button,
  Divider,
  Input,
  DropDownProps,
  Popover,
  theme,
  Dropdown,
  ConfigProvider
} from 'antd';
import React, { useState } from 'react';
import { history } from 'umi';
import defaultProps from './_defaultProps';

const Item: React.FC<{ children: React.ReactNode }> = (props) => {

  return (
    <div
      className={css`
        color: #333;
        font-size: 14px;
        cursor: pointer;
        line-height: 22px;
        marg-bottom: 8px;
        &:hover {
          color: #999;
        }
      `}
      style={{
        width: '33.33%'
      }}
    >
      {props.children}
      <DoubleRightOutlined
        style={{
          marginInlineStart: 4,
        }}
      />
    </div>
  )
};

const List: React.FC<{ title: string; style?: React.CSSProperties }> = (props) => {

  return (
    <>
      <div
        style={{
          width: '100%',
          ...props.style
        }}
      >
        <div
          style={{
            fontSize: 16,
            color: '#333',
            lineHeight: '24px',
            fontWeight: '500',
            marginBlockEnd: 16
          }}
        >{props.title}</div>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}>
        {new Array(6).fill(1).map((_, index) => {
          return <Item key={index}>具体的解决方案-{index}</Item>
        })}
      </div>
    </>
  )
};

const MenuCard = () => {

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Divider
        style={{
          height: '1.5em',
        }}
        type='vertical'
      />
      <Popover
        placement='bottom'
        overlayStyle={{
          width: 'calc(100vw - 24px)',
          padding: '24px',
          paddingTop: 8,
          height: '307px',
          borderRadius: '0 0 6px 6px',
        }}
        content={
          <div
            style={{ display: 'flex', padding: '32px 40px'}}
          >
            <div style={{ flex: 1 }}>
              <List title='金融解决方案' />
              <List title="其他解决方案"
                style={{
                  marginBlockStart: 32
                }}
              />
            </div>

            <div
               style={{
                width: '308px',
                borderInlineStart: '1px solid ' + '#333',
                paddingInlineStart: 16,
              }}
            >
               <div
                className={css`
                  font-size: 14px;
                  color: #333;
                  line-height: 22px;
                `}
              >
                热门产品
              </div>
            </div>
          </div>
        }
      >

      </Popover>
    </div>
  )
}


const SearchInput = () => {

  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: 'flex',
        alignItems: 'center',
        marginInlineEnd: 24,
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        style={{
          borderRadius: 2,
          marginInlineEnd: 8,
          backgroundColor: '#fff'
        }}
        prefix={
          <SearchOutlined
            style={{
              color: '#444',
            }}
          />
        }
        placeholder='搜索方案'
        bordered={false}
      />
      <PlusCircleFilled
        style={{
          color: '#666',
          fontSize: 24,
        }}
      />
    </div>
  )
}


export default (props) => {
  const [settings, setSettings] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'side',
    splitMenus: false,
  });

  const [pathname, setPathname] = useState('/home');

  if(typeof document === 'undefined') {
    return <div />;
  }

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <ProConfigProvider hashed={ true }>
        <ConfigProvider
          getTargetContainer={() => {
            return document.getElementById('test-pro-layout') || document.body;
          }}
        >
          <ProLayout
            prefixCls='my-prefix'
            bgLayoutImgList={[
              {
                src: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*9QcZQr5Q1KMAAAAAAAAAAAAAARQnAQ',
                left: 85,
                bottom: 100,
                height: '303px',
              },
              {
                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                bottom: -68,
                right: -45,
                height: '303px',
              },
              {
                src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                bottom: 0,
                left: 0,
                width: '331px',
              },
            ]}
            {...defaultProps}
            location={{
              pathname
            }}
            token={{
              header: {
                colorBgMenuItemSelected: 'rgba(0, 0,0,0, 0.04)'

              }
            }}
            siderMenuType='group'
            menu={{
              collapsedShowGroupTitle: true
            }}
            avatarProps={{
              src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
              size: 'small',
              title: '七妮妮',
              render: (props, dom) => {
                return (
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: 'logout',
                          icon: <LogoutOutlined />,
                          label: '退出登录',
                        },
                      ],
                    }}
                  >
                    {dom}
                  </Dropdown>
                );
              },
            }}
            actionsRender={(props) => {
              if (props.isMobile) return [];
              if (typeof window === 'undefined') return [];
              return [
                props.layout !== 'side' && document.body.clientWidth > 1400 ? (
                  <SearchInput />
                ) : undefined,
                <InfoCircleFilled key="InfoCircleFilled" />,
                <QuestionCircleFilled key="QuestionCircleFilled" />,
                <GithubFilled key="GithubFilled" />,
              ];
            }}
            headerTitleRender={(logo, title, _) => {
              const defaultDom = (
                <a>
                  {logo}
                  {title}
                </a>
              );
              if (typeof window === 'undefined') return defaultDom;
              if (document.body.clientWidth < 1400) {
                return defaultDom;
              }
              if (_.isMobile) return defaultDom;
              return (
                <>
                  {defaultDom}
                  <MenuCard />
                </>
              );
            }}
            menuFooterRender={(props) => {
              if (props?.collapsed) return undefined;
              return (
                <div
                  style={{
                    textAlign: 'center',
                    paddingBlockStart: 12,
                  }}
                >
                  <div>© 2021 Made with love</div>
                  <div>by Ant Design</div>
                </div>
              );
            }}
            menuItemRender={(item, dom) => (
              <div
                onClick={() => {
                  setPathname(item.path || '/home')
                  history.push(item.path || '/home')
                }}
              >{dom}</div>
            )}
            {...settings}

          >
            { props.children}
          </ProLayout>
        </ConfigProvider>

      </ProConfigProvider>
    </div>
  )
}
