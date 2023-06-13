import { Box, Grid, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoundIcon from '../../src/icons/Sign-in/RoundIcon.jsx';
import RoundIcon2 from '../../src/icons/Sign-in/RoundIcon2.jsx';
import VisibilityIcon from '../../src/icons/Sign-in/VisibilityIcon.jsx';
import PropIcon from '../../src/icons/Sign-in/logo.png';
import { createAccountStyle } from "./style";
import BuildingImage from '../../src/icons/Sign-in/teamImage.png';
import DotIcon from '../../src/icons/Sign-in/DotIcon.jsx'
import DotIcon2 from '../../src/icons/Sign-in/DotIcon2.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import theme from "../ThemeProvider/index.jsx";

function CreateAccount({ onLogin }) {

    const classes = createAccountStyle();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


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
   
    const isMdScreen = useMediaQuery(() => theme.breakpoints.down('md'));

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
            navigate("../properties");
        }, 1500);
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.rootContainer}>
                <Grid container className={classes.createAccountContainer}>

                    <Grid item xs={12} md={3} className={classes.subSection1} >
                        <Grid container style={{ display: isMdScreen ? 'none' : '' }}>
                            <Grid item className={classes.RoundIconFirst}>
                                <RoundIcon fill="#5078e1" opacity="0.25" width="186" height="160" />
                            </Grid>
                            <Grid item className={classes.RoundIconSecond}>
                                <RoundIcon2 fill="#2C3060" opacity="1" width="400" height="300" />
                            </Grid>
                            <Grid item className={classes.RoundIconThird}>
                                <RoundIcon fill="#5078e1" opacity="0.25" width="186" height="140" />
                            </Grid>
                        </Grid>
                        <img
                            className={classes.teamImage}
                            src={BuildingImage}
                            alt="An model building image"
                        />
                    </Grid >

                    <Grid item xs={12} md={9} className={classes.subSection2}>
                        <Box className={classes.firstDotIcon}>
                            <DotIcon />
                        </Box>
                        <Grid container xs={12} md={9}
                            className={` ${isMdScreen ?  classes.signInSection : classes.signInSection}`}
                        >
                            <Grid item className={classes.inputBoxSection} >
                                <Typography
                                    variant="h4"
                                    className={`${classes.headingWelcome} createAccount--heading__welcome`}
                                >
                                    Sign in
                                </Typography>
                            </Grid>
                            <Grid item  >
                                <Grid container>
                                    <Grid item className={`${classes.inputBoxSection} ${classes.firstInputBox}`}  >
                                        <Typography htmlFor="email" className={classes.label}>
                                            Mobile Number / Email ID
                                        </Typography>
                                        <input
                                            type="email"
                                            className={`${classes.input} ${classes.inputUsername}`}
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                validateEmail();
                                            }}
                                            fullWidth
                                        />
                                        <Box className={classes.errorMessage}>{emailError}</Box>
                                    </Grid>
                                    <Grid item className={classes.inputBoxSection}>
                                        <Typography htmlFor="password" className={classes.label}>
                                            Enter Password
                                        </Typography>
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
                                        <Typography variant='body2' className={classes.forgotPasswordSection}>Did you forget your password?
                                            <Link href="#" underline="none"> Click Here</Link>
                                        </Typography>
                                    </Grid>
                                    <Grid item className={`${classes.propAutomateSection}`} xs={12} md={9}>
                                        <Box className={classes.propSubSection}>
                                            <Typography
                                                variant="body1"
                                                className={`${classes.poweredBy}`}
                                            >
                                                Powered by
                                            </Typography>
                                            <img
                                                className={classes.PropIcon}
                                                src={PropIcon}
                                                alt="Property automate logo image"
                                            />
                                            <Typography
                                                variant="body1"
                                                className={`${classes.propAutomateText}`}
                                            >
                                                Property Automate
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item className={`${classes.loginButtonSection}`}>
                                        <button
                                            className={`${classes.loginButton}`}
                                            // onClick={handleLoginClick}
                                            onClick={handleFormSubmit}
                                        >
                                            {loading ? 'Logging in...' : ' Log in'}
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
                        <Box className={classes.secondDotIcon}>
                            <DotIcon2 />
                        </Box>
                    </Grid>
                </Grid >
            </div>
        </ThemeProvider>
    );
}

export default CreateAccount;
