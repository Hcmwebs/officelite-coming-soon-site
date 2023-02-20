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
	gap: 2rem;
	box-shadow: var(--boxShadow-1);
	border-radius: var(--borderRadius-2);
	background-color: ${({ className }) =>
		className === 'pro' ? 'var(--blue-1)' : 'var(--white-1)'};
	@media (min-width: 768px) {
		width: min(100%, 688px);
		min-height: 316px;
		padding-right: 4.25rem;
		padding-left: 3rem;
		align-items: start;
		gap: 1.25rem;
	}
	@media (min-width: 1440px) {
		width: min(100%, 327px);
		min-height: 500px;
		flex-direction: column;
		justify-items: start;
		padding-right: 1.5rem;
		padding-left: 1.5rem;

		.btn {
			position: static;
		}
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
		width: 100%;
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
		@media (min-width: 768px) {
			text-align: left;
			justify-self: start;
		}
	}
	p {
		font-size: 1rem;
		font-weight: var(--regular);
		line-height: 1.75rem;
		text-align: center;
		color: ${({ className }) =>
			className === 'pro' ? 'var(--white-1)' : 'var(--black)'};
		@media (min-width: 768px) {
			text-align: left;
			justify-self: start;
		}
	}
	.cardBody {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		gap: 1rem;

		@media (min-width: 768px) {
			flex-direction: row;
		}
		@media (min-width: 1440px) {
			flex-direction: column;
		}
	}
	.cardInfo {
		width: 100%;
	}
`

export default StyledCard
