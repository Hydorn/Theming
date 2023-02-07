import { createUseStyles, useTheme } from "react-jss";

const $white = "#f4f4f4";
const $black = "#333";
type Theme = {
  primary: string;
  secondary: string;
  tertiary: string;
};
export const Login = createUseStyles((theme: Theme) => ({
  title: {
    "margin-bottom": "2rem",
    "text-align": "center",
    "text-transform": "uppercase",
    "font-size": "3rem",
  },

  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.primary,
  },

  login_container: {
    color: "black",
    "background-color": theme.secondary,
    "border-radius": "5px",
    "box-shadow": "0 2px 1rem #00000030",
    width: "50rem",

    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    padding: "2rem",
  },

  form_container: {
    width: "80%",
  },

  form_input: {
    padding: "1.2rem",
    margin: "5px 0 1rem 0",
    width: "100%",
    display: "block",
    border: "1px solid #ccc",
  },

  form_text: {
    color: theme.tertiary,
    width: "100%",
  },

  submit_btn: {
    width: "100%",
    margin: "1.5rem 0",
    padding: "1.2rem",
    "background-color": theme.secondary,
    border: "1px solid #ccc",
    cursor: "pointer",
    "font-size": "1.7rem",
    transition: "all 0.3s ease-in",
    "&:hover": {
      "background-color": theme.tertiary,
      color: theme.secondary,
      opacity: 0.8,
    },
  },

  login_logo: {
    height: "2rem",
    width: "2rem",
    "margin-right": "5px",
  },

  login_btn: {
    width: "100%",
    "margin-top": "1.5rem",
    padding: "1.2rem 0",
    "font-size": "1.5rem",
    transition: "all 0.3s ease-in",

    border: "solid 1px #ccc",

    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    cursor: "pointer",

    "&:hover": {
      "background-color": theme.tertiary,
      color: theme.secondary,
      opacity: 0.8,
    },
  },

  btn_container: {
    "border-top": "1px solid #ccc",
    display: "flex",
    "flex-direction": "column",
    width: "80%",
  },

  register_link: {
    display: "block",
    "text-align": "center",
    "font-size": "1.2rem",
    "margin-bottom": "2rem",
  },
}));
