import Swal from "sweetalert2";

export default {
    getFromStorage: (item) => localStorage.getItem(item),
    saveToStorage: (item, value) => localStorage.setItem(item, value),
    getToken: () => localStorage.getItem('token'),
    saveToken: (token) => localStorage.setItem('token', token),
    removeToken: () => localStorage.removeItem('token'),
    toast(msg, status="success") {
        Swal.fire({
            position: 'top-end',
            icon: status !== "error" ? status : "error",
            title: msg,
            showConfirmButton: false,
            timer: 2500,
            toast: true
        })
    },

    loadCSS: (stylesheets) => {
        stylesheets.forEach(function(stylesheet) {
            let head = document.getElementById('head');
            let the_style = document.createElement('link');
            the_style.rel = "stylesheet";
            the_style.type = "text/css";
            the_style.href = stylesheet;

            head.appendChild(the_style);
        });
    },

    loadScripts: (scripts) => {
        scripts.forEach(function(script) {
            let body = document.getElementById('body');
            let the_script = document.createElement('script');
            the_script.src = script;
            the_script.async = "true";

            body.appendChild(the_script);
        });
    }
}