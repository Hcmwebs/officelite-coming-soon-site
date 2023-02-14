import styled from 'styled-components'

const StyledButton = styled.button`
	padding: 0.75rem 3.5rem;
	border: 1px solid var(--white-2);
	border-radius: 1.75rem;
	cursor: pointer;
	display: grid;
	place-items: center;
	transition: var(--transition-2);

	&.primary {
		background-color: var(--blue-1);
		color: var(--white-1);

		&:hover {
			background-color: var(--lightBlue);
			color: var(--white-1);
		}
	}
	&.secondary {
		background-color: var(--blue-2);
		color: var(--blue-1);

		&:hover {
			background-color: var(--blue-3);
			color: var(--blue-1);
		}
	}
	&.tertiary {
		background-color: var(--white-1);
		color: var(--blue-1);

		&:hover {
			background-color: var(--white-1);
			color: var(--lightBlue);
		}
	}
	a {
		text-decoration: none;
	}
`
export default StyledButton
