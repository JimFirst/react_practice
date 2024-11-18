import { useLocation, useNavigate } from 'react-router-dom'

export function useQuery() {
  const location = useLocation()
  const { state, pathname, search } = location
  const navigate = useNavigate()
  function setQuery(params) {
    navigate(pathname + search, {
      replace: true,
      state: {
        ...(state || {}),
        query: JSON.stringify(params),
      },
    })
  }
  function getQuery() {
    return state
  }
  return {
    setQuery,
    getQuery,
  }
}
