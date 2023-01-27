import { createContext, useContext, useEffect, useReducer } from "react";
import { useReducerAsync } from "use-reducer-async";
import Router from "next/router";
import { loginService } from "../Services/loginService";
import { toast } from "react-hot-toast";
const AuthUserProviderContext = createContext();
const AuthUserProviderContextDispatcher = createContext();
const initialState = {
  user: null,
  loading: true,
  error: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP_PENDING":
      return { ...state, loading: true };
    case "SIGNUP_SUCCESS":
      return { ...state, user: action.payload, loading: false };
    case "SIGNUP_REJECT":
      return { ...state, error: action.error, loading: false };
    case "LOGOUT_SUCCESS":
      return { ...state, user: null, error: null, loading: false };
    case "LOGIN_PENDING":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, loading: false };
    case "LOGIN_REJECT":
      return { ...state, error: action.error, loading: false };
    case "LOAD_SUCCESS":
      return { ...state, user: action.payload, loading: false };
    default:
      return { ...state };
  }
};
const asyncActionHandlers = {
  //   SIGNUP:
  //     ({ dispatch }) =>
  //     (action) => {
  //       dispatch({ type: "SIGNUP_PENDING" });
  //       RegisterUserService(action.payload)
  //         .then((res) => {
  //           const data = res.data;
  //           if (!data.status) {
  //             dispatch({ type: "SIGNUP_REJECT", payload: data });
  //             toast.error(data.result[0], {
  //               toastId: "errorSignup",
  //             });
  //           } else {
  //             dispatch({ type: "SIGNUP_SUCCESS", payload: data.result });
  //             toast.success("با موفقیت ثبت نام شدید", {
  //               toastId: "succesSignup",
  //             });
  //             localStorage.setItem("access_token", JSON.stringify(data.result));
  //             action.setModal(false);
  //             if (data.result.user.rule === "2") {
  //               Router.push("/complete");
  //             } else {
  //               Router.push("/");
  //             }
  //           }
  //         })
  //         .catch((err) => {
  //           dispatch({ type: "SIGNUP_REJECT", payload: err });
  //         });
  //     },
  LOGIN:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "LOGIN_PENDING" });
      loginService(action.payload)
        .then(({ data }) => {
          if (!data.status) {
            dispatch({ type: "LOGIN_REJECT", payload: data });
            toast.error(data.message[0]);
          } else {
            console.log(data);
            dispatch({ type: "LOGIN_SUCCESS", payload: data.response });
            toast.success("با موفقیت وارد شدید");
            localStorage.setItem("access_token", JSON.stringify(data.response));
          }
          // action.formik.setStatus(0);
        })
        .catch((err) => {
          dispatch({ type: "LOGIN_REJECT", payload: err });
          // action.formik.setStatus(0);
        });
    },
  LOAD_USER:
    ({ dispatch }) =>
    (action) => {
      const token = localStorage.getItem("access_token");
      token
        ? dispatch({ type: "LOGIN_SUCCESS", payload: JSON.parse(token) })
        : dispatch({ type: "LOGIN_REJECT", payload: "err" });
    },
  LOAD_STATUS:
    ({ dispatch }) =>
    (action) => {
      let status = action.payload.userStatus;
      let pervLocal = JSON.parse(localStorage.getItem("access_token"));
      pervLocal.user.status = status;
      dispatch({ type: "LOAD_SUCCESS", payload: pervLocal });
      localStorage.setItem("access_token", JSON.stringify(pervLocal));
    },
  LOGOUT:
    ({ dispatch }) =>
    (action) => {
      // if (action.payload) {
      //   logoutService(action.payload)
      //     .then(({ data }) => {
      //       if (!data.status) {
      //         toast.error("خروج از حساب کاربری با مشکل مواجه شد", {
      //           toastId: "errorLogout",
      //         });
      //       } else {
      //         dispatch({ type: "LOGOUT_SUCCESS", payload: null });
      //         toast.success("با موفقیت خارج شدید", {
      //           toastId: "succesLogout",
      //         });
      //         localStorage.removeItem("access_token");
      //       }
      //       Router.push("/");
      //     })
      //     .catch((err) => {
      //       if (err.response && err.response.status === 401) {
      //         console.log(err.response);
      //         localStorage.removeItem("access_token");
      //         dispatch({ type: "LOGOUT_SUCCESS", payload: null });
      //       }
      //       if (err.response) {
      //         toast.error(err.response.data.message, {
      //           toastId: "errorLogout1",
      //         });
      //       }
      //       Router.push("/");
      //     });
      // } else {
      //   dispatch({ type: "LOGOUT_SUCCESS", payload: null });
      //   toast.success("با موفقیت خارج شدید", {
      //     toastId: "succesLogout",
      //   });
      //   localStorage.removeItem("access_token");
      // }
    },
  LOGOUTNOTTOKEN:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "LOGOUT_SUCCESS", payload: null });
      localStorage.removeItem("access_token");
      Router.push("/");
    },
};
const AuthUserProvider = ({ children }) => {
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );
  useEffect(() => {
    dispatch({ type: "LOAD_USER" });
  }, []);

  return (
    <AuthUserProviderContext.Provider value={user}>
      <AuthUserProviderContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthUserProviderContextDispatcher.Provider>
    </AuthUserProviderContext.Provider>
  );
};

export default AuthUserProvider;

export const useAuth = () => useContext(AuthUserProviderContext);
export const useAuthActions = () =>
  useContext(AuthUserProviderContextDispatcher);
