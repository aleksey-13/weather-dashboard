import { axiosWeather } from '@/api/weather'

import { k2c, parseDate } from '@/utils'

class WeatherService {
	async getCurrentWeather(cityName) {
		const response = await axiosWeather(
			`/weather?q=${cityName}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
		)

		return this.#_transformWeatherStatus(response.data)
	}

	async getWeeklyForecast(cityId) {
		const response = await axiosWeather(
			`/forecast?id=${cityId}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
		)

		return this.#_transformWeeklyForecast(response.data.list)
	}

	#_transformWeatherStatus(rawData) {
		return {
			...parseDate(rawData.dt),
			weatherIconSrc: `https://openweathermap.org/img/wn/${rawData.weather[0].icon}@2x.png`,
			weatherIconAlt: rawData.weather[0].description,
			temperature: k2c(rawData.main.temp),
			humidity: rawData.main.humidity,
			pressure: rawData.main.pressure,
			feelsLike: k2c(rawData.main.feels_like),
			windSpeed: rawData.wind.speed,
			cityName: rawData.name,
			id: rawData.id
		}
	}

	#_transformWeeklyForecast(rawData) {
		const NUM_OF_DAILY_FORECASTS = 8
		const NUM_OF_DAYS = 5
		const NUM_OF_STEP = 5

		const parsedWeatherForecastData = []

		for (let i = 0; i < NUM_OF_DAYS; i++) {
			const forecastIndex = i * NUM_OF_DAILY_FORECASTS + NUM_OF_STEP

			const forecastItem = {
				...parseDate(rawData[forecastIndex].dt),
				id: rawData[forecastIndex].dt,
				weatherIconSrc: `https://openweathermap.org/img/wn/${rawData[forecastIndex].weather[0].icon}@2x.png`,
				weatherIconAlt: rawData[forecastIndex].weather[0].description,
				temperature: k2c(rawData[forecastIndex].main.temp)
			}

			parsedWeatherForecastData.push(forecastItem)
		}

		return parsedWeatherForecastData
	}
}

export const weatherService = new WeatherService()
