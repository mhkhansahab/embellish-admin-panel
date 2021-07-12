import React from 'react';
import {Button} from "@material-ui/core";
import styles from "./button.style";
import {withStyles} from "@material-ui/core/styles";

function CustomButton({
    classes,
    text,
    type
}) {




    return (
        <Button className = {classes.buttonStyle} type={type ? type : "submit"}>
            {!text ? "Save" : text}
            </Button>
    );
}

export default withStyles(styles)(CustomButton);
