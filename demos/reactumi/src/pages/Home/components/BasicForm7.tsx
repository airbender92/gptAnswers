import { CloseCircleOutlined, SmileOutlined } from '@ant-design/icons'
import {
  ProForm,
  ProFormGroup,
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';

const DemoA = () => {
  return (
    <ProForm onFinish={async (e) => console.log(e)}>
      <ProFormText name="name" label="姓名" />
      <ProFormList name="labels" label="用户信息" initialValue={[
        {
          value: '333',
          label: '333'
        }
      ]}
        copyIconProps={{ Icon: SmileOutlined, tooltipText: 'copy' }}
        deleteIconProps={{Icon: CloseCircleOutlined, tooltipText: 'del'}}
      >
        <ProFormGroup key="group">
          <ProFormText name="value" label="值" />
          <ProFormText name="label" label="标签" />
        </ProFormGroup>
      </ProFormList>
    </ProForm>
  )
}

export default DemoA
