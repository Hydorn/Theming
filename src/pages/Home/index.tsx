import { useTheme } from "react-jss";
import { Link } from "react-router-dom";
import FacebookLogo from "../../components/FacebookLogo";
import GoogleLogo from "../../components/GoogleLogo";
import { Login } from "./styles";

type Theme = {
  primary: string;
  secondary: string;
  tertiary: string;
};

const Home = () => {
  const theme: Theme = useTheme();
  const styles = Login({ theme });

  return (
    <div className={styles.container}>
      <div className={styles.login_container}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form_container}>
          <label className={styles.form_text}>
            Email or Username
            <input
              type="text"
              placeholder="Email or Username"
              className={styles.form_input}
            />
          </label>
          <label className={styles.form_text}>
            Insert password
            <input
              type="password"
              placeholder="Password"
              className={styles.form_input}
            />
          </label>
          <Link to={"/register"} className={styles.register_link}>
            <span>Don't have an account? Register here.</span>
          </Link>
          <button type="submit" className={styles.submit_btn}>
            Submit
          </button>
        </form>
        <div className={styles.btn_container}>
          <div className={styles.login_btn}>
            <GoogleLogo className={styles.login_logo} />
            Login with Google
          </div>
          <div className={styles.login_btn}>
            <FacebookLogo className={styles.login_logo} />
            Login with Facebook
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
