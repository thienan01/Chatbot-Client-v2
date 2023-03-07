import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
const style = {
  marginTop: "20px",
};

const useStyles = makeStyles({
  customOutline: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
    },
  },
});
function Intent() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <FormControl
        fullWidth
        style={style}
        variant="outlined"
        classes={{ root: useStyles.customOutline }}
      >
        <InputLabel id="demo-simple-select-label" sx={{ borderRadius: "40px" }}>
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default Intent;
