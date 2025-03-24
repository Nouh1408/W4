import React,{useContext, useState} from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { CounterContext } from '../../Context/CounterContext'


export default function Login() {

  const {nameOne,nameTwo, setNameOne} = useContext(CounterContext)

  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const validationschrma =Yup.object().shape({
    email:Yup.string().required("E-mailssss is required").email("invalid email"),
    password:Yup.string().required("password is required").matches(/^[A-Z].{5,}/, "must be ....[A-Z].{5,}...")
  })
 /*  function validation(data) {
    const errors = {}
    if (data.email == "") {
      errors.email = "email is requireds"
    } else if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test( data.email) ==false){
      errors.email ="email is invalid"
    }
    if (data.password == "") {
      errors.password = "password is required"
    }

    return errors
  } */

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: handleLogin,
    // validate: validation,
    validationSchema:validationschrma
  })
  async function handleLogin(LoginData) {
  //  console.log("hi",values)

    try {
      setIsLoading(true)
      const  {LoginData} =await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",LoginData)
      if(data.message =="success"){
        navigate("/")
      }
    } catch (error) {
      setErrorMsg("email or password")
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <>


      <form className="w-3/4 mx-auto" onSubmit={formik.handleSubmit}>
        <h1 className='my-7 text-green-500'>Login Form {nameOne +" "+ nameTwo}</h1>
        <button className='btn-green' onClick={() => setNameOne("Nouh")}>Change me</button>
        {
          errorMsg ? 
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              {errorMsg}
            </div>:null
        }
        <div className="relative z-0 w-full mb-5 group">
          <input type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}


          />

          
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        {
            formik.errors.email && formik.touched.email &&
             <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              {formik.errors.email}
            </div>

          }
        <div className="relative z-0 w-full mb-5 group">
          <input type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
          <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        {
            formik.errors.password && formik.touched.password && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              {formik.errors.password}
            </div>

          }
        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          {isLoading?"loading": "Login"}
        </button>

      </form>


    </>
  )
}
