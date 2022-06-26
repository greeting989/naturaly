
import React, { useState } from "react";
import { Form, Button,Alert } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGoogle, IoLogoFacebook } from "react-icons/io";
//import Login from "../components/account/Login";
import {Link,useNavigate} from "react-router-dom";
import {useUserAuth} from "../../context/Auth";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]  = useState("");
  const [sign, setSignUp] = useState(true);
  const {signUp} = useUserAuth();
  const navigate = useNavigate();
  //console.log("user",user);
  const onSubmit = async(e) => {
    e.preventDefault();
    setError("")
    try{
        //console.log(email,password);
        await signUp(email,password);
        navigate("/account");
     }catch(err){
       setError(err.message);
     }
  };
  const heading = {
    color: "#FEF9FF",
    fontSize: 36,
    textAlign: "center",
  };

  const subHeading = {
    color: "#FEF9FF",
  };
  
  return (
    <div className="accountDiv ">
      <div>
        <div className="formDiv">
          <h1 style={heading}>SignUp </h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={subHeading}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="mt-2"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={subHeading}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="mt-2"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <button type="submit" className="btnclass text-center">
              Sign Up
            </button>
          </Form>
        </div>
        <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/account">Log In</Link>
      </div>
      </div>
      
     
    </div>
  );
}

export default SignUp;
