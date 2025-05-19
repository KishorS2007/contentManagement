import {create} from "zustand";

export const UseLoginData = create((set)=>({
    isLogin:JSON.parse(localStorage.getItem('isLogin'))||false,

    setIsLogin: (val) => {
    localStorage.setItem("isLogin", JSON.stringify(val));  
    set({ isLogin: val });
  },
}))
