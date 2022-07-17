import { Button } from "components/Button";
import Input from "components/Input/Input";
import { VeDivider } from "layouts/layout.style";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { isEmail, validationSignUp } from "utils/validation";
import { FcGoogle } from "react-icons/fc";
import { DiYahooSmall } from "react-icons/di";
import { TiVendorMicrosoft } from "react-icons/ti";
import {
  AuthActionGroup,
  AuthDiv,
  AuthFormGroup,
  AuthTitle,
  FormGroup,
} from "views/signin/signin.style";
import GoogleLogin from "react-google-login";
import { signUp } from "actions/user.action";

const Signup = () => {
  const [state, setState] = useState<any>({
    fName: "",
    lName: "",
    email: "",
    pass1: "",
    pass2: "",
    isAllow: false,
  });

  const [flag, setFlag] = useState(true);

  const handleInputChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSignUpClick = () => {
    if (flag) {
      if (state.email === "") {
        toast.error("Email field is required!", {
          theme: "colored",
        });
      } else if (!isEmail(state.email)) {
        toast.error("Invalid email!", {
          theme: "colored",
        });
      } else {
        setFlag(false);
      }
    } else {
      if (validationSignUp(state) !== "success") {
        toast.error(validationSignUp(state), {
          theme: "colored",
        });
      } else {
        signUp(state);
        // toast.success("Success", {
        //   theme: "colored",
        // });
      }
    }
  };

  const googleAuthSuccess = (res: any) => {
    const userInfo = res.profileObj;
    setState({
      ...state,
      email: userInfo.email,
      fName: userInfo.givenName,
      lName: userInfo.familyName,
      isAllow: true,
    });
    setFlag(false);
  };
  const googleAuthFailed = (err: any) => {
    toast.error("Google Authentication Failed", {
      theme: "colored",
    });
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <AuthDiv>
        <AuthTitle>Sign Up</AuthTitle>
        <AuthFormGroup>
          <Input
            label={"Email"}
            type="email"
            value={state.email}
            onChange={handleInputChange}
            placeholder="Email"
            name="email"
            disabled={!flag}
          />
          {!flag && (
            <FormGroup>
              <Input
                label={"First Name"}
                type="text"
                value={state.fName}
                onChange={handleInputChange}
                placeholder="First Name"
                name="fName"
                disabled={flag}
              />
              <Input
                label={"Last Name"}
                type="text"
                value={state.lName}
                onChange={handleInputChange}
                placeholder="Last name"
                name="lName"
                disabled={flag}
              />
            </FormGroup>
          )}

          {!flag && (
            <FormGroup>
              <Input
                label={"Password"}
                type="password"
                value={state.pass1}
                onChange={handleInputChange}
                placeholder="Password"
                name="pass1"
                disabled={flag}
              />
              <Input
                label={"Confirm Password"}
                type="password"
                value={state.pass2}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                name="pass2"
                disabled={flag}
              />
            </FormGroup>
          )}
        </AuthFormGroup>
        <VeDivider mg="20px 0 0 0" />

        <AuthActionGroup>
          <Button
            onClick={handleSignUpClick}
            label={flag ? "Go to Sign up" : "Sign Up"}
          />
        </AuthActionGroup>

        {flag && (
          <>
            <VeDivider mg="20px 0 0 0" />
            <AuthActionGroup>
              <GoogleLogin
                clientId="561228158715-g8dqcj35lqseg3l4231hbh60bs1kggs3.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={googleAuthSuccess}
                onFailure={googleAuthFailed}
                // uxMode="popup"
                redirectUri="http://localhost:3000"
                cookiePolicy="single_host_origin"
                render={(renderProps) => (
                  <Button
                    onClick={renderProps.onClick}
                    label={
                      <>
                        Google
                        <FcGoogle />
                      </>
                    }
                  />
                )}
              />
              <GoogleLogin
                clientId="561228158715-g8dqcj35lqseg3l4231hbh60bs1kggs3.apps.googleusercontent.com"
                buttonText="Login"
                // onSuccess={responseGoogle}
                // onFailure={responseGoogle}
                // uxMode="popup"
                redirectUri="http://localhost:3000"
                cookiePolicy="single_host_origin"
                render={() => (
                  <Button
                    onClick={handleSignUpClick}
                    label={
                      <>
                        Yahoo
                        <DiYahooSmall />
                      </>
                    }
                  />
                )}
              />
              <GoogleLogin
                clientId="561228158715-g8dqcj35lqseg3l4231hbh60bs1kggs3.apps.googleusercontent.com"
                buttonText="Login"
                // onSuccess={responseGoogle}
                // onFailure={responseGoogle}
                // uxMode="popup"
                redirectUri="http://localhost:3000"
                cookiePolicy="single_host_origin"
                render={(renderProps) => (
                  <Button
                    onClick={renderProps.onClick}
                    label={
                      <>
                        Microsoft
                        <TiVendorMicrosoft />
                      </>
                    }
                  />
                )}
              />
            </AuthActionGroup>
          </>
        )}
      </AuthDiv>
    </>
  );
};

export default Signup;
