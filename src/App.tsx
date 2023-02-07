import { useState } from "react";
import { ThemeProvider } from "react-jss";
import ThemeToggle from "./components/ThemeToggle";
import Navigate from "./Navigate";
import { theme } from "./Styles/theme";

const App = () => {
  const [dark, setDark] = useState("light");

  const themeSelector = (theme: any) => {
    if (dark === "dark") return theme.dark;
    else return theme.light;
  };

  return (
    <ThemeProvider theme={themeSelector(theme)}>
      <>
        <ThemeToggle
          changeTheme={setDark}
          theme={dark === "dark" ? "Light" : "Dark"}
        />
        <Navigate />
      </>
    </ThemeProvider>
  );
};

export default App;
