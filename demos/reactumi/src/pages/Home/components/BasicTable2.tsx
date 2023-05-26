import { EllipsisOutlined, SearchOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components'
import { Button, Dropdown, Input } from 'antd';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  progress: number;
  money: number;
  memo: string;
};

const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '周星星', '吴加好', '朱偏右', '鱼酱', '乐哥', '谭小仪', '仲尼'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    progress: Math.ceil(Math.random() * 100) + 1,
    money: Math.floor(Math.random() * 2000) + 1,
    memo: '这是一段描述',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '排序',
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '应用名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
    filterDropdown: () => (
      <div style={{ padding: 8 }}>
        <Input style={{ width: 188, marginBottom: 8, display: 'block' }} />
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    valueEnum: {
      all: { text: '全部' },
      付小小: { text: '付小小' },
      曲丽丽: { text: '曲丽丽' },
      林东东: { text: '林东东' },
      周星星: { text: '周星星' },
      吴加好: { text: '吴加好' },
      朱偏右: { text: '朱偏右' },
      鱼酱: { text: '鱼酱' },
      乐哥: { text: '乐哥' },
      谭小仪: { text: '谭小仪' },
      仲尼: { text: '仲尼' },
    }
  },
  {
    title: '状态',
    dataIndex: 'status',
    initialValue: 'all',
    filters: true,
    onFilter: true,
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    }
  },
  {
    title: '备注',
    dataIndex: 'memo',
    ellipsis: true,
    copyable: true,
  },
  {
    title: '操作',
    valueType: 'option',
    width: 200,
    render: () => [
      <a key="link">链路</a>,
      <a key="warn">报警</a>,
      <TableDropdown
        key="actionGroup"
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />
    ]
  }
]

export default () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        console.log(params, sorter, filter)
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        })
      }}
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      search={{
        layout: 'vertical',
        defaultCollapsed: false,
      }}
      dateFormatter="string"
      toolbar={{
        title: '高级表格',
        tooltip: '这是一个标题提示',
      }}
      toolBarRender={() => [
        <Button key="danger" danger>危险按钮</Button>
      ]}
    ></ProTable>
  )
}
