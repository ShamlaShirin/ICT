import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6'>EMP APP</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='warning'>
                    <Link to='/'>
                        Home
                    </Link>
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='secondary'>
                    <Link to='/add'>
                        ADD
                    </Link>
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='warning'>
                    <Link to='/view'>
                        VIEW
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar