import type { Metadata } from 'next'
import style from './layout.module.scss'
import 'styles/global.scss'
import Navigation from '../components/layout/Navigation/Navigation'
import Sidebar from '../components/layout/Sidebar/Sidebar'
import MainProvider from 'providers/MainProvider'

export const metadata: Metadata = {
	title: 'kinozik',
	description: 'app for movie watching',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<MainProvider>
					<div className={style.layout}>
						<Navigation />
						<div className={style.center}>{children}</div>
						<Sidebar />
					</div>
				</MainProvider>
			</body>
		</html>
	)
}
