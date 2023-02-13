import styled from 'styled-components'

const StyledHero = styled.div`
	padding-top: 5rem;
	padding-bottom: 2.5rem;
	display: grid;
	place-items: center;
	gap: 4rem;

	.heroHeader {
		width: 171px;
	}
	.heroBody {
		display: grid;
		place-items: center;
		gap: 1.5rem;

		h1 {
			font-size: 2.5rem;
			font-weight: var(--bold);
			line-height: 3rem;
			text-align: center;
		}
	}
`

export default StyledHero
