
import {
  EditableProTable,
  ProForm,
  ProFormText,
  ProFormList,
  ProFormSelect,
  FormListActionType,
  ProColumns
} from '@ant-design/pro-components'
import { Input, message, Space, Button } from 'antd';
import React, { useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time)
  })
}

type DataSourceType = {
  id: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: string;
  children?: DataSourceType[];
}

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: '活动名称一',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: '2020-05-26T09:42:56Z',
  },
  {
    id: 624691229,
    title: '活动名称二',
    decs: '这个活动真好玩',
    state: 'closed',
    created_at: '2020-05-26T08:19:22Z',
  }
];

const columns: ProColumns<DataSourceType>[] = [
  {
    title: '活动名称',
    dataIndex: 'title',
    width: '30%',
  },
  {
    title: '状态',
    dataIndex: 'state',
    width: '20%',
    key: 'state',
    valueType: 'select',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
      }
    }
  },
  {
    title: '描述',
    dataIndex: 'decs',
    renderFormItem: (_, { record }) => {
      console.log('----===>', record);
      return <Input addonBefore={(record as any)?.addonBefore} />
    }
  },
  {
    title: '操作',
    valueType: 'option',

  }
]

export default () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => {
    return defaultData.map((item) => item.id)
  })

  const actionRef = React.useRef<
    FormListActionType<{
      name: string;
    }>
    >()

  const actionGuard = {
    beforeAddRow: async (defaultvalue, insertIndex, count) => {
      return new Promise((resolve) => {
        console.log('beforeAddRow', defaultvalue, insertIndex, count);
        setTimeout(() => resolve(true), 1000)
      })
    },
    beforeRemoveRow: async (index, count) => {
      const row = actionRef.current?.get(index as number);
      console.log('-------', index, count, row);
      return new Promise((resolve) => {
        if (index === 0) {
          resolve(false)
          return
        }
        setTimeout(() => resolve(true), 1000)
      })
    }
  }
  return (
    <>
      <Space>
        <Button type="primary"
          onClick={() => {
            const list = actionRef.current?.getList();
            actionRef.current?.add({
              name: '新增' + list?.length,
            })
          }}
        >增加一行</Button>
        <Button danger onClick={() => {
          actionRef.current?.remove(1)
        }}>删除一行</Button>
        <Button
          onClick={() => {
            actionRef.current?.move(1, 0);
          }}
        >
          移动到第一行
        </Button>
        <Button
          type="dashed"
          onClick={() => {
            const row = actionRef.current?.get(1);
            console.log(row);
          }}
        >
          获取一行数据
        </Button>
        <Button
          type="dashed"
          onClick={() => {
            const row = actionRef.current?.getList();
            console.log(row);
          }}
        >
          获取所有数据
        </Button>
      </Space>
    <ProForm<{
      name: string;
      company: string;
    }>
      onFinish={async (values) => {
        await waitTime(2000);
        console.log('BasicForm6====》',values);
        message.success('提交成功');
      }}
      initialValues={{
        name: '蚂蚁设计有限公司',
        company: '蚂蚁集团',
        useMode: 'chapter',
      }}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          label="签约客户名称"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
        />
        <ProFormText
          width="md"
          name="company"
          label="我方公司名称"
          placeholder={'请输入名称'}
        />
      </ProForm.Group>
      <ProFormText width={'sm'} name='id' label="bainhao" />
      <ProForm.Item
        label="数组数据"
        name="dataSource"
        initialValue={defaultData}
        trigger="onValuesChange"
      >
        <EditableProTable<DataSourceType>
          rowKey="id"
          toolBarRender={false}
          columns={columns}
          recordCreatorProps={{
            newRecordType: 'dataSource',
            position: 'top',
            record: () => ({
              id: Date.now(),
              addonBefore: 'before',
              desc: 'desc',
            })
          }}
          editable={{
            type: 'multiple',
            editableKeys,
            onChange: setEditableRowKeys,
            actionRender: (row, config, dom) => {
              return [dom.delete]
            }
          }}
        />
      </ProForm.Item>
      <ProFormList
        name="users"
        initialValue={[
          {
            useMode: 'chapter',
          }
        ]}
        creatorButtonProps={{
          position: 'top',
          creatorButtonText: '再建一行',
        }}
        creatorRecord={{
          useMode: 'none',
        }}
      >
        <ProFormSelect
          key="useMode"
          options={[
            {
              value: 'chapter',
              label: '盖章后生效',
            },
            {
              value: 'none',
              label: '不生效',
            }
          ]}
          width="md"
          name="useMode"
          label="合同约定生效方式A"
        />
        </ProFormList>
        <ProFormList name="useMode2" actionGuard={actionGuard} actionRef={actionRef}>
          <ProFormText key='useMode2' name='useMode2' label="姓名" />
        </ProFormList>
      </ProForm>
      </>
  )
}
