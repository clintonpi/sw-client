import { Nav } from 'reactstrap';
import logo from '../../images/logo.png';
import styled from 'styled-components';

export const Logo = styled.img.attrs({
	src: logo,
	alt: 'Star Wars',
})`
	width: 12.6875rem;
`;

export const StyledNav = styled(Nav)`
	border-top: var(--brand-border) !important;
	border-bottom: var(--brand-border) !important;
	justify-content: center;
`;

export const NavButton = styled.button`
	background-color: transparent;
	border: 1px solid transparent;
	padding: .75rem 1rem;
	color: inherit;
	text-transform: uppercase;

	&:hover {
		background-color: var(--glass--md);
	}

	&.active {
		border-left: var(--brand-border);
		border-right: var(--brand-border);
	}
`;

