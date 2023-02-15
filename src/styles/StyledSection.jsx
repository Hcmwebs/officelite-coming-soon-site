import styled from 'styled-components'

const StyledSection = styled.section`
	width: 100%;
	min-height: 50vh;
	padding-block: 3rem;
	padding-inline: 1.5rem;
	display: grid;
	place-items: center;
	grid-template-columns: 1fr;
	gap: 2rem;

	@media (min-width: 1440px) {
		grid-template-columns: repeat(3, 1fr);
	}
`

export default StyledSection
