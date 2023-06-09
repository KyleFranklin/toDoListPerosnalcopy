import React from 'react';
import ToDoListBackground from '../graphics/ToDoListBackground.png';

const LoginPageStyling = () => {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
        <!-- Login Form -->
        <style>

          /* Setting the website's background image */
          body {
            background-image: url(${ToDoListBackground});

            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }

          /* Setting dimensions and styling the signin background */
          #signinBackground {
            background-color: #A5B2DF;
            border-radius: 10px;
            transform: translate(-50%, -50%);
            position: absolute;
            text-align: center;

            height: 472px;
            width: 354px;

            left: 50%;
            top: 50%;
          }

          /* Setting and styling the username field */
          #firstnameField {
            color: #6C6C6C;
            border: none;
            border-radius: 10px;
            box-sizing: border-box;
            font-size: 12pt;
            font-family: 'Inter', sans-serif;
            text-align: center;
            margin-bottom: 0.5em;
            margin-top: 1.5em;
            height: 30px;
            width: 299px;
          }
          /* Removing the "focus ring" when the username field is clicked */
          #firstnameField:focus {
            outline: none;
          }

          /* Setting and styling the username field */
          #lastnameField {
            color: #6C6C6C;
            border: none;
            border-radius: 10px;
            box-sizing: border-box;
            font-size: 12pt;
            font-family: 'Inter', sans-serif;
            text-align: center;
            margin-bottom: 0.5em;
            height: 30px;
            width: 299px;
          }
          /* Removing the "focus ring" when the username field is clicked */
          #lastnameField:focus {
            outline: none;
          }

          /* Setting and styling the username field */
          #emailaddressField {
            color: #6C6C6C;
            border: none;
            border-radius: 10px;
            box-sizing: border-box;
            font-size: 12pt;
            font-family: 'Inter', sans-serif;
            text-align: center;
            margin-bottom: 0.5em;
            height: 30px;
            width: 299px;
          }
          /* Removing the "focus ring" when the username field is clicked */
          #emailaddressField:focus {
            outline: none;
          }

          /* Setting the Spotify Code image */
          #spotifycodeImage {
            margin-bottom: 0.4em;
            width: 60%;
          }
    
          /* Setting and styling the username field */
          #usernameField {
            color: #6C6C6C;
            border: none;
            border-radius: 10px;
            box-sizing: border-box;
            font-size: 12pt;
            font-family: 'Inter', sans-serif;
            text-align: center;
            margin-bottom: 0.5em;
            height: 30px;
            width: 299px;
          }
          /* Removing the "focus ring" when the username field is clicked */
          #usernameField:focus {
            outline: none;
          }

          /* Setting and styling the "CREATE PASSWORD" field */
          #passwordField {
            color: #6C6C6C;
            border: none;
            border-radius: 10px;
            box-sizing: border-box;
            font-size: 12pt;
            font-family: 'Inter', sans-serif;
            text-align: center;
            margin-bottom: 0.5em;
            position: relative;

            height: 30px;
            width: 299px;
          }
          /* Removing the "focus ring" when the "CREATE PASSWORD" field is clicked */
          #passwordField:focus {
            outline: none;
          }
          /* Setting and styling the show and hide eye password icon */
          #eyeIcon {
            color: #9736C5;
            cursor: pointer;
            margin-top: 1em;
            right: 2.5em;
            position: absolute;
            transform: translateY(-50%);
          }

          /* Setting and styling the "CONFIRM PASSWORD" field */
          #passwordConfirmField {
            color: #6C6C6C;
            border: none;
            border-radius: 10px;
            box-sizing: border-box;
            font-size: 12pt;
            font-family: 'Inter', sans-serif;
            text-align: center;
            position: relative;

            height: 30px;
            width: 299px;
          }
          /* Removing the "focus ring" when the "CONFIRM PASSWORD" field is clicked */
          #passwordConfirmField:focus {
            outline: none;
          }

          /* Setting and styling the "PASSWORD REQUIREMENTS" box */
          #passwordRequirementsBox {
            position: relative;s
          }
          #passwordRequirementsBox:hover #passwordRequirementsText {
            display: block;
          }

          /* Setting and styling the password requirements bullets */
          .password-requirement-bullet {
            color: red;
          }
          .password-requirement-bullet-met {
            color: green;
          }
          .password-requirement-bullet-unmet {
            color: red;
          }
          
          /* Setting and styling the contents inside the password requirements box */
          #passwordRequirementsText {
            background-color: #FFFFFF;
            border: #9736C5 3px solid;
            border-radius: 6px;
            display: none;
            left: 50%;
            line-height: 1.5;
            position: absolute;
            top: calc(100% + 37px);
            transform: translateX(-50%);
            z-index: 1;
            
            height: 138px;
            width: 294px;
          }

          /* Setting and styling the "PASSWORD REQUIREMENTS" title */
          #passwordRequirementsTitle {
            font-family: 'Fredoka One', sans-serif;
            font-size: 16px;
            margin-bottom: 0em;
            margin-top: 0.5em;
          }

          /* Setting and styling the password requirements list */
          #passwordRequirementsList {
            font-family: 'Inter', sans-serif;
            font-size: 12px;
            text-align: left;
            margin-left: 1.9em;
            margin-top: 0.5em;
          }
          
          /* Setting and styling the show and hide eye password confirm icon */
          #eyeIconConfirm {
            color: #9736C5;
            cursor: pointer;
            margin-top: 1em;
            right: 2.5em;
            position: absolute;
            transform: translateY(-50%);
          }

          /* Styling the error message (if there is one) */
          #errorMessageSignup {
            font-size: 9pt;
            position: absolute;
            margin-top: 0.9em;
            top: 370px;
            transform: translateX(-50%);
            white-space: nowrap;
          }

          /* Styling “Account created successfully" message */
          #successMessagePopUp {
            color: #008000;
          }


          /* Setting and styling the "SIGN IN" button */
          #signupButton {
            background-color: #9736C5;
            border: none;
            border-radius: 12px;
            color: #FFFFFF;
            cursor: pointer;
            margin-top: 0.5em;

            font-family: 'Fredoka One', sans-serif;
            font-size: 18pt;

            height: 37px;
            width: 299px;

            position: absolute;
            top: 390px;
            left: 50%;
            transform: translateX(-50%);
          }
          /* Changing the "SIGN IN" button color when hovered over */
          #signupButton:hover {
            background-color: #AB6DC9;
          }

        </style>
        <!-- End Login Form -->
      `
    }} />    
  );
};

export default LoginPageStyling;