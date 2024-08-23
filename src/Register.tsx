import { Button, Checkbox, FormControl, FormControlLabel, FormHelperText, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";
import { Text } from "./ui/components/primitives/Text";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [validPass, setValidPass] = useState<boolean | null>(null);
  const [validEmail, setValidEmail] = useState<boolean | null>(null);
  const [doPasswordsMatch, setDoPasswordsMatch] = useState<boolean | null>(null);
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [checkBoxError, setCheckBoxError] = useState<boolean | null>(null);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const isValid = passWordValidation(val);
    setPassword(e.target.value);
    setValidPass(isValid)
    setDoPasswordsMatch(val === password)
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setRePassword(val);
    setDoPasswordsMatch(val === password);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const isValid = emailValidation(val)
    setEmail(val);

    if (email) {
      setValidEmail(isValid)
    } else {
      setValidEmail(null)
    }
  }

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setTermsAccepted(checked);
    if (checked) {
      setCheckBoxError(null)
    }
  }

  const passWordValidation = (password: string): boolean => {
    const rules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return rules.test(password);
  }

  const emailValidation = (email: string): boolean => {
    const rules = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return rules.test(email);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if ([name, lastName, email, password, rePassword].includes("")) {
      console.log("Todos los campos son obligatorios")
      return;
    }

    if (password !== rePassword) {
      console.log("Las password deben coincidir");
      return;
    }

    if (!termsAccepted) {
      setCheckBoxError(true);
      return;
    }

    if (validPass && doPasswordsMatch && validEmail) {
      console.log("Formulario enviado con éxito!");
    }


  }



  return (
    <>
      <form onSubmit={handleSubmit} style={{ height: '100vh', padding: '20px', width: '80%' }}>
        <Stack spacing={3} sx={{ alignItems: 'center', paddingTop: '70px' }} >
          <img src={"isologotipo.png"} style={{ maxWidth: '208px' }} />
          <Text sx={{ fontSize: '24px', fontWeight: '600', color: '#4C4C4C' }}>Portal de Inversionistas</Text>
          <Text sx={{ fontSize: '20px', color: "#2B2964" }}>¡Te damos la bienvenida!</Text>
          <Text sx={{ fontSize: "12px", color: "#585858" }} >Por favor, completa los siguientes datos para poder crear tu cuenta.</Text>
          <Stack direction={'row'} spacing={2} sx={{ width: '100%', paddingTop: '10px' }}>
            <TextField fullWidth label="Nombre" placeholder="Ingresar nombre" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField fullWidth label="Apellido" placeholder="Ingresar apellido" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </Stack>
          <TextField
            fullWidth
            label="Email"
            placeholder="Ingresar correo"
            value={email}
            onChange={handleEmailChange}
            error={validEmail === false}
            helperText={validEmail === false ? "Formato de correo incorrecto" : ""}
          />
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type="Password"
              placeholder='Ingresar contraseña'
              value={password}
              onChange={handlePasswordChange}
              error={validPass === false}
              endAdornment={
                <InputAdornment position='end'>
                  <VisibilityIcon />
                </InputAdornment>
              }
              label="Password"
            />
            <FormHelperText>
              {validPass === false ? "Debe contener al menos una mayúscula, una minúscula, un número y 8 caracteres." : ""}
            </FormHelperText>
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-repassword">Confirmar contraseña</InputLabel>
            <OutlinedInput
              id="outlined-adornment-repassword"
              type="Password"
              placeholder='Vuelve a escribir tu contraseña'
              value={rePassword}
              onChange={handleConfirmPasswordChange}
              error={doPasswordsMatch === false}
              endAdornment={
                <InputAdornment position='end'>
                  <VisibilityIcon />
                </InputAdornment>
              }
              label="Password"
            />
            <FormHelperText>
              {doPasswordsMatch === false ? "Las password no coinciden" : ""}
            </FormHelperText>
          </FormControl>
          <Stack spacing={2} sx={{ alignItems: 'center' }}>
            <FormControlLabel
              control={<Checkbox
                checked={termsAccepted}
                onChange={handleTermsChange} />}
              label={<Typography fontSize={"11px"} fontWeight={"400"}>Declaro que soy mayor de edad y acepto los términos y condiciones de Wbuild.</Typography>}
            />
            {checkBoxError && (<FormHelperText error>Debes aceptar los términos y condiciones</FormHelperText>)}
            <Button type="submit" variant="contained" sx={{
              backgroundColor: '#2B2964',
              color: '#FFFFFF',
              '&:hover': { backgroundColor: '#6d00c781' },
              borderRadius: '12px',
              paddingY: '6px',
              paddingX: '13px',
              fontSize: '14px',
              textTransform: 'capitalize'
            }} >
              Registrarse
            </Button>

            <Text type="body2" sx={{ fontSize: "12px" }}>¿Ya tienes una cuenta? <Link to={{
              pathname: "/login"
            }}> Iniciar sesión</Link>
            </Text>
          </Stack>
        </Stack>
      </form>
    </>
  )
}

export default Register