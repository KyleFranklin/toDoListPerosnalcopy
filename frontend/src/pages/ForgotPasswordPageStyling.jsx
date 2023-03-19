import React from 'react';
import ToDoList_bg_2 from '../graphics/ToDoList_bg_2.png';

const LoginPageStyling = () => {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
        <!-- Login Form -->
        <style>

          /* Setting the website's background image */
          body {
            background-image: url(${ToDoList_bg_2});

            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }

          /* Setting dimensions and styling the signin background */
          #signinBackground {
            background-color: #A5B2DF;
            border-radius: 10px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            position: absolute;

            height: 472px;
            width: 354px;
          }
    
          /* Centering the contents inside the sigin box (except "Forgot your password") */
          #signinText {
            text-align: center;
          }
    
          /* Styling the "PASSWORD RESET" title*/
          #passwordReset {
            background-color: #FFFFFF;
            border: none;
            border-radius: 12px;
            color: #000000;
            font-family: 'Fredoka One', sans-serif;
            font-size: 18pt;
            line-height: 50px;
            margin-bottom: 0.2em;
            margin-left: auto;
            margin-right: auto;
            height: 50px;
            width: 299px;
          }

          /* Styling the first line of password reset instructions */
          #resetInstructionsP1 {
            color: #FFFFFF;
            margin-bottom: 0em;
            margin-top: 0em;

            font-family: 'Nunito', sans-serif;
            font-size: 12pt;
          }
          /* Styling the second line of password reset instructions */
          #resetInstructionsP2 {
            color: #FFFFFF;
            margin-bottom: 0em;
            margin-top: 0em;

            font-family: 'Nunito', sans-serif;
            font-size: 12pt;
          }
    
          /* Setting and styling the username field */
          #usernameField {
            color: #6C6C6C;
            border: none;
            border-radius: 10px;
            box-sizing: border-box;
            text-align: center;
            margin-bottom: 1em;

            font-size: 12pt;
            font-family: 'Inter', sans-serif;

            height: 30px;
            width: 299px;
          }
          /* Removing the "focus ring" when the username field is clicked */
          #username:focus {
            outline: none;
          }

          /* Setting and styling the email address field */
          #emailField {
            color: #6C6C6C;
            border: none;
            border-radius: 10px;
            box-sizing: border-box;
            text-align: center;
            margin-bottom: 1em;

            font-size: 12pt;
            font-family: 'Inter', sans-serif;

            height: 30px;
            width: 299px;
          }
          /* Removing the "focus ring" when the username field is clicked */
          #emailField:focus {
            outline: none;
          }

          /* Setting and styling the email address confirmation field */
          #emailFieldConfirmation {
            color: #6C6C6C;
            border: none;
            border-radius: 10px;
            box-sizing: border-box;
            text-align: center;
            margin-bottom: 0.8em;

            font-size: 12pt;
            font-family: 'Inter', sans-serif;

            height: 30px;
            width: 299px;
          }
          /* Removing the "focus ring" when the username field is clicked */
          #emailFieldConfirmation:focus {
            outline: none;
          }
    
          /* Setting the Winged Email image */
          #wingedEmail {
            margin-bottom: 0.2em;
            width: 52%;
          }

          /* Styling the error message (if there is one) */
          #errorMessage {
            font-size: 10pt;
          }

          /* Setting and styling the "RESET PASSWORD" button */
          #resetPasswordButton {
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
          }
          /* Changing the "RESET PASSWORD" button color when hovered over */
          #resetPasswordButton:hover {
            background-color: #AB6DC9;
          }

        </style>
        <!-- End Login Form -->
      `
    }} />    
  );
};

export default LoginPageStyling;