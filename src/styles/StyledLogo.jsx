import styled from 'styled-components'

const StyledLogo = styled.div`
width: 100%;
	padding-block: 3rem;
	display: grid;
	place-items: center;
	background-color: var(--white-3);

	@media (min-width: 768px) {
		justify-self: start;
	}
`
export default StyledLogo
