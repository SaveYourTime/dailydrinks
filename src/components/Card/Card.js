import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import ListLayout from './ListLayout';
import Content from './Content';
import Actions from './Actions';
import ActionButton from './ActionButton';

const CardWrapper = styled.article`
	display: flex;
	flex-direction: column;
  color: rgb(21, 37, 67);
  background-color: #fff;
  border-radius: .25rem;
  padding: 1.25rem;
  box-shadow: 0 0 0.875rem 0 rgba(53,64,82,.05);

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Description = styled.div`
	background: #f8f9fa;
	margin: 20px 0;
	border-radius: 8px;
	padding: 16px 16px 16px 84px;
	color: #495057;
	border: 1px solid #dee2e6!important;
`;

function Card(props) {
	const { title, subtitle, date, quantity, price, note, orderIndex, edit, remove, match } = props;

	return (
		<CardWrapper>
			<ListLayout>
				<Content
					title={title}
					subtitle={subtitle}
				/>
				{date && <div>{date}</div>}
				{quantity && <div>{quantity}</div>}
				{price && <div>{price}</div>}
				{match.path === '/order/:id' && <div>{note ? 'YES' : 'NO'}</div>}
				<Actions>
					{
						match.path === '/order/:id' ? <ActionButton url="https://image.flaticon.com/icons/svg/709/709524.svg" onClick={edit} />
							: (<Link to={{
								pathname: `/order/${orderIndex}`,
								state: { orderIndex }
							}}>
								<ActionButton url="https://image.flaticon.com/icons/svg/709/709524.svg" />
							</Link>)
					}
					<ActionButton
						url="https://image.flaticon.com/icons/svg/709/709519.svg"
						onClick={remove}
					/>
				</Actions>
			</ListLayout>
			{note && <Description>{note}</Description>}
		</CardWrapper>
	);
}

export default withRouter(Card);