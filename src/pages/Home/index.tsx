import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function toDetail() {
    navigate('/customer/list');
  }

  return (
    <div>
      <Button onClick={toDetail}>customer</Button>
    </div>
  );
}

export default Home;