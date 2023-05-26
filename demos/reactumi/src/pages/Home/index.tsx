import React from 'react';
import {
  PageContainer,
  ProCard,
  ProConfigProvider,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import {
  Button,
  Divider,
  Input,
  DropDownProps,
  Popover,
  theme,
  Dropdown,
  ConfigProvider,
} from 'antd';
import BasicForm from './components/BasicForm';
import BasicForm2 from './components/BasicForm2';
import BasicForm3 from './components/BasicForm3';
import BasicForm4 from './components/BasicForm4';
import BasicForm5 from './components/BasicForm5';
import BasicForm6 from './components/BasicForm6';
import BasicForm7 from './components/BasicForm7';
import BasicForm8 from './components/BasicForm8';
import BasicForm9 from './components/BasicForm9';
import BasicForm10 from './components/BasicForm10';
import BasicTable from './components/BasicTable';
import BasicTable2 from './components/BasicTable2';
import DraggableModal from './components/DraggabeModal';

const Home = () => {
  const [num, setNum] = React.useState(40);
  const [visible, setVisible] = React.useState(false);
  return (
    <PageContainer
      token={{
        paddingInlinePageContainerContent: num,
      }}
      extra={[
        <Button key="3">操作</Button>,
        <Button key="2">操作</Button>,
        <Button
          key="1"
          type="primary"
          onClick={() => {
            setNum(num > 0 ? 0 : 40);
          }}
        >
          主操作
        </Button>,
      ]}
      subTitle="欢迎使用"
      footer={[
        <Button key="3">重置</Button>,
        <Button key="2" type="primary">
          提交
        </Button>,
      ]}
      tabList={[
        {
          tab: '基本信息',
          key: 'base',
        },
        {
          tab: '详细信息',
          key: 'info',
        },
        {
          tab: '禁用',
          key: 'disable',
          disabled: true,
        },
      ]}
    >
      <ProCard direction="column" ghost gutter={[0, 16]}>
        <ProCard style={{ height: 300, overflow: 'auto' }}>
          <BasicForm />
        </ProCard>
        <ProCard gutter={16} ghost>
          <ProCard colSpan={16} layout="center" bordered>
            <Button onClick={ () => setVisible(true)}>展开</Button>
          </ProCard>
          <ProCard colSpan={8} layout="center" bordered>
            nihao
          </ProCard>
        </ProCard>
        <ProCard style={{ height: 500, overflow: 'auto' }}>
          <BasicForm2 />
        </ProCard>
         <ProCard style={{ height: 500, overflow: 'auto' }}>
          <BasicForm3 />
        </ProCard>
          <ProCard style={{ height: 500, overflow: 'auto' }}>
          <BasicForm4 />
        </ProCard>
           <ProCard style={{ height: 500, overflow: 'auto' }}>
          <BasicForm5 />
        </ProCard>
             <ProCard title="BasicForm6" style={{ height: 500, overflow: 'auto' }}>
          <BasicForm6 />
        </ProCard>

           <ProCard title="BasicForm7" style={{ height: 500, overflow: 'auto' }}>
          <BasicForm7 />
        </ProCard>
            <ProCard title="BasicForm8" style={{ height: 500, overflow: 'auto' }}>
          <BasicForm8 />
        </ProCard>
         <ProCard title="BasicForm9" style={{ height: 500, overflow: 'auto' }}>
          <BasicForm9 />
        </ProCard>
        <ProCard title="BasicForm10" style={{ height: 500, overflow: 'auto' }}>
          <BasicForm10 />
        </ProCard>
         <ProCard title="BasicTable" style={{ height: 500, overflow: 'auto' }}>
          <BasicTable />
        </ProCard>
         <ProCard title="BasicTable2" style={{ height: 500, overflow: 'auto' }}>
          <BasicTable2 />
        </ProCard>
      </ProCard>
      <DraggableModal isOpen={visible} onCloseModal={ () => setVisible(false)}></DraggableModal>
    </PageContainer>
  );
};
export default Home;
