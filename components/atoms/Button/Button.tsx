import { StyledButton } from './styles';

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
