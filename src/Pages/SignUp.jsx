import React from 'react'
//first import formik -> formik is used to handle form
/* 
formik plays three major roles 
1. handle values like manage them 
2. error handing 
3. form submission (onSubmit)
*/
/*
Formik is a popular open-source form library for React and React Native. It offers a collection of components 
and hooks that can help simplify building forms in React. Formik 
can handle tasks such as tracking field values, handling form validation and submission, and managing state and change handlers
*/
import { useFormik } from 'formik';
//like creating an object to store key - pair value -> concept of dictionary 
const initialValues = {
  //it must be same -> form : name ->this will put here in intial values thats why it must be same in order to retrieve data 
  firstName : "",
  surName : "",
  email : "",
  password : "",
  confirm_password : ""
}
const SignUp = () => {
  //use fromik pass two params : initial values , submission function
  const {values,handleChange,handleBlur,handleSubmit} = useFormik({
    initialValues : initialValues, 
    //pass a param to handle values
    onSubmit : (values) => {
     values
    }
  })  
  console.log(values)

  return (
    <div className='flex justify-center items-center bg-slate-300 rounded-sm '>
      <form action="">
        <input type="text" name="firstName" id="firstName" placeholder='enter your firstname here'
         className='border-solid border-2 border-sky-950 rounded-3xl p-2 mb-5' value={values.firstName}
         onChange={handleChange} onBlur={handleBlur}/>
        <br />
        <input type="text" name="surName" id="surName" placeholder='enter your surname here' className='border-b-2 p-2  mb-5
        border-solid border-2 border-sky-950 rounded-3xl' value={values.surName}
        onChange={handleChange} onBlur={handleBlur}/>
        <br />
        <input type="email" name="email" id="email" placeholder='enter your email here' className='border-b-2 p-2  mb-5
        border-solid border-2 border-sky-950 rounded-3xl' value={values.email}
        onChange={handleChange} onBlur={handleBlur} />
        <br />
        <input type="password" name="password" id="password" placeholder='enter your password here' className='border-b-2 p-2  mb-5
        border-solid border-2 border-sky-950 rounded-3xl' value={values.password}
        onChange={handleChange} onBlur={handleBlur}/>
        <br />
        <input type="password" name="confirm_password" id="confirmPassword" placeholder='match the password' className='border-b-2 p-2  mb-5
        border-solid border-2 border-sky-950 rounded-3xl' value={values.confirm_password}
        onChange={handleChange} onBlur={handleBlur}/>
        <br />
      </form>
    </div>
  )
}

export default SignUp
