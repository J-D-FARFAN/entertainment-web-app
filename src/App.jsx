import { useState } from "react";
import "./App.css";
import { HomeEntertainmentApp } from "./assets/components/home";
import { LoginEntertainmentApp } from "./assets/components/login";

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  const handleLoginSuccess = () => setisAuthenticated(true);

  return (
    <>
      {isAuthenticated ? (
        <div className="content__allHomeEntertaimentApp">
          <HomeEntertainmentApp />
        </div>
      ) : (
        <div className="content__allLoginEntertainmentApp">
          <LoginEntertainmentApp onLoginSuccess={handleLoginSuccess} />
        </div>
      )}
    </>
  );
}

export default App;
