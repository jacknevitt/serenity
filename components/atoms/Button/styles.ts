import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme }): string => theme.colors.primary || 'none'};
  color: white;
  border-radius: 0px;
  border: none;
  appearance: none;
  font-size: 1em;
  padding: 0.5em 1em;
`;
