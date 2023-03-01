import React, { useState } from 'react'

const FormInputs = ({ values, handleChange, error, focused, handleFocus }) => {
	return (
		<>
			<div className='form-group'>
				<label htmlFor='fullname'> Name </label>
				<input
					id='fullName'
					name='fullname'
					type='text'
					placeholder='Fullname'
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
				<label htmlFor='email'>Email Address : </label>
				<input
					id='email'
					name='email'
					type='email'
					placeholder='Email Address'
					value={values.email}
					onChange={handleChange}
					onBlur={handleFocus}
					focused={focused.toString()}
					required
				/>
				{!error && (
					<div className='error'>
						<small>Please enter a valid email address</small>
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
				<label htmlFor='pack'>Select Pack : </label>
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
					<div className='error'>
						<small>Please select one of the options</small>
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
				<label htmlFor='phone'>Phone number :</label>
				<input
					id='phone'
					name='phone'
					type='number'
					placeholder='Phone number'
					value={values.phone}
					onChange={handleChange}
					onBlur={handleFocus}
					focused={focused.toString()}
					pattern='^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'
					required
				/>
				{!error && (
					<div className='error'>
						<small>Please enter a valid phone number</small>
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
				<label htmlFor='company'>Company Name :</label>
				<input
					id='company'
					name='company'
					type='text'
					placeholder='Company Name'
					value={values.company}
					onChange={handleChange}
					onBlur={handleFocus}
					focused={focused.toString()}
					onFocus={handleFocus}
					required
				/>
				{!error && (
					<div className='error'>
						<small>Please enter a company name</small>
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
		</>
	)
}

export default FormInputs
