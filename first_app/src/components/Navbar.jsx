import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6'>MY APP</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='secondary'>
                    <Link to='/'>
                        Login
                    </Link>
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='success'>
                    <Link to='/sign'>
                        SignUp
                    </Link>
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='warning'>
                    <Link to='/sb'>
                        State
                    </Link>
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='secondary'>
                    <Link to='/cnt'>
                        Count
                    </Link>
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='success'>
                    <Link to='/list'>
                       List
                    </Link>
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='warning'>
                    <Link to='/api'>
                       Api
                    </Link>
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='secondary'>
                    <Link to='/use'>
                       UseEffect
                    </Link>
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='success'>
                    <Link to='/crd'>
                       Card
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar