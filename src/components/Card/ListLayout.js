import styled from 'styled-components';

const ListLayout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;

  & > div:first-child {
    flex: 1;
  }

  & > div:not(:first-child) {
    min-width: 96px;
  }
`;

export default ListLayout;
