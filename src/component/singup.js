import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
const Singup = () => {
  const paperstyle = { padding:20 , width: 300, margin: "0 auto" };
  const headerstyle = { margin: 0 };
  const avatarstyle = { backgroundColor: "#22d222" };
  const genderstyle = { marginTop: 5 };
  return (
    <Grid>
      <Paper  style={paperstyle}>
        <Grid align="center">
          <Avatar style={avatarstyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerstyle}>Sing up</h2>
          <Typography variant="caption">
            Please fill this form to create an account
          </Typography>
        </Grid>
        <form>
          <TextField fullWidth label="Name" />
          <TextField fullWidth label="Email" />
          <FormControl component="fieldset" style={genderstyle}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField fullWidth label="Phone Number" />
          <TextField fullWidth label="Password" />
          <TextField fullWidth label="Confirm Password" />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions"
          />

          <Button type="submit" variant="contained" color="primary">
            Sing Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Singup;
