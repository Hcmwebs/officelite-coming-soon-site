import styled from 'styled-components'

const StyledPattern = styled.div`
	position: absolute;

	&.header {
		width: 458px;
		height: 458px;
		top: -20%;

		@media (min-width: 768px) {
			width: 666px;
			height: 666px;
			top: -30%;
			right: -50%;
		}
		@media (min-width: 1440px) {
			width: 1134px;
			height: 1134px;
			top: -65%;
			right: -40%;
		}
	}

	&.footer {
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
