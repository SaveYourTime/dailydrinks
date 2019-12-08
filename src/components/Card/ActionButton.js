import styled from 'styled-components';

const ActionButton = styled.div`
    width: 24px;
    height: 24px;
    background: url(${props => props.url}) no-repeat;
    cursor: pointer;
    opacity: .7;

    &:hover {
    opacity: 1;
    }
`;

export default ActionButton;
