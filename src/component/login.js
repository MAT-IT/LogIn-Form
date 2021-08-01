import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Link,
  Typography,
} from "@material-ui/core";
import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "77vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#22d222" };
  const btnstyle = { margin: "8px 0" };
  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("please enter valid email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values, props) => {
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);

    console.log(values);
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sing In </h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                name="username"
                label="Username"
                placeholder="Enter Username"
                helperText={<ErrorMessage name="username" />}
                fullWidth
                required
              />
              <Field
                as={TextField}
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
                helperText={<ErrorMessage name="password" />}
                fullWidth
                required
              />
              <Field
                as={FormControlLabel}
                name="remember"
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={btnstyle}
                fullWidth
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? "Loading" : "Sign In"}
              </Button>
              {console.log(props)}
            </Form>
          )}
        </Formik>
        <Typography>
          <Link href="#">Forgot password</Link>
        </Typography>
        <Typography>
          Do You have an account?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            {" "}
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
