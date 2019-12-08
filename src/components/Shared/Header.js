import styled from 'styled-components';

import ListLayout from '../Card/ListLayout';

const Header = styled(ListLayout)`
  padding: 1.25rem;
  text-transform: uppercase;
  font-weight: bold;
  color: rgb(179, 183, 201);

  div:first-child {
    flex: 1;
  }

  div:not(:first-child) {
    min-width: 96px;
  }
`;

export default Header;
