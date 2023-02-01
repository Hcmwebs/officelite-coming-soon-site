import React, {useState} from 'react'

const Form = () => {
	const [value, setValue] = useState({
		email: '',
		select: '',
		phone: '',
		company: '',
	})
	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setValue({...value, [name]:value})
		console.log(name,value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input type='email' placeholder= 'email@email.com' name ='email' value={value} onChange = {handleChange} id ='email'/>
					<span>Please enter a valid email address</span>
				</div>
				<div className='form-group'>
					<label htmlFor='select'>Select</label>
					<select name='pack' placeholder='Basic pack free'value={value} onChange = {handleChange} id = 'select'>
						<option>Basic pack free</option>
						<option>Pro Pack $9.99</option>
						<option>Ultimate Pack $19.99</option>
					</select>
					<span>Please choose one option</span>
				</div>
				<div className='form-group'>
					<label htmlFor='phone'>Phone number :</label>
					<input type='number' placeholder='+1234566789' name='phone' value={value} onChange = {handleChange} id='phone'/>
					<span>Please enter a valid phone number</span>
				</div>
				<div className='form-group'>
					<label htmlFor='company'>Company</label>
					<input type='text' placeholder='Company name' value={value} onChange = {handleChange} id ='company'/>
					<span>Please enter your company name</span>
				</div>
			</form>
		</div>
	)
}

export default Form
