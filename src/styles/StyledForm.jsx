import styled from 'styled-components'

const StyledForm = styled.form`
	width: min(100%, 327px);
	min-height: 465px;
	box-sizing: border-box;
	padding: 1.5rem;
	background-color: var(--white-1);
	border-radius: var(--borderRadius-2);
	display: grid;
	gap: 1.5rem;
	margin: 0 auto;
	@media (min-width: 768px) {
		width: min(100%, 445px);
		min-height: 508px;
		padding: 2.75rem;
	}
	.form-group {
		width: 100%;
		height: 65px;
		padding-bottom: 1.5rem;
		display: grid;
		position: relative;
		transition: var(--transition-2);
	}
	label {
		font-size: 1rem;
		line-height: 1.75rem;
		color: var(--grey);
		display: none;
	}
	input,
	select {
		padding: 0.2rem 1rem;
		border: none;
		border-bottom: 1px solid var(--grey);
		outline: none;
	}
	input:invalid[focused='true'],
	select:invalid[focused='true'] {
		border-bottom: 1px solid red;
	}

	input:invalid[focused='true'] ~ .error,
	select:invalid[focused='true'] ~ .error {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.error {
		width: 100%;
		padding-inline: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: red;
		display: none;

		small {
			font-size: 1rem;
			line-height: 1.75rem;
			font-size: var(--regular);
			text-transform: capitalize;
		}
	}

	.submit {
		font-size: 18px;
		width: 100%;
		margin-top: 2.5rem;
		-webkit-appearance: button;
		-moz-appearance: button;
		cursor: pointer;
	}
`
export default StyledForm
