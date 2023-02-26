import styled from 'styled-components';

const StyledForm = styled.form`
	width: min(100%, 327px);
	min-height: 465px;
	box-sizing: border-box;
	padding: 30px 40px;
	background-color: salmon;
	border-radius: 10px;
	display: grid;
	gap: 10px;
	margin: 0 auto;
	.form-group {
		display: grid;
		gap: 5px;
	}
	label {
		font-size: 12px;
		color: #f4fff4;
	}
	input,
	select {
		padding: 10px;
		margin: 10px 0;
		border: 2px solid #f4fff4;
		border-radius: 5px;
		outline: none;
	}
	input:invalid[focused='true'],
	select:invalid[focused='true'] {
		border: 3px solid red;
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
		margin-top: 15px;
		margin-bottom: 30px;
		padding: 12px 24px;
		color: #fff;
		background-color: #f46c5d;
		border: 1px solid #fff;
		outline: none;
		border-radius: 5px;
		cursor: pointer;
	}
`
  export default StyledForm