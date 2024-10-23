/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		additionalData: `@import "/src/styles/mixins.sass"`
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'openweathermap.org'
			}
		]
	},
	webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			issuer: /\.[jt]sx?$/,
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [
						{
							name: 'preset-default',
							params: {
								overrides: {
									removeViewBox: false
								}
							}
						}
					]
				},
				titleProp: true
			},
			test: /\.svg$/
		})

		return config
	}
}

export default nextConfig
