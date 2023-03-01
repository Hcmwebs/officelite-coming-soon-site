import styled from 'styled-components'

const StyledFooter = styled.footer`
	width: 100%;
	min-height: 30vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2.5rem;
	background-color: var(--black);
	position: relative;

	.btn {
		z-index: 9;
	}

	&.homePage {
		padding-top: 48.9rem;
		@media (min-width: 768px) {
			padding-top: 31.63rem;
		}
		@media (min-width: 1440px) {
			padding-top: 15.63rem;
			justify-content: space-between;
			flex-direction: row;
		}
	}

	&.signUpPage {
		min-height: 450px;

		@media (min-width: 768px) {
			min-height: 500px;
		}
		@media (min-width: 1440px) {
			min-height: 100vh;
			height: 100%;
			position: absolute;
			top: 0;
			right: 0;
			width: 420px;
			padding: 0;
		}
	}
`

export default StyledFooter
