import React, { useState } from 'react'
import { AiOutlineGoogle, AiOutlineUser } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { BsFacebook, BsKeyFill } from 'react-icons/bs'
import { ImSpinner2 } from 'react-icons/im'
import Card from './Card'

const Form = ({products,setProducts}) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  


    const handleSubmit = (e) =>{
      e.preventDefault();

      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 300);

      const data = {
        email,
        password
      }
      setProducts([...products,data])
      setEmail("");
      setPassword("")
    }

  return (
    <>
 <div className='grid grid-cols-4'>
 {
      products.length > 0  ?  (products.map((pd,index)=>(
        <Card key={index} email={email} password={password} pd={pd} />
      ))) : <p className='mt-5 ml-5'>Please add data</p>      
 }
 </div>
    
     <div className="flex justify-center items-center mt-5">
    <form onSubmit={handleSubmit} className="shadow shadow-violet-300 p-5 rounded-2xl relative m-1 sm:m-2 lg:m-0 w-96">
    <BiUserCircle className='text-6xl mx-auto'/>
        <div className="">
        <AiOutlineUser className='w-5 h-5 absolute top-[133px] right-[30px]'/>
        <label htmlFor="email" className='text-xl font-semibold ml-1'>Email Address</label>
        <input 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        id='email' required className='outline-0 shadow-2xl mb-5 mt-2 border rounded-lg p-4 w-full text-violet-500' type="text" placeholder='Please Enter you are email' />
        <BsKeyFill className='w-5 h-5 absolute top-[248px] right-[30px]'/>
        <label htmlFor="password" className='text-xl font-semibold ml-1 mt-9'>Password</label>
        <input 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        id="password" className='outline-0 shadow-2xl mb-5 mt-2 border rounded-lg p-4 w-full text-violet-500' type="password" placeholder='Please Enter you are password' />
        <button type='submit' className={`bg-violet-700 rounded-3xl p-5 w-full text-white hover:bg-violet-900 transition duration-300 my-2 ${isLoading && "btn-disabled"}`}>{
          isLoading ? <ImSpinner2 className='animate-spin mx-auto w-5 h-5'/> : "Show me"
        }</button>
        </div>
        <div className="flex justify-between items-center my-2">
            {/* <p className='text-[14px]'>Don't have an account?<Link to="/register" className='text-violet-400 ml-1 hover:underline'>Sign Up</Link></p>
            <Link to="#" className='text-violet-500 text-[14px] hover:underline'>Forgot Password</Link> */}
        </div>
        
    </form>
</div> 
    </>
    
  )
}

export default Form