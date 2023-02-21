import styled from 'styled-components'

const StyledFooter = styled.footer`
	width: 100%;
	min-height: 30vh;
	padding-bottom: 2.5rem;
	padding-top: 48.9rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2.5rem;

	@media (min-width: 768px) {
		padding-top: 31.63rem;
	}
	@media (min-width: 1440px) {
		padding-top: 15.63rem;
		justify-content: space-between;
		flex-direction: row;
	}
`

export default StyledFooter
