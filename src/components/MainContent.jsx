import React from 'react'
import {
	StyledContainer,
	StyledMainContent,
	StyledSection,
} from '../styles'
import { pricing } from '../data/Data'
import Card from './index'

const MainContent = () => {
	return (
		<StyledContainer>
			<StyledMainContent>
				<StyledSection>
					{pricing.map((card) => {
						return <Card key={card.id} {...card} />
					})}
				</StyledSection>
			</StyledMainContent>
		</StyledContainer>
	)
}

export default MainContent
