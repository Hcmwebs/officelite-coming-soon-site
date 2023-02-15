import styled from 'styled-components'

const StyledCard = styled.div`
	width: min(100%, 100%);
  min-height: 500px;
	padding-inline: 1.5rem;
	display: grid;
	place-items: center;
	box-shadow: var(boxShadow-1);
	border-radius: var(--borderRadius);
	background-color: ${({className}) => className ==='pro'? 'var(--blue-1)': 'var(--white-1)' };
`

export default StyledCard
