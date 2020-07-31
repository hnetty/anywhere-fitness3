import React, { useState } from 'react'
import axios from 'axios'
import { TextField, Button, RadioGroup, Radio, FormControl, FormControlLabel, Err } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  bgDiv: {
    background: '#EEEEEE',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
  },
  formBGDiv: {
    background: '#FFFFFF',
    boxShadow: '0px 0px 30px -25px',
    width: '800px',
    height: '100vh',
    padding: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down(900)]: {
      width: '650px',
    }
  },
  headerDiv: {
    paddingLeft: '5%',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: '20%',
  },
  h1: {
    fontSize: '2rem',
    color: '#00F676',
  },
  img: {
    width: '70px',
    height: '70px',
    marginRight: '5%',
  },
  form: {
    marginBottom: '10%',
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down(550)]: {
      flexDirection: 'column',
    }
  },
  formColumnDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  inputField: {
    marginBottom: '10%',
    [theme.breakpoints.down(550)]: {
      marginBottom: '5%',
    }
  },
  errorP: {
    color: 'red',
  }
}))

const initialFormData = {
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  role: 0,
}

const initialErrorState = {
  _: 'errorState',
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  role: '',
}

function SignUp (){
  const [ formData, setFormData ] = useState(initialFormData)
  const [ formErrors, setFormErrors ] = useState(initialErrorState)
  const history  = useHistory()
  const onSubmit = () => {
    
    console.log('submitting')
    if (validateFormData()){
      console.log(formData)
      console.log('submitted to api')
       axios.post('https://afitness.herokuapp.com/api/auth/register',formData)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      
      })
      .finally (()=>{
        history.push('/login')
      })
    }
  }

  const onChange = e => {
    const { name, value, checked } = e.target
    setFormData({...formData, [name]: name === 'role' ? Number(value) : value})
    if (formErrors[name]){
      validateFormData(name)
    }
  }

  const validateFormData = (specificIndex) => {
    console.log('validating')
    let passed = true
    const newErrorState = {...initialErrorState}
    if (!specificIndex || specificIndex === 'username'){
      if (!formData.username) {
        passed = false
        newErrorState.username = 'must include username'
      } else if (formData.username.length < 4) {
        passed = false
        newErrorState.username = 'must be at least 4 characters'
      }
    }
    if (!specificIndex || specificIndex === 'first_name'){
      if (!formData.first_name){
        passed = false
        newErrorState.first_name = 'must include first name'
      }
    }
    if (!specificIndex || specificIndex === 'last_name'){
      if (!formData.last_name){
        passed = false
        newErrorState.last_name = 'must include last name'
      }
    }
    if (!specificIndex || specificIndex === 'email'){
      if (!formData.email){
        passed = false
        newErrorState.email = 'must include email'
      }
    }
    if (!specificIndex || specificIndex === 'password'){
      if (!formData.password){
        passed = false
        newErrorState.password = 'must include password'
      } else if (formData.password.length < 8){
        passed = false
        newErrorState.password = 'must be at least 8 characters'
      }
    }
    if (!specificIndex || specificIndex === 'role'){
      if (!formData.role || formData.role === 0){
        passed = false
        newErrorState.role = 'must choose role'
      }
    }
    for (const [ i, v ] of Object.entries(formErrors)){
      if (v !== newErrorState[i]){
        setFormErrors(newErrorState)
        console.log('setFormErrors()')
        break
      }
    }
    return passed
  }

  const styles = useStyles()
  return(
    <div className={styles.bgDiv}>
      <div className={styles.formBGDiv}>
        <div className={styles.headerDiv}>
          <img src={require('./images/logoGreen.png')} alt='logo' className={styles.img} />
          <h1 className={styles.h1} >Create an account</h1>
        </div>
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.formColumnDiv} >
            <TextField
              className={styles.inputField}
              type='text'
              label='USERNAME'
              variant='outlined'
              name='username'
              value={formData.username}
              onChange={onChange}
              error={formErrors.username}
              helperText={formErrors.username}
            />
            <TextField
              className={styles.inputField}
              type='email'
              label='EMAIL'
              variant='outlined'
              name='email'
              value={formData.email}
              onChange={onChange}
              error={formErrors.email}
              helperText = {formErrors.email}
            />
            <TextField
              className={styles.inputField}
              type='password'
              label='PASSWORD'
              variant='outlined'
              name='password'
              value={formData.password}
              onChange={onChange}
              error={formErrors.password}
              helperText = {formErrors.password}
            />
          </div>
          <div className={styles.formColumnDiv} >
            <TextField
              className={styles.inputField}
              type='text'
              label='FIRST NAME'
              variant='outlined'
              name='first_name'
              value={formData.first_name}
              onChange={onChange}
              error={formErrors.first_name}
              helperText={formErrors.first_name}
            />
            <TextField
              className={styles.inputField}
              type='text'
              label='LAST NAME'
              variant='outlined'
              name='last_name'
              value={formData.last_name}
              onChange={onChange}
              error={formErrors.last_name}
              helperText = {formErrors.last_name}
            />
            
            <FormControl 
              component='fieldset'
              className={styles.inputField}
              error={formErrors.role}
              helperText={formErrors.role}
            >
              <RadioGroup 
                aria-label='ROLE'
                name='role'
                value={formData.role}
                onChange={onChange}
                error={true}
              >
                <FormControlLabel value={2} control={<Radio />} label='Member' />
                <FormControlLabel value={1} control={<Radio />} label='Instructor' />
                <p className={styles.errorP}>{formErrors.role}</p>
              </RadioGroup>
            </FormControl>
          </div>
        </form>
        <Button variant='outlined' onClick={onSubmit} size={'large'}>Submit</Button>
      </div>
    </div>
  )
} export default SignUp