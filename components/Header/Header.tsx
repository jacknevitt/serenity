import Link from 'next/link';
import { StyledHeader, TopnavContainer, IconsNav, IconLink } from './styles';

type Props = {
  title?: string;
};

const Header: React.FunctionComponent<Props> = ({ title = 'SofaStore' }: Props) => (
  <StyledHeader>
    <div>
      <TopnavContainer>
        <h1 style={{ flexGrow: 1 }}>{title}</h1>
        <IconsNav>
          <Link href="/">
            <IconLink aria-label="Account">
              <img src="/icons/user-alt.svg" alt="" width="25" height="25" />
              <small>Account</small>
            </IconLink>
          </Link>
          <Link href="/">
            <IconLink>
              <img src="/icons/shopping-bag.svg" alt="" width="25" height="25" />
              <small>Basket</small>
            </IconLink>
          </Link>
        </IconsNav>
      </TopnavContainer>
    </div>
    <nav></nav>
  </StyledHeader>
);

export default Header;
