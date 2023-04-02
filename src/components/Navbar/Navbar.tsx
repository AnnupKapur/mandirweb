'use client'

import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { MenuMain } from '@lib/constants/NavbarConstants'
import { Burger } from '@mantine/core'

type Props = {}

const Navbar = (props: Props) => {

	const [bMobileMenuOpen, setbMobileMenuOpen] = useState(false);

	return (
		<div
			className={styles.nav_main}
		>
			<div
				className={styles.nav_left}
			>
				<div className={styles.nav_menu}>
					{MenuMain.map(MenuItem => (
						<div className={styles.nav_item} key={MenuItem.name}>
							{(MenuItem.iconPrefer && MenuItem.icon) && (
								<MenuItem.icon size={25}/>
								)}
							{(!MenuItem.iconPrefer || 
								(MenuItem.iconPrefer && !MenuItem.icon)) && (
									MenuItem.display
									)}
						</div>
					))}
				</div>
			</div>
			
			<div
				className={styles.nav_right}
			>
				<div
					className={styles.nav_open_button}
				>
					<Burger 
						opened={bMobileMenuOpen} 
						onClick={() => setbMobileMenuOpen(state => !state)}
						size={24}
						color='white'
					/>
				</div>
			</div>
		</div>
	)
}

export default Navbar