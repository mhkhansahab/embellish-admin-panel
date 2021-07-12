import React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function CustomSelect({
  onChange,
  name,
  value,
  error,
  helperText
}) {

    return (
        <FormControl>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={onChange}
          name={name}
          error = {error}
          helperText={helperText}
        >
          <MenuItem value="male" >Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
    );
}

export default CustomSelect;
