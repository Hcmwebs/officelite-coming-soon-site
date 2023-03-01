import styled from 'styled-components'

const StyledPattern = styled.div`
	position: absolute;
	width: 458px;
	height: 458px;
	left: -10%;
	top: -15%;

	@media (min-width: 768px) {
		width: 666px;
		height: 666px;
	}
	@media (min-width: 1440px) {
		width: 1134px;
		height: 1134px;
	}

	&.homePage {
		@media (min-width: 768px) {
			left: 55%;
			top: -35%;
		}
		@media (min-width: 768px) {
			left: 45%;
			top: -65%;
		}
		&.footer {
			top: -20%;
			@media (min-width: 1440px) {
				top: -65%;
				right: -40%;
			}
		}
	}

	&.signUpPage {
		&.header {
			@media (min-width: 768px) {
				display: none;
			}
		}
		&.footer {
			top: 0%;
			@media (min-width: 768px) {
				width: 1454px;
				height: 1454px;
				top: -150%;
				left: -45%;
			}
			@media (min-width: 1440px) {
				width: 2036px;
				height: 2036px;
				display: block;
				top: -90%;
				left: -175%;
			}
		}
	}

	.footer {
		width: 1202px;
		height: 1202px;
		position: absolute;
		top: 9%;
		@media (min-width: 768px) {
			width: 1454px;
			height: 1454px;
			top: -3%;
		}
		@media (min-width: 1440px) {
			width: 2036px;
			height: 2036px;
			top: -115%;
			left: -50%;
		}
	}
`
export default StyledPattern
