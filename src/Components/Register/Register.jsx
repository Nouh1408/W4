import React,{useContext, useState} from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik'
import axios from 'axios';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { UserContext } from '../../Context/UserContext';



export default function Register() {

  const {setToken}= useContext(UserContext)
  const [isLoading, setisLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const validationSchema = Yup.object().shape({
    email:Yup.string().required("email iss required").email("Invalid email"),
    name:Yup.string().required("dein name ist erforderlich").min(5, "must be more than five charachters"),
    password:Yup.string().required("password is required").matches(/^[A-Z].{5,}/, "must be ....[A-Z].{5,}..."),
    confirmPassword:Yup.string().required("enter your password again").oneOf([Yup.ref("password")], "passwords must be matched"),
    phone:Yup.string().required("enter phone numhber").matches(/^01[0125][0-9]{8}/, "should be egyptian number")
  })

   /*  function validation(data){
      const errors ={}
      if(data.email==""){
        errors.email="Email is required"
      } else if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test( data.email) ==false){
        errors.email="Invalid email"
      }
      if(data.password==""){
        errors.password="Password is required"
    }
    if(data.name==""){
      errors.name="Name is required"
    }
    if(data.confirmPassword==""){
      errors.confirmPassword="Confirm Password is required"
    }else if(data.confirmPassword!=data.password){
      errors.confirmPassword="Passwords do not match"
    }
    if(data.phone==""){
      errors.phone="Phone number is required"
    } else if(/^((\+20|0)1[0-5][0-9]{8})$/.test(data.phone)==false){
      errors.phone="Invalid phone number"
    }

    return errors

  } */
 const navigate = useNavigate()
 const formik = useFormik({
  initialValues: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone:''
  },
  onSubmit: (values, { event }) => {
    event?.preventDefault();
    console.log("Submitting form...");
    handleregister(values);
}
,validationSchema:validationSchema
});

        async function handleregister(values){
          // console.log("hiii",values);
          try{
            setisLoading(true)
            const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values);
            if(data.message=="success"){  
              console.log("hi");
              //!token
              navigate("/");

              setToken(data.token)
              }
          }catch(error){
            setIsError("email sent")
          } finally{
            setisLoading(false)
          }
        }
        
      
  return (
    <div className=''>
  <form onSubmit={formik.handleSubmit} className="w-3/4 mx-auto">
    <h2 className='my-7 text-green-500'>Register Form</h2>
  <div className="relative z-0 w-full mb-5 group">
  {isError && <div className="text-red-600">{isError}</div>}
    <input onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  {
            formik.errors.email && formik.touched.email && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              {formik.errors.email}
            </div>

          }
  <div className="relative z-0 w-full mb-5 group">
    <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  {
            formik.errors.password && formik.touched.password && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              {formik.errors.password}
            </div>

          }
  <div className="relative z-0 w-full mb-5 group">
    <input type="password" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} name="confirmPassword" id="confirmPassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="confirmPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>
  {
            formik.errors.confirmPassword && formik.touched.confirmPassword && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              {formik.errors.confirmPassword}
            </div>

          }
  <div className="relative z-0 w-full mb-5 group">
    <input type="text" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">name</label>
  </div>
  {
            formik.errors.name && formik.touched.name && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              {formik.errors.name}
            </div>

          }
  <div className="relative z-0 w-full mb-5 group">
    <input type="tel" name="phone" onBlur={formik.handleBlur} value={formik.values.phone} onChange={formik.handleChange} id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
  </div>
  {
            formik.errors.phone && formik.touched.phone && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              {formik.errors.phone}
            </div>

          }
  <div className="grid md:grid-cols-2 md:gap-6">
    
    
  </div>
  <button type="submit"
   className="text-black bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    {
    isLoading ?<FaSpinner className="animate-spin" /> :"Submit"
    }
   
   </button>


</form>    
    
    </div>

  )
}
