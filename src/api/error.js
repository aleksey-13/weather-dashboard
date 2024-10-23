import { toast } from 'sonner'

export const errorCatch = error => {
	const message = error?.response?.data?.message

	console.error('ERROR: ', message)
	toast.success(`Could not fetch, received - ${message}`)

	return message
}
