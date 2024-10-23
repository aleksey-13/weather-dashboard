'use client'

import { SkeletonTheme } from 'react-loading-skeleton'

import { FavoriteCitiesList } from '@/components/favoriteCitiesList/FavoriteCitiesList'
import { Head } from '@/components/head/Head'
import { SearchBar } from '@/components/searchBar/SearchBar'
import { Wrapper } from '@/components/ui/wrapper/Wrapper'
import { WeatherStatus } from '@/components/weatherStatus/WeatherStatus'
import { WeeklyForecast } from '@/components/weeklyForecast/WeeklyForecast'

import s from './Dashboard.module.sass'

export const Dashboard = () => {
	return (
		<main className={s.page}>
			<Wrapper>
				<SkeletonTheme
					baseColor='#5294e0'
					highlightColor='#96c7ff'
					borderRadius='0.5rem'
					duration={4}
				>
					<div className={s.inner}>
						<Head className={s.head} />
						<SearchBar className={s.searchBar} />
						<WeatherStatus className={s.weatherStatus} />
						<WeeklyForecast className={s.weeklyForecast} />
						<FavoriteCitiesList className={s.favoriteCitiesList} />
					</div>
				</SkeletonTheme>
			</Wrapper>
		</main>
	)
}
