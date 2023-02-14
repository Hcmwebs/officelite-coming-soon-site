import styled from 'styled-components'

const StyledHero = styled.div`
	padding-top: 2rem;
	padding-bottom: 2.5rem;
	padding-inline: 1.5rem;
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
		p {
			font-size: 16px;
			font-weight: var(--regular);
			line-height: 1.625rem;
			text-align: center;
			color: var(--grey);
		}
	}
`

export default StyledHero
