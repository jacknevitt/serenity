import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: 1px solid #ccc;
  background: white;
  color: black;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ theme }): string => (theme?.breakpoints?.large ? `${theme.breakpoints.large}px` : 'auto')};
`;

export const TopnavContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

export const IconsNav = styled.nav`
  display: grid;
  flex-grow: 0;
  grid-gap: 20px;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-auto-rows: min-content;
`;

export const IconLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
