import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Listmap = () => {
    var[inp,setInp]=useState(["ICTAK"])
    var[data,setData]=useState("")
    const inphandler=(e)=>{
        setData(e.target.value)
    }
    const add=()=>{
        setInp([...inp,data])
        console.log(inp)
        setData("")
    }
  return (
    <div>
        <br /><br />
        <TextField label="Type your name" variant='outlined' onChange={inphandler} value={data}/><br /><br />
        <Button variant='contained' onClick={add}>Submit</Button><br /><br />
        <ul>
        {inp.map((v,i)=>{
            return <li>{v}</li>
        })
        }
        </ul>
    </div>
  )
}

export default Listmap