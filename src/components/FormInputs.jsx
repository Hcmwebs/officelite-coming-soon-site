import React, { useState } from 'react'

const FormInputs = ({ values, handleChange, error, focused, handleFocus }) => {
	return (
		<>
			<div className='form-group'>
				<label htmlFor='email'>Email : </label>
				<input
					id='email'
					name='email'
					type='email'
					placeholder='email.email.com'
					value={values.name}
					onChange={handleChange}
					onBlur={handleFocus}
					focused={focused.toString()}
					required
				/>
				{error && (
					<span className='error'>Please enter a valid email address </span>
				)}
			</div>

			<div className='form-group'>
				<label htmlFor='pack'>Pack : </label>
				<select
					id='pack'
					name='pack'
					value={values.name}
					onChange={handleChange}
					onBlur={handleFocus}
					focused={focused.toString()}
					required>
					<option value='Select pack'>Select Pack</option>
					<option value='Basic pack free'>Basic pack Free</option>
					<option value='Pro Pack $9.99'>Pro Pack $9.99</option>
					<option value='Ultimate Pack $19.99'>Ultimate Pack $19.99</option>
				</select>
				{error && (
					<span className='error'>Please select one of the options</span>
				)}
			</div>

			<div className='form-group'>
				<label htmlFor='phone'>Phone number :</label>
				<input
					id='phone'
					name='phone'
					type='text'
					placeholder='+1234566789'
					value={values.name}
					onChange={handleChange}
					onBlur={handleFocus}
					focused={focused.toString()}
					pattern='^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'
					required
				/>
				{error && (
					<span className='error'>Please enter a valid phone number</span>
				)}
			</div>

			<div className='form-group'>
				<label htmlFor='company'>Company :</label>
				<input
					id='company'
					name='company'
					type='text'
					placeholder='Company name'
					value={values.name}
					onChange={handleChange}
					onBlur={handleFocus}
					focused={focused.toString()}
					onFocus={handleFocus}
					required
				/>
				{error && <span className='error'>Please enter a company name</span>}
			</div>
		</>
	)
}

export default FormInputs
