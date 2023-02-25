import styled from 'styled-components'

const StyledTimer = styled.div`
	width: min(100%, 327px);
	display: grid;
	place-items: center;
	gap: 1.125rem;
	padding-top: 3.25rem;

	.clockTitle {
		width: 100%;
		display: grid;
		place-items: center;

		@media (min-width: 1440px) {
			justify-items: start;
		}

		h3 {
			font-size: 1rem;
			font-weight: var(--bold);
			line-height: 3rem;
			letter-spacing: 0.2rem;
			text-transform: uppercase;
			text-align: center;
			color: ${({ className }) =>
				className === 'homePage' ? 'var(--white-1)' : 'var(--black)'};

			span {
				color: var(--blue-1);
			}
		}
	}
	.clock {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.75rem;
	}

	.timer {
		width: 72px;
		height: 92px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border: none;
		border-radius: 0.25rem;
		box-shadow: var(--box-shadow-1);
		background-color: var(--lightBlack);
		z-index: 9;
		@media (min-width: 768px) {
			width: 100px;
			height: 128px;
			border-radius: 0.75rem;
		}
		h4 {
			font-size: 2rem;
			font-weight: var(--bold);
			line-height: 3rem;
			text-align: center;
			color: var(--white-1);
			@media (min-width: 768px) {
				font-size: 3.5rem;
			}
		}
		span {
			font-size: 0.75rem;
			font-weight: var(--bold);
			line-height: 1.75rem;
			text-transform: lowercase;
			text-align: center;
			color: var(--white-1);
			opacity: 0.5;

			@media (min-width: 768px) {
				font-size: 1rem;
			}
		}
		.homePage {
		}
		&.signUpPage {
		}
	}
`
export default StyledTimer
