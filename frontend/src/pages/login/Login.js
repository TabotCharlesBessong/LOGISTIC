
import { Form  , Formik} from 'formik'
import React from 'react'
import useStyles from './Styles.js'
import * as Yup from 'yup'
import TextFields from '../../component/formUI/TextField/TextField.js'
import { Paper } from '@material-ui/core'
import Submit from '../../component/formUI/submit/Submit.js'

const initialValues = {
  email:'',
  password:''
}

const validationSchema = Yup.object().shape({
  email:Yup.string().email('invalid email').required('email address require for login'),
  password:Yup.string().required('Password is required for login')
})

const Login = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.loginForm}>
        <Paper elevation={2} className={classes.loginContainer}>
          <Formik initialValues = {initialValues}
            validationSchema={validationSchema}
            onSubmit = {(values)=>{
              console.log(values)
            }}
          >
            <Form>
             <TextFields
              name='email'
              label='charlesbessong@gmail.com'
              type='email'
             />
             <TextFields
              name='password'
              label='password here'
              type='password'
             />
             <Submit>
               Login here
             </Submit>
            </Form>
          </Formik>
          
        </Paper>
      </div>
    </>
  )
}

export default Login