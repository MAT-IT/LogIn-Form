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

const Login = ({handleChange}) => {
  const paperStyle = {
    padding: 20,
    height: "77vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#22d222" };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper  style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sing In </h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter Username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
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
