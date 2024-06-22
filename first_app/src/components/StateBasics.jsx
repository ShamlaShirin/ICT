import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname,setFname]=useState("Shamla")
    var[val,setval]=useState()
const submithandler = () => {
    setFname(val)
}
const changehandler = (e) => {
    console.log(e.target.value)
    setval(e.target.value)
    }
  return (
    <div>
        <Typography variant='h4'>Welcome {fname}</Typography><br /><br />
        <TextField variant='outlined' label="Type your name" onChange={changehandler}/>
        <br /><br />
        <Button variant='contained' onClick={submithandler}>submit</Button>
    </div>
  )
}

export default StateBasics