import styled, { keyframes } from 'styled-components';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Circle = styled.div`
  width: 4rem;
  height: 4rem;
  border: 2px solid rgba(255, 255, 255, .2);
  border-right-color: #FFFFFF;
  border-radius: 50%;
  margin: auto;
  animation: ${rotate} var(--timing-base) linear infinite;
`;
