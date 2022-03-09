import React, { useState } from 'react';
import { Box, Paper, TextField, Button, Grid } from '@mui/material';
import validation from './validation';

const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const Form = () => {
    const paperStyle = { padding: 20, height: '80vh', width: 280, margin: "40px auto" };
    const textStyle = { margin: '10px auto' }

    const [values, setValues] = useState(initialValues);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));
    }

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }


    return (
        <Box>
            <Paper elevation={10} style={paperStyle}>

                <Grid align='center'>
                    <h1>Signup Form</h1>
                </Grid>

                <TextField label='Full Name'
                    placeholder='Enter Full Name' fullWidth style={textStyle}
                    name="fullName"
                    value={values.fullName}
                    onChange={handleInputChange} />
                {errors.fullName && <p style={{ color: 'red', textAlign: 'left', margin: '2px auto' }}>{errors.fullName}</p>}

                <TextField label='Email' placeholder='Enter Email' fullWidth style={textStyle}
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                />
                {errors.email && <p style={{ color: 'red', textAlign: 'left', margin: '2px auto' }}>{errors.email}</p>}

                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required style={textStyle}
                name="password"
                value={values.password}
                onChange={handleInputChange} />
                {values.password.length>6 ? "" : <p style={{ color: 'red', textAlign: 'left', margin: '2px auto' }}>Password must be at least 6 characters long</p>}
                {/* {errors.password && <p style={{ color: 'red', textAlign: 'left', margin: '2px auto' }}>{errors.password}</p>} */}

                <TextField label='password' type='password' placeholder='Confirm Password' fullWidth style={textStyle} 
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleInputChange}/>
                {errors.confirmPassword && <p style={{ color: 'red', textAlign: 'left', margin: '2px auto' }}>{errors.confirmPassword}</p>}

                <Button type='submit' variant='contained' color='primary' style={textStyle}
                    onClick={handleFormSubmit}>Sign Up</Button>

            </Paper>

        </Box>
    )
}

export default Form;