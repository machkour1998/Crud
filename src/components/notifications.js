import Swal from "sweetalert2";
const successOptions = {
  type: "success",
  position: "top-right",
  toast: true,
  showConfirmButton: false,
  timer: 5000,
};
export const successNotification = (title, text, options = {}) => {
  Swal.fire({
    icon: "success",
    title: title,
    text: text,
    ...successOptions,
    ...options,
  });
};
