import axios from 'axios'
import { useEffect, useState } from 'react'
import Spinner from './components/Spinner/Spinner'

export default function Weather() {
  const [location, setLocation] = useState('Oslo')
  const [submittedLocation, setSubmittedLocation] = useState('Oslo')
  const [locationData, setLocationData] = useState({})
  const [apiResponse, setApiResponse] = useState(false)

  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${submittedLocation}&units=metric&appid=${
        import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
      }`
      const resp = await axios.get(url)
      setLocationData(resp.data)
      setApiResponse(true)
    }
    fetchWeather()
  }, [submittedLocation])

  const submitLocation = (e) => {
    e.preventDefault()
    setSubmittedLocation(location)
  }

  if (!apiResponse) {
    return <Spinner />
  }

  const iconUrl = `http://openweathermap.org/img/w/${locationData.weather[0].icon}.png`

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='city-name'>{locationData.name}</div>
        <div className='temp'>
          {locationData.main.temp}
          <img src={iconUrl} alt='city' />
        </div>
      </div>

      <div className='row justify-content-center'>
        <form onSubmit={submitLocation}>
          <input
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input type='submit' className='btn btn-primary' value='Search!' />
        </form>
      </div>
    </div>
  )
}
