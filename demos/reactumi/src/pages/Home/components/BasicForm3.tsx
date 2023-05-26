import { ProForm, ProFormDependency, ProFormRadio, ProFormText, ProFormSelect } from '@ant-design/pro-components'
import { Col, message, Row, Space } from 'antd';
import { useState } from 'react';

type LayoutType = Parameters<typeof ProForm>[0]['layout'];
const LAYOUT_TYPE_HORIZONTAL = 'horizontal';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time)
  })
}

export default () => {
  const [formLayoutType, setFormLayoutType] = useState<LayoutType>(
    LAYOUT_TYPE_HORIZONTAL
  );

  const formItemLayout = formLayoutType === LAYOUT_TYPE_HORIZONTAL
    ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    }
    : null;

  return (
    <ProForm<{
      name: string;
      name2: string;
      company?: string;
      useMode?: string;
    }>
      {...formItemLayout}
      layout={formLayoutType}
      submitter={{
        render: (props, doms) => {
          return formLayoutType === LAYOUT_TYPE_HORIZONTAL ? (
            <Row>
              <Col span={14} offset={4}>
                <Space>{doms}</Space>
              </Col>
            </Row>
          ) : (
            doms
          )
        }
      }}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('提交成功');
      }}
      initialValues={{
        name: '蚂蚁设计有限公司',
        useMode: 'chapter',
        name2: '蚂蚁集团',
      }}
      params={{}}
      request={async () => {
        await waitTime(2000);
        return {
          name: '蚂蚁设计有限公司',
          useMode: 'chapter',
          name2: '蚂蚁集团',
        };
      }}
    >
      <ProFormRadio.Group
        style={{
          margin: 16,
        }}
        label="标签布局"
        radioType='button'
        fieldProps={{
          value: formLayoutType,
          onChange: (e) => setFormLayoutType(e.target.value),
        }}
        options={['horizontal', 'vertical', 'inline']}
      />
      <ProFormText
        width="md"
        name={'name'}
        label={'签约客户名称'}
        tooltip={'最长为 24 位'}
        placeholder={'请输入名称'}
      />
      <ProFormText
        width="md"
        name={['name2', 'text']}
        label={'签约客户名称'}
        tooltip={'最长为 24 位'}
        placeholder={'请输入名称'}
      />
      {/* ProFormDependency 会自动注入并且进行 shouldUpdate的比对 */}
      <ProFormDependency name={['name', ['name2', 'text']]}>
        {({ name, name2 }) => {
          return (
            <ProFormSelect
              options={[
                {
                  value: 'chapter',
                  label: '改造后生效',
                }
              ]}
              width="md"
              name={'useMode'}
              label={`与${name}关系与${name2?.text || ''}关系`}
            />
          )
        }}
      </ProFormDependency>
      {/* noStyle shouldUpdate 是必选的，写了 name 就会失效 */}
      <ProForm.Item noStyle shouldUpdate>
        {
          (form) => {
            return (
              <ProFormSelect
                options={[
                  {
                    value: 'chapter',
                    label: '盖章后生效',
                  }
                ]}
                width='md'
                name="useMode"
                label={`与${form.getFieldValue('name')}关系`}
              />
            )
          }
        }
      </ProForm.Item>
      <ProFormText
        width="md"
        name={'company'}
        label={'我方公司名称'}
        placeholder={'请输入名称'}
      />
      <ProFormText
        width="md"
        name={['contract', 'name']}
        label={'合同名称'}
        placeholder={'请输入名称'}
      />
    </ProForm>
  )
}
