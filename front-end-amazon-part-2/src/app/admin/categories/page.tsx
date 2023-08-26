import Categories from './Categories'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata = {
	title: 'Категориялар',
	...NO_INDEX_PAGE
}

export default function CategoriesPage() {
	return <Categories />
}
