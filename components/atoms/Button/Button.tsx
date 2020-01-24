import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }): string => theme.colors.primary};
  color: white;
  border-radius: 0px;
  border: none;
  appearance: none;
  font-size: 1em;
  padding: 0.5em 1em;
`;

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
};

const Button: React.FunctionComponent<Props> = ({ children, disabled }: Props) => (
  <StyledButton type="button" disabled={disabled}>
    {children}
  </StyledButton>
);

export default Button;
