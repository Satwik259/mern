import React from 'react'
import {HiMenuAlt2} from "react-icons/hi"
import {LuSearch} from "react-icons/lu"
const Nav = () => {
  return (
    <main className='flex justify-between mt-[26.75px] w-screen'>
<div className='ml-4 mt-1 text-2xl'>
<HiMenuAlt2/>
</div>
<div className=''>
<h1 className='font-serif  font-bold text-2xl'>Zintlr news</h1>
</div>
<div className='mr-4 mt-1 text-2xl'>
<LuSearch/>
</div>
    </main>
  )
}

export default Nav