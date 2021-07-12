import React from "react";
import Input from "./../input/input";
import Button from "./../button/button";
import styles from "./form.style";
import { withStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { signIn } from "../../../Store/action/actions";

const validationSchema = yup.object({
  username: yup
    .string("Enter your username")
    .required("Username is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters")
    .required("Password is required")
});

function CustomForm({ classes }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema : validationSchema,
    onSubmit: (values,{resetForm}) => {
      dispatch(signIn(values));
      resetForm();
    },
  });

  return (
    <form className={classes.formContainer} onSubmit={formik.handleSubmit}>
     
      <Input
        type="text"
        name="username"
        label="Username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      ></Input>

      <Input
        type="password"
        name="password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      ></Input>

      <Button text="Save" type="submit"></Button>
    </form>
  );
}

export default withStyles(styles)(CustomForm);
