import styled from 'styled-components'

const StyledPattern = styled.div`
	&.header {
		position: absolute;
		width: 100%;
		height: 458px;
		top: -20%;

    @media (min-width: 768px) {
      height: 666px;
      top:-30%;
      right: -50%;
    }
    @media (min-width: 1440px) {
      height: 1134px;
      top:-65%;
      right: -40%;
    }
	}
`
export default StyledPattern
