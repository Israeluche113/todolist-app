import React from 'react'
import './TodoItems.css'
import { Checkbox } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setCheck } from '../features/todoSlice'

const TodoItems = ({ name, done, id }) => {
const dispatch = useDispatch()

    const handleCheck = () => {
        dispatch(setCheck(id))
    }
  return (
    <div className='todoitem'>
       <Checkbox 
         checked={done}
         color="primary"
         onChange={handleCheck}
         inputProps={{ 'arial-label': 'secondary checkbox' }}
       />
       
       <p className={done && 'todoItem--done'}>{name}</p>
    </div>
  )
}

export default TodoItems