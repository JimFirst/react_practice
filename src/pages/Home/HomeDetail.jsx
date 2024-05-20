import { useLoaderData, useLocation, useParams } from "react-router-dom"

function HomeDetail() {
  const { id } = useParams()
  const location = useLocation()
  const loaderData = useLoaderData()
  console.log(location, loaderData)
  return (
    <div>detail {id}</div>
  )
}

export default HomeDetail