import { Tooltip, Button, Avatar } from 'antd';
import type { TooltipLinkProps } from '@/types';

export default function TooltipLink({ title, src }: TooltipLinkProps) {
  return (
    <Tooltip title={title}>
      <Button type="link">
        <Avatar shape="square" size={24} src={src} />
      </Button>
    </Tooltip>
  );
}