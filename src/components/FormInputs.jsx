import React from 'react'

const FormInputs = ({ handleChange,error }) => {
	return (
		<>
			<div className='form-group'>
				<label htmlFor='email'>Email : </label>
				<input
					type='email'
					name='email'
					id='email'
					placeholder='email.email.com'
					onChange={handleChange}
					required
				/>
				{error && <span>Please enter a valid email address </span>}
			</div>
			<div className='form-group'>
				<label htmlFor='pack'>Pack : </label>
				<select name='pack' id='pack' onChange={handleChange}>
					required
					<option value='Basic pack free'>Basic pack Free</option>
					<option value='Pro Pack $9.99'>Pro Pack $9.99</option>
					<option value='Ultimate Pack $19.99'>Ultimate Pack $19.99</option>
				</select>
				{error && <span>Please select one of the options</span>}
			</div>
			<div className='form-group'>
				<label htmlFor='phone'>Phone number :</label>
				<input
					type='text'
					placeholder='+1234566789'
					name='phone'
					onChange={handleChange}
					required
					id='phone'
				/>
				{error && <span>Please enter a valid phone number</span>}
			</div>
			<div className='form-group'>
				<label htmlFor='company'>Company :</label>
				<input
					name='company'
					type='text'
					placeholder='Company name'
					onChange={handleChange}
					required
					id='company'
				/>
				{error && <span>Please enter a company name</span>}
			</div>
		</>
	)
}

export default FormInputs
