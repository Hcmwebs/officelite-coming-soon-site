import styled from 'styled-components'

const StyledContainer = styled.div`
	width: min(100%, 1440px);
	padding-inline: 1.5rem;
	padding-bottom: ${({ footer }) => (footer ? '6.25rem' : '0rem')};
	display: grid;
	place-items: center;
	position: relative;
	background-color: ${({ footer }) =>
		footer ? 'var(--black)' : 'var(--white-3)'};
`

export default StyledContainer
