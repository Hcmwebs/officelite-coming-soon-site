import styled from 'styled-components'

const StyledSection = styled.section`
	width: min(100%, 100%);
	display: grid;
	place-items: center;
	grid-template-columns: 1fr;
	gap: 2rem;
	position: absolute;
	top: -48.9rem;
	z-index: 9;

	@media (min-width: 768px) {
		top: -31.63rem;
	}
	@media (min-width: 1440px) {
		width: min(100%, 1110px);
		top: -15.63rem;
		grid-template-columns: repeat(3, 1fr);
	}
`

export default StyledSection
