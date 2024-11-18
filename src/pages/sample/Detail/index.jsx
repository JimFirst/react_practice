import { List, Form, Button, TextArea, Radio, Space, Input } from 'antd-mobile'
import { SelectDropdown } from '@/components'

export default function SampleDetail() {
  const [form] = Form.useForm()
  function submit() {
    console.log(form.getFieldsValue())
  }
  return (
    <>
      <List header="存货基本信息">
        <List.Item extra="内容">仓库名称</List.Item>
        <List.Item extra="内容">存货编号</List.Item>
        <List.Item extra="内容">存货名称</List.Item>
        <List.Item extra="内容">存货类型</List.Item>
        <List.Item extra="内容">规格型号</List.Item>
        <List.Item extra="内容">计量单位</List.Item>
        <List.Item extra="内容">结存数量</List.Item>
        <List.Item extra="内容">参考单位</List.Item>
        <List.Item extra="内容">参考结存金额</List.Item>
        <List.Item extra="内容">备注</List.Item>
        <List.Item extra="内容">抽取方式</List.Item>
      </List>
      <List header="抽盘信息录入">
        <Form
          layout="horizontal"
          form={form}
          footer={
            <Button
              block
              type="submit"
              color="primary"
              size="large"
              onClick={submit}
            >
              保存
            </Button>
          }
        >
          <Form.Item
            name="name"
            label="抽盘数量"
            rules={[{ required: true, message: '请输入抽盘数量' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item name="name" label="累计抽盘数量">
            2010
          </Form.Item>
          <Form.Item
            name="address"
            label="确认方式"
            rules={[{ required: true, message: '请选择执行情况' }]}
          >
            <SelectDropdown />
          </Form.Item>
          <Form.Item name="name" label="存货状态">
            <Radio.Group defaultValue="1">
              <Space>
                <Radio value="1">是</Radio>
                <Radio value="2">否</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="name" label="备注">
            <TextArea
              placeholder="请输入备注"
              maxLength={100}
              rows={2}
              showCount
            />
          </Form.Item>
        </Form>
      </List>
    </>
  )
}
