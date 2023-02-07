import React from 'react'
import { Form, Timer } from '../components'
import { timerDuration } from '../data/Data'

const SignUp = () => {
  return (
    <div>
      <h2>Please sign up here!</h2>
      <Timer duration ={timerDuration} />
      <Form />
    </div>
  )
}

export default SignUp