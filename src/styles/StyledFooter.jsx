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
	background-color: var(--black);
	position: relative;
	overflow: hidden;
	@media (min-width: 768px) {
		padding-top: 31.63rem;
	}
	@media (min-width: 1440px) {
		padding-top: 15.63rem;
		justify-content: space-between;
		flex-direction: row;
	}

	&::before {
		content: '';
		width: 100%;
		height: 1248px;
		position: absolute;
		top: 5%;
		background: url('/bg-pattern-home-footer.svg') no-repeat center center;
		z-index: 2;

		@media (min-width: 768px) {
			height: 986px;
			top: 30%;
		}
		@media (min-width: 1440px) {
			height: 857px;
			top: 0%;
			left: -30%;
		}
	}
`

export default StyledFooter
