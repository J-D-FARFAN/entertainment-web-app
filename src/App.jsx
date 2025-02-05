import { useState } from "react";
import "./App.css";
import { HomeEntertainmentApp } from "./assets/components/home";
import { LoginEntertainmentApp } from "./assets/components/login";

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  const handleLoginSuccess = () => setisAuthenticated(true);

  return (
    <>
      {/*isAuthenticated ? (
        <HomeEntertainmentApp />
      ) : (
        <LoginEntertainmentApp onLoginSuccess={handleLoginSuccess} />
      )*/}

      <HomeEntertainmentApp />
    </>
  );
}

export default App;
