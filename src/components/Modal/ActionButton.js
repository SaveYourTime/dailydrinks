import styled from 'styled-components';

const ActionButton = styled.li`
  flex: 1;
  padding: 16px;
  color: ${props => props.primary ? '#fff' : 'rgb(21,37,67)'};
  background: ${props => props.primary ? 'rgb(21,37,67)' : '#fff'};
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  transition: background-color .1s;

  &:first-child {
    border-bottom-left-radius: .3rem;
  }

  &:last-child {
    border-bottom-right-radius: .3rem;
  }

  &:not(:last-child) {
    border-right: 2px solid #e8e8e8;
  }

  &:hover {
    background: ${props => props.primary ? 'rgb(12, 29, 62)' : '#f3f3f3'};
  }
`;

export default ActionButton;