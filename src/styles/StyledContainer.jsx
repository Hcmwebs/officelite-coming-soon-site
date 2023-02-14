import styled from 'styled-components'

const StyledContainer = styled.div`
	width: min(100%, 1440px);
	padding-inline: 1.5rem;
	display: grid;
	place-items: center;
	position: relative;
	background-color: ${({ header }) =>
		header ? 'var(--white-1)' : 'var(--black)'};
`

export default StyledContainer
