import React from 'react'
interface DelFunc{
    (id:number):void
  }
const RowCard = ({id,title, body, DelNotes}:{id:number,title:string, body:string, DelNotes:DelFunc}) => {
  return (
    <div className='row-card'>
        <div className='content'>
            <strong style={{fontSize:"20px"}}>{title}</strong>
            <p>{body}</p>
        </div>
        <div className='interact'>
            <button onClick={()=>{DelNotes(id)}}>Delete</button>
        </div>
    </div>
  )
}

export default RowCard