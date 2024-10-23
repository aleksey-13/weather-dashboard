/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		// @import "/src/styles/variables.sass"
		additionalData: `
        @import "/src/styles/mixins.sass"`
	},
	images: {
		domains: ['openweathermap.org']
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
