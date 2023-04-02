import { MenuItemMain } from "@lib/types/MenuItemMain";
import { MdHome } from 'react-icons/md';

const MenuItemHome: MenuItemMain = {
	name: '',
	display: 'Home',
	iconPrefer: false,
	icon: MdHome,
	showItemMain: false,
	showItemMobile: true,
}

const MenuItemAbout: MenuItemMain = {
	name: 'aboutus',
	display: 'About',
	iconPrefer: false,
	showItemMain: true,
	showItemMobile: true,
}

const MenuItemBooking: MenuItemMain = {
	name: 'booking',
	display: 'Booking',
	iconPrefer: false,
	showItemMain: true,
	showItemMobile: true,
}

const MenuItemGoingOn: MenuItemMain = {
	name: 'goingon',
	display: 'Caldendar',
	iconPrefer: false,
	showItemMain: true,
	showItemMobile: true,
}

const MenuItemMatrimonial: MenuItemMain = {
	name: 'matrimony',
	display: 'Matrimonial',
	iconPrefer: false,
	showItemMain: true,
	showItemMobile: true,
}

const MenuItemTeam: MenuItemMain = {
	name: 'team',
	display: 'Team',
	iconPrefer: false,
	showItemMain: true,
	showItemMobile: true,
}

const MenuItemContact: MenuItemMain = {
	name: 'contact',
	display: 'Contact',
	iconPrefer: false,
	showItemMain: true,
	showItemMobile: true,
}

export const MenuMain = [
	MenuItemHome,
	MenuItemAbout,
	MenuItemGoingOn,
	MenuItemBooking,
	MenuItemMatrimonial,
	MenuItemTeam,
	MenuItemContact,
];