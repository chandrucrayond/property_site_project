import { makeStyles } from "@mui/styles";

export const createAccountStyle = makeStyles((theme) => ({

  createAccountContainer: {
    height: '100vh !important',
    width: '100% !important',
    // overflow: "hidden"
  },

  subSection1: {
    backgroundColor: "#FFFFFF !important",
    minHeight: '100% !important',
    width: '100% !important',
  },

  RoundIconFirst: {
    // position: 'absolute',
    // top: '-100px',
    // left: '100px',
  },

  RoundIconSecond: {
    // position: 'absolute',
    // top: '0px',
    // left: '50px',
    // zIndex: '1',
  },

  RoundIconThird: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

  subSection2: {
    // zIndex: '1 !important',
    backgroundColor: "#5078E1 !important",
    // position: 'relative !important',
    // minHeight: '100% !important',
    // width: '100% !important',
    height: '100vh !important',
  },

  buildingImageContainer: {

  },

  buildingImage: {
    // position: 'absoltue',
    zIndex: '2 !important',
    // bottom: 0,
    // maxWidth: '500px !important',
    // height: 'auto !important',
    // left: '10%',

  },

  signInSectionContainer: {
    backgroundColor: "#FFFFFF !important",
    // display: 'flex !important',
    // position: 'relative !important',
    // left: '40% !important',
    // top: '60px !important',
    padding: '32px 37px !important',
    borderRadius: '16px !important',
    zIndex: '5 !important',
  },

  signInSecionTabletContainer: {
    position: 'relative !important',
    padding: '13px 16px !important',
    borderRadius: '16px !important',
    // bottom: '90px',
    zIndex: '5',
    height: '100%',
  },


  input: {
    display: "block !important",
    marginTop: "10px !important",
    marginBottom: "20px !important",
    width: "100% !important",
    padding: "11px !important",
    outline: "none !important",
    borderColor: "#E4E8EE !important",
    borderRadius: "10px !important",
    boxSizing: 'border-box !important',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '19px',
    "&:hover": {
      cursor: "pointer !important",
    },
    "&:focus": {
      border: "1px solid #5078E1 !important",
      boxShadow: "none !important",
      caretColor: "#5078E1 !important",
      cursor: "text !important",
    },
  },

  helperText: {
    color: "#888 !important",
    fontSize: "12px !important",
    marginTop: "5px !important",
  },

  inputBoxSection: {
    display: 'block',
    width: '100%',
  },

  firstInputBox: {
    marginTop: '30px !important',
  },

  inputUsernameHover: {
    backgroundColor: "#219ebc1a !important",
    cursor: "pointer !important",
  },

  inputUsernameFocus: {
    border: "1px solid #219ebc !important",
    boxShadow: "none !important",
    caretColor: "#219ebc !important",
    cursor: "text !important",
  },

  inputPassword: {
    color: "#091b29 !important",
    background: "#ffffff 0% 0% no-repeat padding-box !important",
    border: "1px solid #e4e8ee !important",
    marginBottom: "7px !important",
    fontWeight: "600",
    letterSpacing: 2,
  },

  inputPasswordSmallSzie: {
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '19px',
    letterSpacing: 'normal !important',
  },

  forgotPasswordSection: {
    display: 'flex !important',
    justifyContent: 'end !important',
    position: 'relative !important',
    bottom: '30px !important',
  },

  propAutomateSection: {
    display: 'flex !important',
    // marginBottom: '20px !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
    margin: 'auto !important',
    marginTop: '30px !important',
    marginBottom: '20px !important',
    whiteSpace: 'nowrap',
  },

  propSubSection: {
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
    marginBottom: '10px',
  },

  loginButtonSection: {
    width: '100% !important',
  },

  loginButton: {
    color: "white !important",
    width: "100% !important",
    padding: "12px !important",
    textAlign: "center",
    justifyContent: "center !important",
    cursor: "pointer !important",
    backgroundColor: '#5078E1 !important',
    backgroundPosition: '0% 0% !important',
    backgroundRepeat: 'no-repeat !important',
    backgroundOrigin: 'padding-box !important',
    boxShadow: '0px 6px 10px #00000014 !important',
    borderRadius: '12px !important',
    border: '1px solid transparent',
  },

  successCard: {
    position: "fixed !important",
    top: "50% !important",
    left: "50% !important",
    transform: "translate(-50%, -50%) !important",
    backgroundColor: "#ffffff !important",
    padding: "40px !important",
    borderRadius: "8px !important",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2) !important",
    opacity: "0 !important",
    zIndex: "-1 !important",
    transition: "opacity 0.5s ease-in-out !important",
  },

  successText: {
    // font: "normal normal 800 18px/18px Montserrat !important",
  },

  show: {
    zIndex: "10 !important",
    opacity: "1 !important",
  },

  headingWelcome: {
    color: "#091b29 !important",
    marginBottom: '15px !important',
  },

  headingRegister: {
    letterSpacing: "0.11px !important",
    color: "#bbbbbb !important",
    paddingTop: "10px !important",
    paddingBottom: "25px !important",
  },

  label: {
    color: "#98a0ac !important",
  },

  inputUsername: {
    color: "#091b29 !important",
    background: "#ffffff 0% 0% no-repeat padding-box !important",
    border: "1px solid #e4e8ee !important",
  },

  containerPassword: {
    position: "relative !important",
    marginBottom: "0px !important",
  },

  eyeIcon: {
    position: "relative !important",
    width: "20px !important",
    cursor: "pointer !important",
    bottom: "35px !important",
    left: "90% !important",
    display: "inline !important",
  },

  errorMessage: {
    color: "red",
    position: "relative",
    bottom: "15px",
    marginTop: "5px !important",
  },

  passwordError: {
    bottom: "25px",
    marginBottom: '10px !important',
  },

  firstDotIcon: {
    position: 'absolute !important',
    right: '50% !important',
    top: '3% !important',
  },

  secondDotIcon: {
    position: 'absolute !important',
    right: 0,
    bottom: 0,
  },

  poweredBy: {
    fontWeight: 'normal !important',
    fontSize: '10px !important',
    lineHeight: '14px !important',
    letterSpacing: '0px !important',
    color: '#98A0AC !important',
  },

  propAutomateText: {
    color:' #4E5A6B',
  },

  PropIcon: {
    marginLeft: '5px',
    marginRight: '5px',
  }

}));
