import styled from 'styled-components';

const AddButton = styled.div`
  position: fixed;
  background: rgb(21,37,67);
  width: 60px;
  height: 60px;
  right: 30px;
  bottom: 30px;
  border-radius: 50%;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,.12);
  cursor: pointer;
  opacity: .8;
  text-align: center;
  line-height: 56px;
  font-size: 28px;
  color: rgba(255,255,255,1);

  &:hover {
    opacity: 1;
  }

  &::before {
    position: relative;
    z-index: 100;
    content:"+";
  }
`;


export default AddButton;
