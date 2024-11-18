import { Form, Button, Space } from 'antd-mobile'
import { SelectDropdown } from '@/components'
import { useNavigate } from 'react-router-dom'

export default function SceneSample() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  function submit() {
    console.log(form.getFieldsValue())
    navigate('/sample/detail')
  }
  return (
    <Form
      layout="horizontal"
      form={form}
      footer={
        <div>
          <Button
            block
            type="submit"
            color="primary"
            size="large"
            onClick={submit}
          >
            进入现场抽盘
          </Button>
          <Button
            block
            type="submit"
            size="large"
            onClick={submit}
            style={{ marginTop: 12 }}
          >
            下载抽盘表
          </Button>
        </div>
      }
    >
      <Form.Item
        name="name"
        label="仓库名称"
        rules={[{ required: true, message: '请选择仓库名称' }]}
      >
        <SelectDropdown />
      </Form.Item>
      <Form.Item
        name="address"
        label="执行情况"
        rules={[{ required: true, message: '请选择执行情况' }]}
      >
        <SelectDropdown />
      </Form.Item>
    </Form>
  )
}
