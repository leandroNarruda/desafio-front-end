import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

/*
opções
toast.success
toast.warn
toast.error
toast.info
*/

export const notifyError = (error) =>
  toast.error(error, {
    autoClose: 2000,
    hideProgressBar: true,
    position: "top-center",
});

export const notifyErrorLogin = () =>
  toast.error("Usuário e/ou senha incorretos!", {
    autoClose: 2000,
    hideProgressBar: true,
    position: toast.POSITION.TOP_CENTER,
});

export const notifyGenericSuccess = (msg) =>
  toast.success(msg, {
    autoClose: 2000,
    hideProgressBar: true,
    position: "top-center",
});
