import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = (props) => {
    var navigate = useNavigate()
    var [inputs, setInputs] = useState(props.data)
    console.log("props data:",props.data)
    console.log("props method:",props.method)
    const inputHandler = (e) => {
        const { name, value } = e.target
        setInputs((prevData) => ({ ...prevData, [name]: value }))
        console.log(inputs)
    }
    const addHandler = () => {
        console.log("button clicked");
        if(props.method==="post"){
        axios.post("http://localhost:3005/create", inputs)
            .then((response) => {
                console.log(response.data)
                alert(response.data)
                navigate('/')
            })
            .catch((err) => console.log(err))
        }

        if (props.method==="put"){
            axios.put("http://localhost:3005/update/"+inputs._id,inputs)
            alert("Data Updated")
            navigate('/add');
            setTimeout(() => {
                navigate('/view');
            }, 10);
        }
    }
  return (
    <div>
         <Typography variant='h4'>EMPLOYEE FORM</Typography><br />
        <TextField label="Employee Name" variant="outlined"  name='ename'
                value={inputs.ename}
                onChange={inputHandler} /><br /><br />
        <TextField label="Employee Age" variant="outlined"  name='eage'
                value={inputs.eage}
                onChange={inputHandler}/><br /><br />
        <TextField label="Employee Position" variant="outlined" name='eposition'
                value={inputs.eposition}
                onChange={inputHandler}/><br /><br />
        <TextField label="Employee Salary" variant="outlined" name='esalary'
                value={inputs.esalary}
                onChange={inputHandler} /><br /><br />
        <Button variant="contained" olor='secondary' onClick={addHandler}>submit</Button>
    </div>
  )
}

export default Add