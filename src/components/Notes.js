import React, { useContext, useEffect, useState } from 'react'
import NoteItem from './NoteItem'
import notecontext from '../context/notes/Notecontext'
import Modal from './Modal'
import Search from './Search'
function Notes() {
  const context = useContext(notecontext)
  const { notes, getNotes,editNote } = context
  const [showModal, setshowModal] = useState(false)
  const [note, setNote] = useState({id:"",etitle :"",edescription:"",etag:""})
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, [])

  const updatenote = (currentnote) => {
    // ref.current.click();
    setshowModal(true)
    setNote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag})
    
  }
  const handleclick=(e)=>{
    e.preventDefault()
    editNote(note.id,note.etitle,note.edescription,note.etag)
    setshowModal(false)
  }
  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }

  return (
    <div className='md:pl-24 pl-20 p-4 h-auto min-h-screen w-auto'>
        <Search/>
        <h1 className='text-black p-2 text-6xl font-bold font-sans my-8'>Notes</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {notes?.map((note) => {
          return <NoteItem key={note._id} updatenote={updatenote} note={note} />
        })}
        </div>
        <Modal isVisible={showModal}>
       
            <form className=' w-full mx-auto p-5 m-3 rounded'>
          
                <div className='flex flex-col text-gray-900 py-2'>
                    <label>Title</label>
                    <input type='text' name='etitle' value={note.etitle} onChange={onChange} className='p-1 rounded focus:outline-none'/>
                </div>
                <div className='flex flex-col text-gray-900 py-2'>
                    <label>Description</label> 
                    <input type='text' name='edescription'  value={note.edescription} onChange={onChange} className= 'p-1 rounded focus:outline-none'/>
                </div>
                <div className='flex flex-col text-gray-900 py-2'>
                    <label>Tag</label> 
                    <input type='text' name='etag' value={note.etag} onChange={onChange} className= 'p-1 rounded focus:outline-none'/>
                </div>
                <div className='flex justify-between '>
                  <button  onClick={handleclick} className=' text-center font-bold  rounded p-1 '>Edit</button>
                <button onClick={()=>setshowModal(false)}  className=' text-center font-bold  rounded p-1 '>Cancel</button>
                </div>
                
            </form>
        
        </Modal >
    </div>
  )
}

export default Notes