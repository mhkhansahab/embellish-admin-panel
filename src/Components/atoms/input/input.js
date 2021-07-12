import React from 'react';
import {TextField} from "@material-ui/core";

function input({
    type,
    label,
    value,
    onChange,
    name,
    error,
    helperText
}) {
    return (
            <TextField 
            name = {name}
            type={type} 
            label={label}
            value = {value}
            onChange = {onChange}
            error={error}
            helperText = {helperText}
            ></TextField>
    );
}

export default input;
