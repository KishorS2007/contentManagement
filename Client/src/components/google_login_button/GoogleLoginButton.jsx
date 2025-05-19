// src/components/GoogleLoginButton.jsx
import { useEffect, useRef } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom"
import { UseLoginData } from "../../store/UseLoginData";

export default function GoogleLoginButton(){
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const setIsLogin = UseLoginData((state)=>state.setIsLogin);
  useEffect(() => {
    if (window.google && buttonRef.current) {
      window.google.accounts.id.initialize({
        client_id: "493873301099-v4ca2fikmo5jb1g2ecgtgk9j4ulqmkaq.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(buttonRef.current, {
        theme: "outline",
        size: "large",
      });
    }
  }, []);

  const handleCredentialResponse = (response) => {
    const userObject = jwtDecode(response.credential);
    // console.log("User Info:", userObject);
    setIsLogin(true);
    navigate("/home");
  };

  return <div className="flex justify-center  mt-5" role="button"  ref={buttonRef} ></div>;
}
