import Link from 'next/link'

import Heading from '@/ui/Heading'

export default function NotFound() {
	return (
		<>
			<Heading>Бет табылмады</Heading>
			<p>Сұралған ресурс табылмады</p>
			<p>
				View{' '}
				<Link href='/explorer' className='text-primary'>
					Барлық тауарлар
				</Link>
			</p>
		</>
	)
}
