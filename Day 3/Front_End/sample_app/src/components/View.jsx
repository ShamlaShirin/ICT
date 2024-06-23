import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'

const View = () => {
    var[user,setUser]=useState([])
    var[update,setUpdate]=useState(false)
    var[singleValue,setsingleValue]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/view")
        .then((res)=>{
        console.log(res.data)
        setUser(res.data)
    })
    .catch(err=>console.log(err))
    },[])
    const deleteValue=(id)=>{
        console.log(id)
        axios.delete("http://localhost:3005/remove/"+id)
        .then((response)=>{
            alert(response.data)
            window.location.reload(false)
        }).catch((err)=>console.log(err))

    }
    const updateValue=(val)=>{
        console.log("Updated")
        setUpdate(true)
        setsingleValue(val)
    }
  var finalJSX=<TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Employee_Name</TableCell>
                        <TableCell>Employee_Age</TableCell>
                        <TableCell>Employee_Position</TableCell>
                        <TableCell>Employee_Salary</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {user.map((val,i)=>{
                    return(
                    <TableRow>
                        <TableCell>{val.ename}</TableCell>
                        <TableCell>{val.eage}</TableCell>
                        <TableCell>{val.eposition}</TableCell>
                        <TableCell>{val.esalary}</TableCell>
                        <TableCell>
                            <Button variant='contained' onClick={()=>deleteValue(val._id)}>DELETE</Button>&nbsp;&nbsp;
                            <Button variant='contained' onClick={()=>updateValue(val)}>UPDATE</Button>
                        </TableCell>
                    </TableRow>
                    )
                })}
                </TableBody>
            </Table>

        </TableContainer>
        if(update) finalJSX=<Add data={singleValue} method='put'/>
        return finalJSX
       
}

export default View