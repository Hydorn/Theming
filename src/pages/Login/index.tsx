import { useForm } from "react-hook-form";
import { useTheme } from "react-jss";
import { Link } from "react-router-dom";
import { Login as MyStyles } from "../Home/styles";

type Theme = {
  primary: string;
  secondary: string;
  tertiary: string;
};
type loginFormTypes = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const Login = () => {
  const theme: Theme = useTheme();
  const styles = MyStyles({ theme });

  const { register, handleSubmit } = useForm<loginFormTypes>();
  const onSubmit = (data: loginFormTypes) => console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.login_container}>
        <h1 className={styles.title}>Login</h1>
        <form
          className={styles.form_container}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className={styles.form_text}>
            Email or UserName
            <input
              type="text"
              placeholder="Email"
              className={styles.form_input}
              {...register("email")}
            />
          </label>

          <label className={styles.form_text}>
            Insert password
            <input
              type="password"
              placeholder="Password"
              className={styles.form_input}
              {...register("password")}
            />
          </label>
          <Link to={"/"} className={styles.register_link}>
            <span>Don't have an account? Register here.</span>
          </Link>
          <button type="submit" className={styles.submit_btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
