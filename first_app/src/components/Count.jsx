import { Button,Typography } from '@mui/material'
import React, { useState } from 'react'

const Count = () => {
    var[num,setNum]=useState(0)

    const add = () => {
        console.log("add btn clicked")
        setNum(num+1)
    }
    const sub = () => {
        console.log("sub btn clicked")
        setNum(num-1)
       
    }
  return (
    <div>
        <Typography variant='h4'>{num}</Typography><br /><br />
        <Button variant='contained' onClick={add}>+</Button>&nbsp;&nbsp;
        <Button variant='contained' onClick={sub}>-</Button>
    </div>
  )
  
}
export default Count