import React, { useState, useEffect } from "react";
import { Typography, CircularProgress, Snackbar, Grid, Container, Alert, Box } from "@mui/material";
import { createAccountStyle } from "./style";
import { useNavigate } from "react-router-dom";
import BuildingImage from '/Sign-in/pexels-timur-saglambilek-87223@2x.png';
import VisibilityIcon from '../../src/icons/Sign-in/VisibilityIcon.jsx'
import RoundIcon from '../../src/icons/Sign-in/RoundIcon.jsx';
import RoundIcon2 from '../../src/icons/Sign-in/RoundIcon2.jsx';

function CreateAccount({ onLogin }) {
    const classes = createAccountStyle();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [openSnackBar, setOpenSnackBar] = React.useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackBar(false);
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        validateEmail();
        validatePassword();
        if (
            validateEmail() &&
            validatePassword()
        ) {
            setInputValues();
            setLoading(true);

            setTimeout(function () {
                var successMessage = document.getElementById("successMessage");
                successMessage.classList.add("show");
                setTimeout(function () {
                    setOpenSnackBar(true);
                    setLoading(false);
                    onLogin();
                    navigate("/dashboard");
                }, 1000);
            }, 1000);
        }
    }



    function setInputValues() {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    }

    function validateEmail() {
        var isValid = true;
        if (email.trim() === "") {

            setEmailError("Mobile Number/Email Id is required");
            isValid = false;
            return false;

        } else if (!isValidEmail(email)) {

            setEmailError('Please enter a valid email');
            isValid = false;
            return false;

        }
        else {

            setEmailError("");
            return true;

        }
    }


    function isValidEmail(email) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    function validatePassword() {
        var isValid = true;
        if (password.trim() === "") {
            setPasswordError('Password is required');
            isValid = false;
            return false;
        }
        else if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            isValid = false;
            return false;
        }
        else {
            setPasswordError('');
            return true;
        }
    }

    function handleLoginClick(event) {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onLogin();
            navigate("../products");
        }, 1500);
    }

    return (
        <Grid container spacing={2} sx={{  }}>

            <Grid item xs={12} sm={3} className={classes.subSection1} >
                <Grid container >
                    <Grid item className={classes.RoundIconFirst}>
                        <RoundIcon fill="#5078e1" opacity="0.25" width="186" height="186"/>
                    </Grid>
                    <Grid item className={classes.RoundIconSecond}>
                        <RoundIcon2 fill="#2C3060" opacity="1" width="400" height="600"/>
                    </Grid>
                    <Grid item className={classes.RoundIconThird}>
                        <RoundIcon fill="#5078e1" opacity="0.25"  width="186" height="186"/>
                    </Grid>
                </Grid>
                <img
                className={classes.teamImage}
                src={BuildingImage}
                alt="An model building image"
            />
            </Grid >

            <Grid item xs={12} sm={9} className={classes.subSection2}>
                <Grid container >
                    <Grid item>
                        <Typography
                            variant="h4"
                            className={`${classes.headingWelcome} createAccount--heading__welcome`}
                        >
                            Sign in
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Grid item className="mb-3">
                                <label htmlFor="email" className={classes.label}>
                                    Mobile Number / Email Id
                                </label>
                                <input
                                    type="email"
                                    className={`${classes.input} ${classes.inputUsername} form-control createAccount--input__email py-2`}
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        validateEmail();
                                    }}
                                />
                                <Box className={classes.errorMessage}>{emailError}</Box>
                            </Grid>
                            <Grid item className="mb-3 createAccount--container__password">
                                <label htmlFor="password" className={classes.label}>
                                   Enter Password
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className={`
                                            ${classes.input} 
                                            ${classes.inputPassword} 
                                            ${showPassword ? classes.inputPasswordSmallSzie : ''
                                        }
                                            `}
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        validatePassword();
                                    }}
                                />
                                <Box className={classes.eyeIcon}
                                    onClick={handleTogglePassword}>
                                    <VisibilityIcon />
                                </Box>
                                <Box className={`${classes.errorMessage} ${classes.passwordError}`}>{passwordError}</Box>
                            </Grid>
                            <Grid item
                                // type="submit"
                                onClick={handleFormSubmit}
                                className={`${classes.submitButton} createAccount--button `}
                            >
                                Create Account
                            </Grid>
                            <Grid item>
                                <button
                                    className={`${classes.loginButton} createAccount--button loginAccount--button`}
                                    onClick={handleLoginClick}
                                >
                                    {loading ? 'Logging in...' : ' Login Account'}
                                </button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item id="successMessage" className={classes.successCard}>
                        <span className={classes.successText}>
                            Account created successfully!
                        </span>
                    </Grid>

                </Grid>
            </Grid>

        </Grid >
  
    );
}

export default CreateAccount;

{/* {loading && (
                <Box style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <CircularProgress size={24} />
                </Box>
            )} */}
{/* <img
                className={classes.teamImage}
                src={BuildingImage}
                alt="An model building image"
            /> */}
