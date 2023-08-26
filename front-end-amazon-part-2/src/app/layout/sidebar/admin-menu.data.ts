import { getAdminUrl } from '@/config/url.config'

import { IMenuItem } from './menu.interface'

export const ADMIN_MENU: IMenuItem[] = [
	{
		label: 'Статистика',
		href: getAdminUrl()
	},
	{
		label: 'Тауарлар',
		href: getAdminUrl('/products')
	},
	{
		label: 'Категориялар',
		href: getAdminUrl('/categories')
	},
	{
		label: 'Пікірлер',
		href: getAdminUrl('/reviews')
	},
	{
		label: 'Тапсырыстар',
		href: getAdminUrl('/orders')
	}
]
