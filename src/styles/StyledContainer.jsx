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

	@media (min-width: 768px) {
		padding-inline: 2.5rem;
	}
	@media (min-width: 1440px) {
		padding-inline: 10.3125rem;
	}
`

export default StyledContainer
