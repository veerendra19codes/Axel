import './App.css';
import Home from './Components/AllComponents/Home';
import React, { useState , useEffect , createContext} from "react";
// import { ThemeBgContext } from './Components/ContextWrapper/ThemeContext.jsx';

export const ThemeContext = createContext(null);

function App() {

  //storing in local storage
  const storage = JSON.parse(localStorage.getItem("theme"));

  const [theme, setTheme] = useState(storage);

  useEffect(() => {
      localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
      if (storage) {
          setTheme((prev) => (prev === "light" ? "dark" : "light"));
      } else {
          setTheme((prev) => (prev === "light" ? "dark" : "light"));
      }
  }

  return (
      <ThemeContext.Provider value={{theme, setTheme,toggleTheme}}>
     <div className="App m-0 p-0 w-full" > 
            <Home></Home>
         </div> 
       </ThemeContext.Provider>
  );
}

export default App;
