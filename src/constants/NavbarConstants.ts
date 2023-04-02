import { MenuItemMain } from "@lib/types/MenuItemMain";
import { MdHome } from 'react-icons/md';

const MenuItemHome: MenuItemMain = {
	name: 'homepage',
	display: 'Home',
	iconPrefer: true,
	icon: MdHome,
}

const MenuItemAbout: MenuItemMain = {
	name: 'aboutus',
	display: 'About',
	iconPrefer: false,
}

const MenuItemBooking: MenuItemMain = {
	name: 'booking',
	display: 'Booking',
	iconPrefer: false,
}

const MenuItemGoingOn: MenuItemMain = {
	name: 'goingon',
	display: 'Caldendar',
	iconPrefer: false,
}

const MenuItemMatrimonial: MenuItemMain = {
	name: 'matrimony',
	display: 'Matrimonial',
	iconPrefer: false,
}

const MenuItemTeam: MenuItemMain = {
	name: 'team',
	display: 'Team',
	iconPrefer: false,
}

const MenuItemContact: MenuItemMain = {
	name: 'contact',
	display: 'Contact',
	iconPrefer: false,
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