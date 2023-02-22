import styled from 'styled-components'

const StyledContainer = styled.div`
	width: min(100%, 1440px);
	margin: 0 auto;
	display: grid;
	place-items: center;
	position: relative;
	background-color: ${({ footer }) =>
		footer ? 'var(--black)' : 'var(--white-3)'};
	overflow: ${({className}) => className === 'mainContent' ? 'visible' : 'hidden'};

	
`

export default StyledContainer
