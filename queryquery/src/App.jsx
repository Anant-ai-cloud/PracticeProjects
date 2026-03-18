import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [data, setData] = useState(null)
  const [page, setPage] = useState(2)

  const [person, setPerson] = useState("")

  const dataFetching = async () => {
    console.log(page)
    const res = await fetch(`https://api.github.com/search/users?q=${person}&page=1&per_page=20`)
    const newData = await res.json()
    const items = newData.items
    console.log(newData)
    setData(items)

  }
  const similarDataFetching = async () => {

    if (page > 1) {
      console.log("Hii im here")
      const res = await fetch(`https://api.github.com/search/users?q=${person}&page=${page}&per_page=20`)
      const data = await res.json()
      const items = data.items
      setData((data) => data ? [...data, ...items] : items)
    } 
  }



  


  return data ? (
    <>
      <div>

        <div>
          <input type="text" id='person' className='input w-[180px] h-[40px] border border-black rounded-lg ml-[600px] p-2' value={person} onChange={(e) => setPerson(e.target.value)} />
          <button type='submit' onClick={() => dataFetching()} className='w-[150px] h-[40px] rounded-lg'> Search</button>
        </div>

        <div className='flex flex-wrap gap-5 m-5'>      {
          data.map((item) =>
            <div key={item.id}>
              <img src={`${item.avatar_url}`} alt="" className='w-[50px] h-[50px]' />
              <div className='text-black text-md'>{item.login}</div>
            </div>


          )
        }
        </div>
        <button className='btn bg-slate-500 p-3 rounded-md' onClick={() => { setPage((page) => page + 1), similarDataFetching() }} > more...</button>

      </div>
    </>
  ) : (
    <div>
      <input type="text" id='person' className='input w-[180px] h-[40px] border border-black rounded-lg ml-[600px] p-2' value={person} onChange={(e) => setPerson(e.target.value)} />
      <button type='submit' onClick={() => dataFetching()} className='w-[150px] h-[40px] rounded-lg'> Search</button>

    </div>
  )
}

export default App
