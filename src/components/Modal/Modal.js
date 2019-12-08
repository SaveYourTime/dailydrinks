import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import Field from './Field';
import Actions from './Actions';
import ActionButton from './ActionButton';

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .7);
  z-index: 999;
  top: 0;
`;

const PopModal = styled.div`
  max-width: 400px;
  min-width: 320px;
  width: 80%;
  min-height: 320px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: .3rem;
`;

const Form = styled.div`
  padding: 30px;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      quantity: 1,
      note: ''
    }
  }

  componentDidMount() {
    const { editMode, location, orders } = this.props;
    const { pathname, search } = location;
    if (!editMode) return;
    const orderIndex = pathname.split('/').pop();
    const itemIndex = new URLSearchParams(search).get('item');
    this.setState({ ...orders[orderIndex].items[itemIndex] });
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  handleConfirm = () => {
    const { editMode, orders, editItem, location, history, confirm } = this.props;
    const { pathname, search } = location;

    const tempOrders = [...orders];
    const orderIndex = location.pathname.startsWith('/order/') && pathname.split('/').pop();
    const itemIndex = new URLSearchParams(search).get('item');

    if (!editMode) {
      return confirm({ ...this.state }, orderIndex, history);
    }

    tempOrders[orderIndex].items[itemIndex] = { ...this.state };
    editItem(tempOrders);
  }

  render() {
    const { toggleModalHandle} = this.props;
    const { name, price, quantity, note } = this.state;

    return (
      <Overlay>
        <PopModal>
          <Form>
            <Field name={'name'} placeholder={'Bloody Mary'} title={'Name'} handleInputChange={this.handleInputChange}>{name}</Field>
            <Field name={'price'} title={'Price'} handleInputChange={this.handleInputChange}>{price}</Field>
            <Field name={'quantity'} title={'Quantity'} handleInputChange={this.handleInputChange}>{quantity}</Field>
            <Field name={'note'} placeholder={'No Iced, please!'} title={'Note'} textarea handleInputChange={this.handleInputChange}>{note}</Field>
          </Form>
          <Actions>
            <ActionButton onClick={() => toggleModalHandle()}>Cancel</ActionButton>
            <ActionButton
              onClick={this.handleConfirm}
              primary>
              Confirm
              </ActionButton>
          </Actions>
        </PopModal>
      </Overlay>);
  }
}

export default withRouter(Modal);
