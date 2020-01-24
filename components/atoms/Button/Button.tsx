import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 0px;
  border: none;
  appearance: none;
  font-size: 1em;
  padding: 0.5em 1em;
`;

type Props = {
  disabled?: boolean;
};

const Button: React.FunctionComponent<Props> = ({ children, disabled }) => (
  <StyledButton type="button" disabled={disabled}>
    {children}
  </StyledButton>
);

export default Button;
