import axios from 'axios'

const options = {
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL + '/data/2.5',
	headers: {
		'Content-Type': 'application/json'
	}
}

const axiosWeather = axios.create(options)

export { axiosWeather }
