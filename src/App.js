import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Welcome from "./Pages/Welcome";
export const CredentialContext = React.createContext()
function App() {
  const credentialState = useState(null)
  return (
    <div className="">
      <CredentialContext.Provider value={credentialState}>
        <Routes>

          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </CredentialContext.Provider>

    </div>
  );
}

export default App;
