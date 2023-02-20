import styled from 'styled-components'

const StyledMainContent = styled.main`
	width: 100%;
	display: grid;
	place-items: center;
	/* background-color: cyan; */
	position: absolute;
	top: -48.9rem;
	z-index: 9;

	@media (min-width: 768px) {
		top: -31.63rem;
	}
	@media (min-width: 1440px) {
		top: -15.63rem;
	}
`

export default StyledMainContent
