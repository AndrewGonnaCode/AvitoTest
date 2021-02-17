import React, { useState } from 'react'
import { sendHandler } from '../../../store/actions/main'
import './Form.css'

interface FormProps {
    id:number
}
const Form:React.FC<FormProps> = ({id})=>{
    
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const sendComment = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        sendHandler(id, name, comment)
    }
    return (
        <div className="form">
            <form action="">
                <input type="text" value={name} placeholder="Ваше Имя" onChange={e=>setName(e.target.value)} />
                <input type="text" value={comment} placeholder="Ваш комментарий" onChange={e => setComment(e.target.value)}/>
                <button className="btn" onClick={e=>sendComment(e)}>Оставить комментарий</button>
            </form>
            
        </div>
    )
}

export default Form
