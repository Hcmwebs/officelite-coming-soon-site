import React from 'react'
import { StyledContainer, StyledMainContent, StyledSection } from '../styles'
import { pricing } from '../data/Data'
import { Card } from './index'

const MainContent = () => {
	return (
		<StyledMainContent className='sectionCenter'>
			<StyledSection className = 'homePage'>
				{pricing.map((card) => {
					return <Card key={card.id} {...card} />
				})}
			</StyledSection>
		</StyledMainContent>
	)
}

export default MainContent
