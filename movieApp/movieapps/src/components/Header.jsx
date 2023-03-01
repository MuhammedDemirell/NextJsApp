"use client"
import { useRouter } from "next/navigation";
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import MenuItem from './MenuItem';
import ThemeComp from './ThemeComp';


const Header = () => {

    const[keyword,setKeyword] = useState('')
    const router=useRouter();

    const menu=[
        {
            name:"About",
            url:"/about"
        },
        {
            name:"Sign In",
            url:"/login"
        }
    ]
    const searchFunch=(e)=>{
        if(e.key==="Enter" && keyword.length>=3){
            router.push(`search/${keyword}`)
            setKeyword('')
        }

    }

  return (
    
    <div className='flex items-center gap-7 h-20 p-5'>
        <div className='bg-amber-600 rounded-lg p-3 font-bold'>MovieApp</div>
       <div className='flex flex-1 items-center gap-2 boder rounded-lg'> 

       <input value={keyword} onKeyDown={searchFunch} onChange={e=> setKeyword(e.target.value)} placeholder='Arama Yapınız' className='outline-none flex-1 bg-transparent h-10 border-2 border-orange-500' type='text' />

        <BiSearch size={25} />
        <ThemeComp />
        </div>
        {
        menu.map((mn,i)=>(
            <MenuItem mn={mn} key={i}/>

        ))
        }
     
    </div>
  )
}

export default Header
