import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,reset,decrement, incremetByClick } from '../redux/counterSlice'

const Display = () => {
  const {count} = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()
  const [amount,setAmount] =useState(0)
  return (
<>
        <div style={{height:"100vh"}} className='d-flex align-items-center justify-content-center w-100 text-center flex-column '>
            <h1 className='py-5'>Counter App</h1>
            <div className='border rounded p-5'>
                <div>
                    <h1 style={{fontSize:"80px"}}>{count}</h1>
                </div>
                <div className='d-flex justify-content-between align-items-center gap-5 py-5'>
                <button onClick={() => dispatch(decrement())} className='btn btn-warning'>Decrement</button>
                <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
                <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>


                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <input onChange={e=>setAmount(e.target.value)} type="text" className='form-control' style={{width:"70%"}}placeholder='Enter Amount to Increment' />
                <button onClick={()=>dispatch(incremetByClick(Number(amount)))} className='btn btn-primary '>Increment</button>
                </div>

    
            </div>

    
          
        </div>

</>
  )
}

export default Display
