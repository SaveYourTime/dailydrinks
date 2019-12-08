import React from 'react';
import styled from 'styled-components';
import RandomImage from '../Home/RandomImage';

const ContentWrapper = styled.div`
  display: flex;
	flex-direction: row;
	padding-right: 16px;
`;

const TitleWrapper = styled.div`
	${props => !props.hasSubtitle &&
		`display: flex; align-items: center;`}
`;

const Title = styled.h3`
  margin: 0;
`;

const Subtitle = styled.p`
  color: rgb(173, 180, 182);
  margin: .5rem 0;
`;

function Content(props) {
	const { title, subtitle } = props;

	return (
		<ContentWrapper>
			<RandomImage />
			<TitleWrapper hasSubtitle={subtitle}>
				<Title>{title}</Title>
				{subtitle && <Subtitle>{subtitle}</Subtitle>}
			</TitleWrapper>
		</ContentWrapper>
	);
}

export default Content;
