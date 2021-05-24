import { ErrorMessage, Field, Form, Formik } from 'formik';
import './login.css';
import {useLocation} from "wouter"

function Login() {

  const EMAIL = "ferreyragd1@gmail.com";
  const PASS = "react"

  const [location, setLocation] = useLocation()

  const initialValues = {
    email:"",
    password:""
  }
  const validate = (values) => {

    const errors = {}

    if(!values.email){
        errors.email = "Required email"
    }else if(!values.password){
        errors.password = "Required password"
    }else if(values.email !== EMAIL){
        errors.email = "Email incorrect"
    }else if(values.password !== PASS){
        errors.password = "Password incorrect"
    }

    return errors
    
  }

  const submit = (values) => {

    localStorage.setItem("token", values.password)
    setLocation("/home")
    
  }

  return (
      <>
      
      <Formik

        initialValues={initialValues}
        validate={validate}
        onSubmit={submit}
      > 
      {
        () =>
          <Form className="formulario">
            <h1>Bienvenido</h1>
            <Field type="text" name="email" className="form-input" placeholder="email" />
            <ErrorMessage className="form-error" name="email" component="div" />
            <Field type="password" name="password" className="form-input" placeholder="password" />
            <ErrorMessage className="form-error" name="password" component="div" />
            <button>Login</button>
          </Form>
      }
      </Formik>
      </>
  );
}

export default Login;
