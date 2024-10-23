import { Noto_Sans } from 'next/font/google'
import 'react-loading-skeleton/dist/skeleton.css'
import { Toaster } from 'sonner'

import { SITE_NAME } from '@/constans/seo.constans'

import './globals.css'
import { Providers } from './providers'
import '@/styles/main.sass'

const notoStans = Noto_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '500', '600'],
	display: 'swap',
	variable: '--noto-sans-font',
	style: ['normal']
})

export const metadata = {
	title: SITE_NAME,
	description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={notoStans.className}>
				<Providers>
					{children}

					<Toaster
						theme='dark'
						position='bottom-right'
						duration={2000}
						toastOptions={{
							style: {
								padding: 10
							}
						}}
					/>
				</Providers>
			</body>
		</html>
	)
}
