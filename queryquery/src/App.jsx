import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [data, setData] = useState(null)
  const [page, setPage ] = useState(1)

  const dataFetching = async()=>{
    console.log(page)
    const res = await fetch(`https://api.github.com/search/users?q=react&page=${page}&per_page=20`)
    const newData = await res.json()
    setData((data)=> data? data + newData : newData)
    console.log(data)
  }

  useEffect(()=>{
    dataFetching()
  },[page])

  return data? (
    <>
    <div>
      <div className='flex flex-wrap gap-5 m-5'>      {
        data.items?.map((item)=>
        <div key={item.id}>
          <img src={`${item.avatar_url}`} alt="" className='w-[50px] h-[50px]' />
           </div>

        
        )
      }
         </div>
         <button className='btn bg-slate-500 p-3 rounded-md' onClick={()=> setPage((page)=> page+1 )} > more...</button>

    </div>
    </>
  ) : (
    <div> Loading...</div>
  )
}

export default App
