'use client'
import Image from 'next/image'
import RowCard from './components/RowCard'
import { ChangeEvent, useRef, useState } from 'react'

interface myNotes{
  id:number,
  title:string,
  body:string
}
interface AddFunc{
  (id:number, title:string, body:string):void
}
interface DelFunc{
  (id:number):void
}
export default function Home() {
  const [notes, setNotes] = useState<myNotes[]>([])
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')

  const handleOnChangeTitle = (e:ChangeEvent<HTMLInputElement>)=>{
    setTitle(e.target.value)
  }
  const handleOnChangeBody = (e:ChangeEvent<HTMLInputElement>)=>{
    setBody(e.target.value)
  }
  const AddNotes:AddFunc = (id, title, body)=>{
    if(title!=='' && body!==''){
      setNotes([...notes, 
        {
          id:id,
          title:title,
          body:body
        }])
    }
  }
  const DelNotes:DelFunc = (id)=>{
    if(id){
      setNotes(notes.filter((item)=> item.id !==id))
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='app-container'>
        <div className='app-input'>
          <label>Title <input onChange={handleOnChangeTitle}></input></label>
          <label>Body <input onChange={handleOnChangeBody}></input></label>
          <button onClick={()=>{AddNotes(notes.length+1, title,body)}}>Add</button>
        </div>
        {notes.map((note)=>{
          return(<RowCard key={note.id} id={note.id} title={note.title} body={note.body} DelNotes={DelNotes}/>)
        })}
      </div>
    </main>
  )
}
