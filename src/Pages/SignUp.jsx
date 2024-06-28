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
     //action is use to perform actions like this restFORM
     //RestForm is basically reseting the form when submit button is clicked!
     action.resetForm();
    }
    

  })
  console.log(errors)
 // console.log(values)  


  return (
    <div className='flex justify-center items-center m-auto w-full '>
      
      <form action="" onSubmit={handleSubmit} className='bg-white mx-auto min-h-[640px] rounded-md mt-16'>
      <h1 className='text-center p-2'>Welcome!</h1>
        <div className="firstName w-96 mt-14 rounded-md">
        <input type="text" name="firstName" id="firstName" placeholder='enter your firstname here'
         className='border-solid border-2 border-gray-400  p-2 mb-2 text-center ml-10  mt-2 w-80 rounded-3xl' value={values.firstName}
         onChange={handleChange} onBlur={handleBlur}
         
         />
          {touched.firstName && errors.firstName ? (
                      <p className="text-red-900 text-center">{errors.firstName}</p>
                    ) : null}
        </div>
      
       <div className="surName">
       <input type="text" name="surName" id="surName" placeholder='enter your surname here'
        className='border-solid border-2 border-gray-400  p-2 mb-2 text-center ml-10  mt-2 w-80 rounded-3xl' value={values.surName}
        onChange={handleChange} onBlur={handleBlur}  />
          {touched.surName && errors.surName ? (
                      <p className="form-error text-red-900 text-center">{errors.surName}</p>
                    ) : null}
       </div>
      
      <div className="emaill">
      <input type="email" name="email" id="email" placeholder='enter your email here'
       className='border-solid border-2 border-gray-400  p-2 mb-2 text-center ml-10  mt-2 w-80 rounded-3xl' value={values.email}
        onChange={handleChange} onBlur={handleBlur} />
          {touched.email && errors.email ? (
                      <p className="form-error text-red-900 text-center">{errors.email}</p>
                    ) : null}
      </div>
      
       <div className="passwordd">
       <input type="password" name="password" id="password" placeholder='enter your password here'
        className='border-solid border-2 border-gray-400  p-2  text-center ml-10  mt-2 w-80 rounded-3xl' value={values.password}
        onChange={handleChange} onBlur={handleBlur}/>
        {touched.password && errors.password ? (
                      <p className="form-error text-red-900 text-center">{errors.password}</p>
                    ) : null}
       </div>
        <br />
        <div className="confirmPasswordd">
        <input type="password" name="confirm_password" id="confirmPassword" placeholder='match the password'
         className='border-solid border-2 border-gray-400  p-2  text-center ml-10  mt-2 w-80 rounded-3xl' value={values.confirm_password}
        onChange={handleChange} onBlur={handleBlur}/>
         {touched.confirm_password && errors.confirm_password ? (
                      <p className="form-error text-red-900 text-center">{errors.confirm_password}</p>
                    ) : null}
        </div>
        <br />
        {/* type must be submit .. so onsubmit can actually work out */}
        <button className="input-button bg-black text-white w-24 p-2 rounded-3xl ml-36" type="submit">
                      SignUp
                    </button>
      </form>
    </div>
  )
}

export default SignUp
