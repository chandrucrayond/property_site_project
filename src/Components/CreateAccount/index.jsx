import { Box, Grid, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoundIcon from '../../icons/Sign-in/RoundIcon.jsx';
import RoundIcon2 from '../../icons/Sign-in/RoundIcon2.jsx';
import VisibilityIcon from '../../icons/Sign-in/VisibilityIcon.jsx';
import PropIcon from '../../icons/Sign-in/logo.png';
import { createAccountStyle } from "./style";
import BuildingImage from '../../icons/Sign-in/teamImage.png';
import DotIcon from '../../icons/Sign-in/DotIcon.jsx'
import DotIcon2 from '../../icons/Sign-in/DotIcon2.jsx'
import { useMediaQuery } from '@mui/material';
import theme from "../ThemeProvider/index.jsx";
import Card from '@mui/material/Card';

function CreateAccount({ onLogin }) {

    const classes = createAccountStyle();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
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
                setTimeout(function () {
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

        }
        else if (!isValidMobileEmail(email)) {

            setEmailError('Please enter a valid Mobile Number/Email Id');
            isValid = false;
            return false;

        }
        else {

            setEmailError("");
            return true;

        }
    }

    function isValidMobileEmail(email) {
        // Check if the input is a valid mobile number
        const isMobileValid = /^\d{10,}$/.test(email);

        // Check if the input is a valid email address
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        // Return true if either mobile number or email is valid
        return isMobileValid || isEmailValid;
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
        <Grid container>

            <Grid item xs={12} md={3}>
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
            </Grid >

            <Grid item xs={12} md={9}>

                {/* subSection2  container start  */}
                <Grid container className={classes.subSection2}>

                    {/* Building image container grid item */}
                    <Grid item className={classes.buildingImageContainer} style={{ display: 'flex', alignItems: isMdScreen ? 'start' : 'end' }}>
                        <img
                            className={classes.buildingImage}
                            src={BuildingImage}
                            alt="A model building image"
                            style={{ width: isMdScreen ? '90%' : '40%', position: isMdScreen ? '' : 'absolute', left: isMdScreen ? '' : '100px', paddingTop: isMdScreen ? '50px' : '', }}
                        />
                    </Grid>

                    {/* first dot icon section without  to fit in the grid item */}
                    <Box className={classes.firstDotIcon} style={{ display: isMdScreen ? 'none' : '', }}>
                        <DotIcon />
                    </Box>

                    {/* second dot icon section without to fit in the grid item */}
                    <Box className={classes.secondDotIcon} style={{ display: isMdScreen ? 'none' : '', }}>
                        <DotIcon2 />
                    </Box>


                    <Grid item xs={12} style={{ display: 'flex', justifyContent: isMdScreen ? '' : 'end' }}>
                        <Card className={` ${isMdScreen ? classes.signInSecionTabletContainer : classes.signInSectionContainer}`} style={{
                            display: isMdScreen ? '' : 'inline-block', width: isMdScreen ? '100%' : '300px',
                            height: isMdScreen ? '' : '350px', marginRight: isMdScreen ? '' : '150px', marginTop: isMdScreen ? '' : '50px'
                        }}>

                            {/* sign in para  */}
                            <Typography variant="h1" className={`${classes.headingWelcome}`}> Sign in </Typography>


                            {/* mob no and email section without putting it in container */}
                            <Typography htmlFor="email" variant='h5' className={classes.label}>Mobile Number / Email ID</Typography>
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
                            <Typography variant='h4' className={classes.errorMessage}>{emailError}</Typography>


                            {/* Password section without putting it in container */}
                            <Typography htmlFor="password" variant='h5' className={classes.label}>
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
                            <Typography variant='h4' className={`${classes.errorMessage} ${classes.passwordError}`}>{passwordError}</Typography>


                            {/* forget your password section */}
                            <Typography variant='h4' className={classes.forgotPasswordSection}>Did you forget your password?
                                <Link href="#" underline="none" style={{ marginLeft: '5px', }}> Click Here</Link>
                            </Typography>



                            {/* powered by property automate para contained in a box container */}
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
                                    variant="h5"
                                    className={`${classes.propAutomateText}`}
                                >
                                    Property Automate
                                </Typography>
                            </Box>


                            {/* Log in button  */}
                            <button className={`${classes.loginButton}`} onClick={handleFormSubmit}><Typography variant='h3'>{loading ? 'Logging in...' : ' Log in'}</Typography></button>


                        </Card>
                    </Grid>



                </Grid >
            </Grid>
        </Grid >
    );
}

export default CreateAccount;
