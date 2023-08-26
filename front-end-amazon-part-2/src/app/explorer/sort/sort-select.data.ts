import { ISelectItem } from '@/ui/select/select.interface'

import { EnumProductSort } from '@/services/product/product.types'

export const SORT_SELECT_DATA: ISelectItem<EnumProductSort>[] = [
	{
		key: EnumProductSort.HIGH_PRICE,
		label: 'Жоғары бағалардан бастап'
	},
	{
		key: EnumProductSort.LOW_PRICE,
		label: 'Төмен бағалардан бастап'
	},
	{
		key: EnumProductSort.NEWEST,
		label: 'Жаңа тауарлардан бастап'
	},
	{
		key: EnumProductSort.OLDEST,
		label: 'Ескі тауарлардан бастап'
	}
]
