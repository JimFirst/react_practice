import { Tooltip, Button, Avatar } from 'antd'

export default function TooltipLink(props) {
  const { title, src } = props
  return (
    <Tooltip title={title}>
      <Button type="link">
        <Avatar shape="square" size={24} src={src} />
      </Button>
    </Tooltip>
  )
}
