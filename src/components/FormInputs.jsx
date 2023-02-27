import React, { useState } from 'react'

const FormInputs = ({ values, handleChange, error, focused, handleFocus }) => {
	return (
		<>
			<div className='form-group'>
				<label htmlFor='fullname'> Name  </label>
				<input
					id='fullName'
					name='fullname'
					type='text'
					placeholder='Name'
					value={values.fullname}
					onChange={handleChange}
					onBlur={handleFocus}
					focused={focused.toString()}
					required
				/>
				{!error && (
					<div className='error'>
						<small>Please enter a valid name</small>
						<svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
							<g fill='none' fillRule='evenodd'>
								<circle fill='#F05B5B' cx='10' cy='10' r='10' />
								<path
									d='M12.475 6.61l1.414 1.415-2.475 2.475 2.475 2.475-1.414 1.414L10 11.914l-2.475 2.475-1.414-1.414L8.585 10.5 6.11 8.025l1.414-1.414L10 9.085l2.475-2.474z'
									fill='#FFF'
								/>
							</g>
						</svg>
					</div>
				)}
			</div>
			<div className='form-group'>
				<label htmlFor='email'>Email : </label>
				<input
					id='email'
					name='email'
					type='email'
					placeholder='Email address'
					value={values.email}
					onChange={handleChange}
					onBlur={handleFocus}
					focused={focused.toString()}
					required
				/>
				{!error && (
					<span className='error'>Please enter a valid email address </span>
				)}
			</div>

			<div className='form-group'>
				<label htmlFor='pack'>Pack : </label>
				<select
					id='pack'
					name='pack'
					value={values.pack}
					onChange={handleChange}
					onBlur={handleFocus}
					focused={focused.toString()}
					required>
					<option value='Select pack'>Select Pack</option>
					<option value='Basic pack free'>Basic pack Free</option>
					<option value='Pro Pack $9.99'>Pro Pack $9.99</option>
					<option value='Ultimate Pack $19.99'>Ultimate Pack $19.99</option>
				</select>
				{!error && (
					<span className='error'>Please select one of the options</span>
				)}
			</div>

			<div className='form-group'>
				<label htmlFor='phone'>Phone number :</label>
				<input
					id='phone'
					name='phone'
					type='number'
					placeholder='+1234566789'
					value={values.phone}
					onChange={handleChange}
					onBlur={handleFocus}
					focused={focused.toString()}
					pattern='^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'
					required
				/>
				{!error && (
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
					value={values.company}
					onChange={handleChange}
					onBlur={handleFocus}
					focused={focused.toString()}
					onFocus={handleFocus}
					required
				/>
				{!error && <span className='error'>Please enter a company name</span>}
			</div>
		</>
	)
}

export default FormInputs
