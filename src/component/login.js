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
import {Formik,Form} from "formik";

const Login = ({handleChange}) => {
  const paperStyle = {
    padding: 20,
    height: "77vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#22d222" };
  const btnstyle = { margin: "8px 0" };
  const initialValues={
    username="",
    password="",
    remember=false
  }
  return (
    <Grid>
      <Paper  style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sing In </h2>
        </Grid>
        <Formik initialValues={initialValues}>
          {(props)=>(
            <Form>
                  <TextField
          name="username"
          label="Username"
          placeholder="Enter Username"
          fullWidth
          required
        />
        <TextField
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          name="remember"
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={btnstyle}
          fullWidth
        >
          Sing In
        </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          <Link href="#">Forgot password</Link>
        </Typography>
        <Typography>
          
          Do You have an account?
          <Link href="#" onClick={()=>handleChange("event",1)}> Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
