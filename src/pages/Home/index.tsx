import { useTheme } from "react-jss";
import { Link } from "react-router-dom";
import { Login } from "./styles";
import { useForm } from "react-hook-form";

type Theme = {
  primary: string;
  secondary: string;
  tertiary: string;
};
type FormTypes = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};
const Home = () => {
  const theme: Theme = useTheme();
  const styles = Login({ theme });

  const { register, handleSubmit } = useForm<FormTypes>();
  const onSubmit = (data: FormTypes) => console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.login_container}>
        <h1 className={styles.title}>Register</h1>
        <form
          className={styles.form_container}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className={styles.form_text}>
            Email
            <input
              type="text"
              placeholder="Email"
              className={styles.form_input}
              {...register("email")}
            />
          </label>
          <label className={styles.form_text}>
            User Name
            <input
              type="text"
              placeholder="User Name"
              className={styles.form_input}
              {...register("username")}
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
          <label className={styles.form_text}>
            Repeat password
            <input
              type="password"
              placeholder="Password"
              className={styles.form_input}
              {...register("repeatPassword")}
            />
          </label>
          <Link to={"/login"} className={styles.register_link}>
            <span>Already have an account? Login here.</span>
          </Link>
          <button type="submit" className={styles.submit_btn}>
            Submit
          </button>
        </form>
        {/*<div className={styles.btn_container}>
          <div className={styles.login_btn}>
            <GoogleLogo className={styles.login_logo} />
            Login with Google
          </div>
          <div className={styles.login_btn}>
            <FacebookLogo className={styles.login_logo} />
            Login with Facebook
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default Home;
