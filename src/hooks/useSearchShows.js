import { useState, useEffect } from 'react'
import tvmaze from '../api/tvmaze'

export default query => {
  const [shows, setShows] = useState([])

  useEffect(() => {
    ;(async () => {
      const results = await tvmaze.get(`/search/shows?q=${query}`)
      setShows(results.data)
    })()
  }, [])

  return shows
}
