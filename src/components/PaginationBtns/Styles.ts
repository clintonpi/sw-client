import styled from 'styled-components';

export const PaginationBtn = styled.button`
	color: inherit;
	padding: .5rem 1rem;
	border: var(--brand-border);
	transition: var(--timing-base);
	width: 6.25rem;
	text-transform: uppercase;
	font-size: var(--text-sm);

	&:first-of-type {
		border-top-left-radius: var(--rounded-md);
		border-bottom-left-radius: var(--rounded-md);
	}

	&:last-of-type {
		border-top-right-radius: var(--rounded-md);
		border-bottom-right-radius: var(--rounded-md);
	}
`;
