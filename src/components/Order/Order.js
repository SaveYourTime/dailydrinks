import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import Header from '../Shared/Header';
import Card from '../Card/Card';
import AddButton from '../Shared/AddButton';

const Container = styled.div`
  max-width: 800px !important;
  width: 100%;
`;

const OrderInfo = styled.div`
    width: fit-content;
    padding: 20px 32px;
    background: #354052;
    color: #fff;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;

    & > h4 {
      margin: 0;
      font-size: 20px;
    }

    & > span {
      font-weight: 200;
    }
`;

const GoBackButton = styled(Link)`
  text-decoration: none;
  display: inline-block;
  margin: 30px 0;
  color: #fff;
  -ms-user-select: none;
  padding: .25rem .7rem;
  font-size: .875rem;
  line-height: 1.5;
  border-radius: .2rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  background-color: rgba(53, 64, 82, .9);
  border-color: rgba(53, 64, 82, .9);

  &:hover {
    background-color: #354052;
  }
`;

class Order extends React.Component {
  render() {
    const { toggleModalHandle, orders, editItemClick, removeItem, match, history } = this.props;
    const orderIndex = match.params.id;
    if (!orders[orderIndex]) {
      history.push('/');
      return null;
    }
    const { number, date, items } = orders[orderIndex];

    const cards = items.map((item, itemIndex) => {
      const { name, price, quantity, note } = item;
      return (
        <Card
          key={itemIndex}
          title={name}
          quantity={quantity}
          price={`$${price}.00`}
          note={note}
          edit={() => editItemClick(orderIndex, itemIndex, history)}
          remove={() => removeItem(orderIndex, itemIndex)}
        />
      );
    });

    return (
      <Container>
        <GoBackButton to="/">Back to orders</GoBackButton>
        <OrderInfo>
          <h4>Order.{number}</h4>
          <span>{date}</span>
        </OrderInfo>

        <Header>
          <div>ITEM</div>
          <div>QUANTITY</div>
          <div>PRICE</div>
          <div>NOTE</div>
          <div>MORE</div>
        </Header>

        {cards}

        <AddButton
          src="https://image.flaticon.com/icons/svg/149/149688.svg"
          onClick={toggleModalHandle}
          alt="" />
      </Container>
    );
  }
}

export default withRouter(Order);
