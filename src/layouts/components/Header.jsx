import './Header.scss'
import { Link } from 'react-router-dom'
import TooltipLink from '@/components/TooltipLink'
import customer from '@/assets/images/customer.svg'
import logout from '@/assets/images/logout.svg'
export default function Header() {
  return (
    <div className="header">
      <Link to="/home">
        <img alt="logo" />
      </Link>
      <div className="header-right">
        <TooltipLink title="员工名录" src={customer}></TooltipLink>
        <TooltipLink title="退出系统" src={logout}></TooltipLink>
      </div>
    </div>
  )
}
