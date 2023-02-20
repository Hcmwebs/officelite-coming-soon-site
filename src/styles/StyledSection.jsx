import styled from 'styled-components'

const StyledSection = styled.section`
	width: min(100%,100%);
	padding-inline: 1.5rem;
	display: grid;
	place-items: center;
	grid-template-columns: 1fr;
	gap: 2rem;

	@media (min-width: 1440px) {
		width:min(100%, 1110px);
		grid-template-columns: repeat(3, 1fr);
	}
`

export default StyledSection
