import React from "react";
import { createUseStyles, useTheme } from "react-jss";
const ThemeToggleStyles = createUseStyles({
  themeButton: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: "15px 0 0 15px",
    backgroundColor: "#333",
    color: "white",
    fontSize: "1.5rem",
    padding: "1rem",
    borderRadius: "5px",

    "&:hover": {
      opacity: 0.8,
      cursor: "pointer",
    },
  },
});

type ThemeToggleProps = {
  changeTheme: Function;
  theme: string;
};
const ThemeToggle: React.FC<ThemeToggleProps> = ({ changeTheme, theme }) => {
  const styles = ThemeToggleStyles();
  const handleClick = () => {
    console.log(theme);
    changeTheme((prev: string) => {
      if (prev === "light") return "dark";
      else return "light";
    });
  };
  return (
    <div className={styles.themeButton} onClick={handleClick}>
      {`${theme} mode`}
    </div>
  );
};
export default ThemeToggle;
