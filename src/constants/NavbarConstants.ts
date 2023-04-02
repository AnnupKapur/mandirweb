import { MenuItemMain } from "@lib/types/MenuItemMain";
import { MdHome } from 'react-icons/md';

const MenuItemHome: MenuItemMain = {
	name: 'homepage',
	display: 'Home',
	iconPrefer: false,
	icon: MdHome,
	showItemMain: false,
}

const MenuItemAbout: MenuItemMain = {
	name: 'aboutus',
	display: 'About',
	iconPrefer: false,
	showItemMain: true,
}

const MenuItemBooking: MenuItemMain = {
	name: 'booking',
	display: 'Booking',
	iconPrefer: false,
	showItemMain: true,
}

const MenuItemGoingOn: MenuItemMain = {
	name: 'goingon',
	display: 'Caldendar',
	iconPrefer: false,
	showItemMain: true,
}

const MenuItemMatrimonial: MenuItemMain = {
	name: 'matrimony',
	display: 'Matrimonial',
	iconPrefer: false,
	showItemMain: true,
}

const MenuItemTeam: MenuItemMain = {
	name: 'team',
	display: 'Team',
	iconPrefer: false,
	showItemMain: true,
}

const MenuItemContact: MenuItemMain = {
	name: 'contact',
	display: 'Contact',
	iconPrefer: false,
	showItemMain: true,
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