import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from 'axios'
import "./index.css"


function App() {
  const [products, setProducts] = useState(null)

  const dataFetching = async()=>{

    const res = await axios.get("https://dummyjson.com/products")
    setProducts(res.data.products)

  }

  console.log(products)

useEffect(()=>{
  dataFetching()
},[])

  return products? (
    <>
    <div className='badaDiv'>
      {
        products.map((item)=>
          <div key={item.id}>
          <img className='image' src={`${item.images[0]}`} alt=""/>
          </div>
        
             
        )
      }
       </div>
    </>
  ) : (<> <div> Loading... </div> </>)
}

export default App
