import styled from 'styled-components'

const StyledTimer = styled.div`
	width: min(100%, 375px);
	display: grid;
	place-items: center;
	gap: 1.5rem;
	background-color: var(--white);
  padding-top: 8rem;

	.clockTitle {
		text-align: center;
    color: var(--white-1);
	}
	.clock {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1.5rem; // set as a gap and remove the margin;
	}

	.timer {
		font-size: 18px;
		width: min(100px, 100%);
		padding: 0.5rem 1rem;
		font-weight: bold;
		display: grid;
		place-items: center;
		box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.2);
		border: none;
		border-radius: 0.2rem;

		span {
			font-size: 0.9rem;
			text-align: center;
			text-transform: uppercase;
		}
	}
`
export default StyledTimer
