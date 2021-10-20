import styled from 'styled-components';

export const RootCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const RootCardLgHeader = styled(RootCardHeader)`
  margin-bottom: 3rem;
`;

export const RootCardHeaderBtn = styled.button`
  align-self: start;
  flex-shrink: 0;
  background-color: transparent;
  border: 0;
  padding: .25rem;
  color: inherit;
  text-shadow: inherit;
`;

export const RootCardList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: center;
  padding: 0;
  margin-bottom: 0;
`;

export const RootCardLgList = styled(RootCardList)`
  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const MainInfoKey = styled.h2`
	font-size: var(--text-md);
	font-weight: bold;
	margin-bottom: .25rem;
`;

export const MainInfoKeyLg = styled(MainInfoKey)`
  font-size: var(--text-2xl);
  margin-bottom: .5rem;
`;

export const SubInfoKey = styled.h3`
	font-size: var(--text-xs);
	font-weight: bold;
	text-transform: uppercase;
	margin-bottom: .25rem;
`;

export const SubInfoKeyLg = styled(SubInfoKey)`
	font-size: var(--text-base);
	margin-bottom: .5rem;
`;

export const InfoValue = styled.p`
	font-size: var(--text-xs);
	margin-bottom: 0;
`;

export const InfoValueLg = styled(InfoValue)`
	font-size: var(--text-base);
`;

export const InfoPairListItem = styled.li`
	width: 30%;

  &:first-of-type {
    text-align: left;
  }

  &:last-of-type {
    text-align: right;
  }
`;

export const RootCardLgWrap = styled.div`
  position: absolute;
  top: 3rem;
	right: 0;
	left: 0;
	margin: auto;
	width: 95%;
	max-width: 37rem;
`;
