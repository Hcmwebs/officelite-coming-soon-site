import styled from 'styled-components'

const StyledSection = styled.section`
	width: min(100%, 100%);
	display: grid;
	place-items: center;
	grid-template-columns: 1fr;
	gap: ${({ className }) => (className === 'homePage' ? '2rem' : '0')};
	position: absolute;
	z-index: 9;
	top: ${({ className }) =>
		className === 'homePage' ? '-48.9rem' : '-14.5rem'};

	@media (min-width: 768px) {
		top: ${({ className }) =>
			className === 'homePage' ? '-31.63rem' : '-15.875rem'};
	}
	@media (min-width: 1440px) {
		width: min(100%, 1110px);
		top: ${({ className }) =>
			className === 'homePage' ? '-15.63rem' : '-22rem'};
		left: ${({ className }) => (className === 'homePage' ? 'auto' : '-3rem')};
		grid-template-columns: ${({ className }) =>
			className === 'homePage' ? 'repeat(3, 1fr)' : '1fr'};
	}
`

export default StyledSection
