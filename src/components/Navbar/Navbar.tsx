'use client'

import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { MenuMain } from '@lib/constants/NavbarConstants'
import { Burger, Drawer } from '@mantine/core'

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
				<div className={styles.nav_item_main}>
					&#x0950; Durga Bhawan Mandir
				</div>
				<div className={styles.nav_menu}>
					{MenuMain.map(MenuItem => (
						(MenuItem.showItemMain && (
							<div className={styles.nav_item_main} key={MenuItem.name}>
							{(MenuItem.iconPrefer && MenuItem.icon) && (
								<MenuItem.icon size={25}/>
								)}
							{(!MenuItem.iconPrefer || 
								(MenuItem.iconPrefer && !MenuItem.icon)) && (
									MenuItem.display
								)}
							</div>
						))
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

					<Drawer
						opened={bMobileMenuOpen}
						onClose={()=>setbMobileMenuOpen(false)}
						position='bottom'
						withCloseButton={false}
						classNames={{ 
							body: styles.nav_drawer_body,
							content: styles.nav_drawer_content
						}}
					>
						<div>
							<div className={styles.nav_item_mobile_title}>
								<div className={styles.nav_item_mobile}>
									&#x0950; Durga Bhawan Mandir
								</div>
								<Burger 
									opened={bMobileMenuOpen} 
									onClick={() => setbMobileMenuOpen(state => !state)}
									size={24}
									color='white'
								/>
							</div>
							{MenuMain.map(MenuItem => (
								(MenuItem.showItemMobile && (
									<div className={styles.nav_item_mobile} key={MenuItem.name}>
										{MenuItem.display}
									</div>
								))
							))}
						</div>
					</Drawer>
				</div>
			</div>
		</div>
	)
}

export default Navbar