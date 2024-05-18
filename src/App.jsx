import React, { useState } from 'react'

import Form from './components/Form'

const App = () => {
  
  const [products,setProducts] = useState([
    // {
    //   id : 1,
    //   email : "komauk1998@gmail.com",
    //   password : 12345678
    // },
    // {
    //   id : 2,
    //   email : "komauk@gmail.com",
    //   password : 12345678
    // },
    // {
    //   id : 3,
    //   email : "mauktheinkha@gmail.com",
    //   password : 12345678
    // },
  ])

  return (
   <>
   <Form products={products} setProducts={setProducts}/>
   </>
  )
}

export default App