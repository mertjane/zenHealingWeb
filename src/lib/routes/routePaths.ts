export const ROUTES = {
HOME: '/',
ABOUT_US: '/about',
CONTACT: '/contact',
SESSIONS: '/sessions',
BOOK_NOW: 'https://www.fresha.com/a/zen-healing-brighton-and-hove-florence-road-fwwt35tm?preview=6791cda4-a6b6-4820-9661-ca96648ff343&share&pId=2523988&_gl=1*1xiw2bl*_gcl_au*ODIzMDI5ODgyLjE3NDQ2Njg2NTUuMzc0NjA5NTI3LjE3NDQ2Njg4MjUuMTc0NDY2ODgyNQ..*_ga*MTU1MTkwOTY5Ny4xNzQ0NjY4NjU2*_ga_SMQNG7NE8C*MTc0NTUyMTQ3My40LjEuMTc0NTUyNDU4OS4xMC4wLjA.',
INSTAGRAM: 'https://www.instagram.com/zen.healing.reiki/',
FACEBOOK: '/'
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];