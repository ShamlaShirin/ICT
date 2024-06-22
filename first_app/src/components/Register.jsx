import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
        <Typography variant='h4'>Login</Typography><br />
        <TextField label="Username" variant="outlined" /><br /><br />
        <TextField label="Password" variant="outlined" /><br /><br />
        <Button variant="contained">Login</Button>

    </div>
  )
}

export default Register