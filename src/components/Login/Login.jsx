import './Login.css';
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Login( { onLogin }) {
    const [showPassword, setShowPassword] = React.useState(false);

    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (e) => {
        const input = e.target;
        const { value, name } = input;
        setValues({ ...values, [name]: value });

        ((values.username) && values.password) ? setIsValid(true) : setIsValid(false);
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(values);
    }

    return (
        <main className="login">


            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', width: '396px', gap: '20px', margin: '0px 20px 0px 20px' }}>

                <Typography variant="h1" gutterBottom sx={{ textAlign: 'center', fontSize: '30px' }}>Добро пожаловать</Typography>

                <TextField required error={values.username === '' ? true : false} helperText={values.username === '' ? 'Поле не должно быть пустым' : ''} name='username' id="outlined-required" label="Логин" variant="outlined" onChange={handleChange} value={values.username}/>

                <FormControl name='password' variant="outlined" onChange={handleChange}  value={values.password} required>
                    <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        name='password'
                    />
                </FormControl>

                <Button disabled={!isValid} type='submit' variant="contained" sx={{ height: '56px', fontSize: '16px', marginTop: '50px' }}>Войти</Button>
            </Box>
        </main>
    )
}