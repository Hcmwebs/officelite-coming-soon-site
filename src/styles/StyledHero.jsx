import styled from 'styled-components'

const StyledHero = styled.div`
	padding-top: 2rem;
	padding-bottom: 5rem;
	padding-inline: 1.5rem;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
	@media (min-width: 768px) {
		flex-direction: row-reverse;
	}

	.heroHeader {
		width: 171px;
		@media (min-width: 768px) {
			width: 281px;
		}
		@media (min-width: 1440px) {
			width: 475px;
		}
	}
	.heroBody {
		width: min(100%, 100%);
		display: grid;
		place-items: center;
		gap: 1.5rem;
		@media (min-width: 768px) {
			width: min(100%, 345px);
			justify-items: start;
		}
		@media (min-width: 1440px) {
			width: min(100%, 540px);
			justify-items: start;
		}

		h1 {
			font-size: 2.5rem;
			font-weight: var(--bold);
			line-height: 3rem;
			text-align: center;
			@media (min-width: 768px) {
				text-align: left;
			}
			@media (min-width: 1440px) {
				font-size: 3.5rem;
				line-height: 4rem;
			}
		}
		p {
			font-size: 1rem;
			font-weight: var(--regular);
			line-height: 1.625rem;
			text-align: center;
			color: var(--grey);
			@media (min-width: 768px) {
				text-align: left;
			}
			@media (min-width: 1440px) {
				font-size: 1.125rem;
				line-height: 1.75rem;
			}
		}
	}
`

export default StyledHero
