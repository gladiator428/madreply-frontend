import React, { useState } from "react";
// import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import Input from "components/Input/Input";
import {
  AuthDiv,
  AuthTitle,
  AuthFormGroup,
  AuthActionGroup,
  AuthAction,
} from "./signin.style";
import { VeDivider } from "layouts/layout.style";
import { Button } from "components/Button";
import { validationSignIn } from "utils/validation";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import { DiYahooSmall } from "react-icons/di";
import { TiVendorMicrosoft } from "react-icons/ti";
import { signIn } from "actions/user.action";
// import gmailApi from "react-gmail";
// const gmailApi = dynamic(() => import("react-gmail"), { ssr: false });
// import router from "next/router";
// import BG from "assets/images/bg/bg.png";

const SignIn = () => {
  const [state, setState] = useState<any>({ email: "", password: "" });
  const [flag, setFlag] = useState(true);

  const handleInputChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSignIn = () => {
    // if (validationSignIn(state) !== "success") {
    //   toast.error(validationSignIn(state), {
    //     theme: "colored",
    //   });
    // } else {
    //   localStorage.setItem("isAuthenticated", "true");
    //   router.push("/home");
    //   // toast.success(validationSignIn(state), {
    //   //   theme: "colored",
    //   // });
    // }

    signIn("as");
  };

  const googleAuthSuccess = (res: any) => {
    const userInfo = res.profileObj;
    setState({
      ...state,
      email: userInfo.email,
    });
    setFlag(false);
  };
  const googleAuthFailed = (err: any) => {
    toast.error("Google Authentication Failed", {
      theme: "colored",
    });
  };

  return (
    // <AuthPage>
    //   <Image src={BG} layout="fill" objectFit="cover" />
    //   <ToastContainer autoClose={3000} />
    //   <OverLayout>
    <>
      <ToastContainer autoClose={3000} />
      <AuthDiv>
        <AuthTitle>Sign In</AuthTitle>
        <AuthFormGroup>
          <Input
            label="Email"
            type="email"
            value={state.email}
            onChange={handleInputChange}
            placeholder="Email"
            name="email"
            disabled={!flag}
          />
          {!flag && (
            <Input
              label="Password"
              type="password"
              value={state.password}
              onChange={handleInputChange}
              placeholder="Password"
              name="password"
            />
          )}
        </AuthFormGroup>
        {!flag && (
          <>
            <VeDivider mg="20px 0 0 0" />
            <AuthActionGroup>
              <AuthAction>Forgot password?</AuthAction>
              {/* <AuthAction
            onClick={() => {
              router.push("/signup");
            }}
          >
            Create new account
          </AuthAction> */}
            </AuthActionGroup>
          </>
        )}
        <VeDivider mg="20px 0 0 0" />
        <AuthActionGroup>
          <Button onClick={handleSignIn} label="Sign In" />
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
                    onClick={handleSignIn}
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
    //   </OverLayout>
    // </AuthPage>
  );
};

export default SignIn;
