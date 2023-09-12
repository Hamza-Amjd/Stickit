import React, { useContext, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import notecontext from '../context/notes/Notecontext'

export default function Search() {
    const {notes}=useContext(notecontext)
    const [searchQuery, setsearchQuery] = useState('')
    const onChange=()=>{
        const searchResults=notes.find(()=>{return notes.title=searchQuery})
        console.log(searchResults)
    }
  return (
    <div className='flex flex-row bg-gray-200 p-2 w-auto  rounded-2xl text-gray-700'>
            <button onClick={onChange}><FaSearch  className='m-1' /></button>
            <input type='search' placeholder='search' onChange={setsearchQuery} className='w-full bg-gray-200 focus:outline-none'/>
            
        </div>
  )
}
