import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const SampleUse = () => {
    var[val,setVal]=useState()
    const chg1=()=>{
        setVal("REACT")
    }
    const chg2=()=>{
        setVal("ANGULAR")
    }
    const chg3=()=>{
        setVal("VIEW")
    }
    useEffect(()=>{
        chg1()
    },[])
  return (
    <div>
        <br /><br />
        <Typography variant='h4'>Welcome to {val}</Typography><br /><br />
        <Button variant='contained' color='primary' onClick={chg1}>React</Button>&nbsp;&nbsp;
        <Button variant='contained' color='secondary' onClick={chg2}>Angular</Button>&nbsp;&nbsp;
        <Button variant='contained' color='success' onClick={chg3}>View</Button>
    </div>
  )
}

export default SampleUse