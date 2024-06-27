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
import SignUpSchema from '../schema/index';
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
  const {values,handleChange,handleBlur,handleSubmit,touched,errors} = useFormik({
    //calling validation schema 
    validationSchema: SignUpSchema,
    initialValues : initialValues, 
    //pass a param to handle values
    onSubmit : (values,action) => {
      console.log("Form submitted:", values);
     values
     action.resetForm();
    }

  })
  console.log(errors)
 // console.log(values)  


  return (
    <div className='flex justify-center items-center rounded-sm '>
      <form action="" onSubmit={handleSubmit}>
        <div className="firstName bg-stone-700  w-96">
        <input type="text" name="firstName" id="firstName" placeholder='enter your firstname here'
         className='border-solid border-2 border-sky-950  p-2 mb-5 text-center mx-auto mt-2 w-96' value={values.firstName}
         onChange={handleChange} onBlur={handleBlur}
         
         />
          {touched.firstName && errors.firstName ? (
                      <p className="form-error text-red-900">{errors.firstName}</p>
                    ) : null}
        </div>
        <br />
       <div className="surName">
       <input type="text" name="surName" id="surName" placeholder='enter your surname here' className='border-b-2 p-2  mb-5
        border-solid border-2 border-sky-950 rounded-3xl' value={values.surName}
        onChange={handleChange} onBlur={handleBlur} />
          {touched.surName && errors.surName ? (
                      <p className="form-error text-red-900">{errors.surName}</p>
                    ) : null}
       </div>
        <br />
      <div className="emaill">
      <input type="email" name="email" id="email" placeholder='enter your email here' className='border-b-2 p-2  mb-5
        border-solid border-2 border-sky-950 rounded-3xl' value={values.email}
        onChange={handleChange} onBlur={handleBlur} />
          {touched.email && errors.email ? (
                      <p className="form-error text-red-900">{errors.email}</p>
                    ) : null}
      </div>
        <br />
       <div className="passwordd">
       <input type="password" name="password" id="password" placeholder='enter your password here' className='border-b-2 p-2  mb-5
        border-solid border-2 border-sky-950 rounded-3xl' value={values.password}
        onChange={handleChange} onBlur={handleBlur}/>
        {touched.password && errors.password ? (
                      <p className="form-error text-red-900">{errors.password}</p>
                    ) : null}
       </div>
        <br />
        <div className="confirmPasswordd">
        <input type="password" name="confirm_password" id="confirmPassword" placeholder='match the password' className='border-b-2 p-2  mb-5
        border-solid border-2 border-sky-950 rounded-3xl' value={values.confirm_password}
        onChange={handleChange} onBlur={handleBlur}/>
         {touched.confirm_password && errors.confirm_password ? (
                      <p className="form-error text-red-900">{errors.confirm_password}</p>
                    ) : null}
        </div>
        <br />
        {/* type must be submit .. so onsubmit can actually work out */}
        <button className="input-button bg-black text-white w-24 p-2" type="submit">
                      SignUp
                    </button>
      </form>
    </div>
  )
}

export default SignUp
