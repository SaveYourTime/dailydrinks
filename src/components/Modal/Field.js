import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  color: rgb(21, 37, 67);
  margin: 6px 0;
`;

const Input = styled.input`
  margin: 6px 0;
  max-width: 100%;
  width: 100%;
  flex: 1 0 auto;
  outline: 0;
  padding: 10px 16px;
  background: rgb(238, 240, 243);
  border: 0;
  color: rgb(21, 37, 67);
  border-radius: .28571429rem;
  transition: box-shadow .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease;
  box-shadow: none;
`;

const Textarea = styled.textarea`
  margin: 6px 0;
  max-width: 100%;
  width: 100%;
  flex: 1 0 auto;
  outline: 0;
  padding: 10px 16px;
  background: rgb(238, 240, 243);
  border: 0;
  color: rgb(21, 37, 67);
  border-radius: .28571429rem;
  transition: box-shadow .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease;
  box-shadow: none;
`;

function Field(props) {
  const { title, textarea, children, name, placeholder, handleInputChange } = props;
  return (
    <>
      <Title>{title}</Title>
      {textarea ?
        <Textarea
          name={name}
          placeholder={placeholder}
          onChange={handleInputChange}
          value={children} 
        /> :
        <Input
          name={name}
          placeholder={placeholder}
          onChange={handleInputChange}
          value={children}
        />}
    </>);
}

export default Field;
