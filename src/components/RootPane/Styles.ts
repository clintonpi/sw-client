import styled from 'styled-components';

export const RootPaneGrid = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
	}
`;
