import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik, Field, useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import environment from '../environment';
import axios from 'axios';

function Login() {
    const formik = useFormik({
        initialValues: {username:'',password:''},
        enableReinitialize:true,
        validationSchema: Yup.object({
            username: Yup.string()
            .min(3, "Must be  3 characters or more")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
            password: Yup.string()
            .min(3, "Must be  3 characters or more")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
         
        }),
        onSubmit: (values) => {
          axios.post(`${environment.api}/user/login`,values)
          .then((res)=>{
           console.log(res)
          })
          .catch((err)=>{
          alert('unauthorized error')
          })

          }

   })

  return (
    <Container>
        <Row>
            <Col>
            <Form onSubmit={formik.handleSubmit}>
            <Form.Group className='mb-3' controlId='username'>
                <Form.Label>UserName</Form.Label>
                <Form.Control
                  type='text'
                  name='username'
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  placeholder='Enter username'
                />
                <Form.Text className='text-danger'>
                  {formik.touched.username && formik.errors.username ? (
                    <div className='text-danger'>{formik.errors.username}</div>
                  ) : null}
                </Form.Text>
              </Form.Group>
              <Form.Group className='mb-3' controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  name='password'
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  placeholder='Enter Password'
                />
                <Form.Text className='text-danger'>
                  {formik.touched.password && formik.errors.password ? (
                    <div className='text-danger'>{formik.errors.password}</div>
                  ) : null}
                </Form.Text>
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Login
