import styled from 'styled-components'

const StyledContainer = styled.div`
	width: min(100%, 1440px);
	padding-bottom: ${({ footer }) => (footer ? '6.25rem' : '0rem')};
	display: grid;
	place-items: center;
	position: relative;
	background-color: ${({ footer }) =>
		footer ? 'var(--black)' : 'var(--white-3)'};

	&.signOut {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		@media (min-width: 1440px) {
			flex-direction: row;
		}
	}
`

export default StyledContainer
