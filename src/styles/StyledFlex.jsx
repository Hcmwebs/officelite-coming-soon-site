import styled from 'styled-components'

const StyledFlex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	&.signUpPage{
		flex-direction: column;

		@media (min-width: 1440px) {
			flex-direction: row
		}
	}
`

export default StyledFlex
