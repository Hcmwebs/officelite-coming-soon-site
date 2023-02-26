import styled from 'styled-components'

const StyledForm = styled.form`
	width: min(100%, 327px);
	min-height: 465px;
	box-sizing: border-box;
	padding: 1.5rem;
	background-color: var(--white-1);
	border-radius: var(--borderRadius-2);
	display: grid;
	gap: 2rem;
	margin: 0 auto;
	.form-group {
		width: 100%;
		height: 45px;
		display: grid;
	}
	label {
		font-size: 12px;
		color: var(--grey);
		display: none;
	}
	input,
	select {
		padding: 0.625rem;
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
		padding-inline: 0.625rem;
		color: red;
		display: none;
	}

	.submit {
		font-size: 18px;
		width: 100%;
		cursor: pointer;
	}
`
export default StyledForm
