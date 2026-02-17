import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";

// dijalankan di browser
export function showLoginError() {
  iziToast.error({
    title: "Login gagal",
    message: "Username atau password salah.",
    position: "topRight",
  });
}
