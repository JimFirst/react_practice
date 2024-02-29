import { Link, Outlet } from 'react-router-dom'

function baseLayouts() {
    return (<>
        <div>Top</div>
        <div>
            <div>
                <Link to="/home">home</Link>
                <Link to="/user">User</Link>
            </div>
            <Outlet />
        </div>
    </>)
}

export default baseLayouts