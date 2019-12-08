import React from 'react';
import styled from 'styled-components';

import Header from '../Shared/Header';
import Card from '../Card/Card';
import CardPlaceHolder from './CardPlaceHolder';

const Container = styled.div`
  max-width: 800px !important;
  width: 100%;
`;

class Home extends React.Component {
	render() {
		const { removeOrder, orders } = this.props;

		const cards = orders.map((order, orderIndex) => {
			const { number, date, items } = order;
			const price = order.items.reduce((prev, curr) => prev + parseInt(curr.price), 0);
			const description = items
				.filter((item, index) => index < 3)
				.map((item) => item.name)
				.join(', ');

			return (
				<Card
					key={number}
					title={`Order.${number}`}
					subtitle={description}
					date={date}
					price={`$${price}.00`}
					orderIndex={orderIndex}
					remove={() => removeOrder(orderIndex)}
				/>
			);
		});

		return (
			<Container>
				<Header>
					<div>ORDER</div>
					<div>DATE</div>
					<div>PRICE</div>
					<div>MORE</div>
				</Header>

				{cards.length ? cards : <CardPlaceHolder>There're no any order!</CardPlaceHolder>}
			</Container >
		);
	}
}

export default Home;
