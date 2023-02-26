import styled from 'styled-components'

const StyledForm = styled.form`
	width: min(100%, 327px);
	min-height: 465px;
	box-sizing: border-box;
	padding: 1.5rem;
	background-color: var(--white-1);
	border-radius: 10px;
	display: grid;
	gap: 1rem;
	margin: 0 auto;
	.form-group {
		width: 100%;
		height: 45px;
		padding-inline: 0.5rem;
		display: grid;
		gap: 0.2rem;
	}
	label {
		font-size: 12px;
		color: #f4fff4;
	}
	input,
	select {
		padding: 10px;
		margin: 10px 0;
		border: none;
		border-bottom: 1px solid var(--grey);

		outline: none;
	}
	input:invalid[focused='true'],
	select:invalid[focused='true'] {
		border-bottom: 3px solid red;
	}
	input:invalid[focused='true'] ~ .error,
	select:invalid[focused='true'] ~ .error {
		display: block;
	}
	.error {
		font-size: 12px;
		padding: 3px;
		color: black;
		display: none;
	}

	.submit {
		width: 100%;
		font-size: 18px;
		padding: 0.75rem 1.5rem;
		margin-block: 1.5rem;
		color: #fff;
		background-color: #f46c5d;
		border: 1px solid #fff;
		outline: none;
		border-radius: 5px;
		cursor: pointer;
	}
`
export default StyledForm
