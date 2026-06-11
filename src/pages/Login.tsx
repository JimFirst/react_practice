import useStore from '@/store';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login, permissions } = useStore();
  console.log(login, permissions);

  const navigate = useNavigate();

  async function handleLogin() {
    await login();
    navigate('/home');
  }

  return (
    <div>
      <Button onClick={handleLogin}>登录</Button>
    </div>
  );
}