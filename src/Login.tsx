import { Button, FormControl,InputAdornment, InputLabel, OutlinedInput, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { Text } from './ui/components/primitives/Text';

const Login = () => {
    return (
        <>
            <form style={{ height: '100vh',  width: '60%' }}>
                <Stack spacing={3} sx={{ alignItems: 'center', paddingTop: '70px' }} >
                    <img src={"isologotipo.png"} style={{ maxWidth: '208px', marginBottom: '48px' }} />
                    <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#4C4C4C' }}>Portal de Inversionistas</h1>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-email"
                            type="email"
                            placeholder='Ingresar correo'
                            endAdornment={
                                <InputAdornment position='end'>
                                    <EmailIcon />
                                </InputAdornment>
                            }
                            label="Email"
                        />
                    </FormControl>
                    <FormControl variant="outlined" fullWidth >
                        <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type="Password"
                            placeholder='Ingresar contraseña'
                            endAdornment={
                                <InputAdornment position='end'>
                                    <VisibilityIcon />
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    <Text type='body2' sx={{fontSize: "12px"}}>¿Olvidaste tu contraseña? </Text>
                    </FormControl>
                    
                    <Button sx={{
                        backgroundColor: '#2B2964', color: '#FFFFFF', '&:hover': { backgroundColor: '#6d00c781' }, borderRadius: '12px', paddingY: '6px', paddingX: '13px', textTransform: "capitalize", fontSize: "14px"
                    }}>
                        Iniciar sesión
                    </Button>
                    <Text sx={{ fontSize: '12px' }}>¿No tienes una cuenta? <Link to={{ pathname: "/register" }}>Registrate</Link> </Text>
                </Stack>

            </form>
        </>
    )
}

export default Login