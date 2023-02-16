import styled from 'styled-components'

const StyledCard = styled.div`
	width: min(100%, 327px);
	min-height: 500px;
	padding-block: 2.5rem;
	padding-inline: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	gap: 3.5rem;
	box-shadow: var(boxShadow-1);
	border-radius: var(--borderRadius-2);
	background-color: ${({ className }) =>
		className === 'pro' ? 'var(--blue-1)' : 'var(--white-1)'};
	@media (min-width: 768px) {
		width: min(100%, 688px);
		min-height: 320px;
		flex-direction: row;
		position: relative;
		padding-right: 4.25rem;
		padding-left: 3rem;
		.btn {
			position: absolute;
			bottom: 2rem;
		}
	}
	@media (min-width: 1440px) {
		width: min(100%, 327px);
		min-height: 500px;
		flex-direction: column;
		padding-right: 1.5rem;
		padding-left: 1.5rem;

		.btn {
			position: static;
		}
	}

	.cardHeader {
		display: grid;
		place-items: center;
		gap: 2.5rem;
	}
	h2 {
		font-size: 1.25rem;
		font-weight: var(--bold);
		line-height: 1.75rem;
		text-align: center;
		color: ${({ className }) =>
			className === 'pro' ? 'var(--white-1)' : 'var(--black)'};
		@media (min-width: 768px) {
			align-self: start;
		}
	}
	.price {
		display: grid;
		place-items: center;
		gap: 0.5rem;
	}
	h3 {
		font-size: 3.5rem;
		font-weight: var(--bold);
		line-height: 4rem;
		text-align: center;
		color: ${({ className }) =>
			className === 'pro' ? 'var(--white-1)' : 'var(--black)'};
	}
	p {
		font-size: 1rem;
		font-weight: var(--regular);
		line-height: 1.75rem;
		text-align: center;
		color: ${({ className }) =>
			className === 'pro' ? 'var(--white-1)' : 'var(--black)'};
	}
	.cardBody {
		display: grid;
		place-items: center;
		gap: 1rem;
	}
`

export default StyledCard
