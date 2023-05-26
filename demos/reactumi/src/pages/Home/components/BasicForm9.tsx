import {
  ProCard,
  ProForm,
  ProFormGroup,
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';

const BasicForm9 = () => {
  return (
    <ProForm onFinish={async (e) => console.log(e)}>
      <ProFormText name="name" label="姓名" />
      <ProFormList
        name="users"
        label="用户信息"
        initialValue={[{ name: '111' }, { name: '222' }]}
        itemRender={({ listDom, action }, { record }) => {
          return (
            <ProCard
              bordered
              extra={action}
              title={record?.name}
              style={{
                marginBlockEnd:8
              }}
            >
              { listDom}
            </ProCard>
          )
        }}
      >
        <ProFormGroup>
          <ProFormText name="name" label="姓名" />
          <ProFormText name="nickName" label="昵称" />
        </ProFormGroup>
        <ProFormList
          name="labels"
          label="标签"
          initialValue={[
            {
              value: '333',
              label: '333'
            }
          ]}
          copyIconProps={{
            tooltipText: '复制',
          }}
          deleteIconProps={{
            tooltipText: '删除',
          }}
        >
          <ProFormGroup key="group">
            <ProFormText name="value" label="值" />
            <ProFormText name="label" label="显示名称" />
          </ProFormGroup>
        </ProFormList>
      </ProFormList>
    </ProForm>
  )
}

export default BasicForm9;
