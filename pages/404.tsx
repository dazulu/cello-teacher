import { useEffect } from 'react'

export default function Custom404() {
  useEffect(() => {
    // Just redirect to index on 404 - we only have 1 page
    window.location.href = '/'
  }, [])

  return null
}
