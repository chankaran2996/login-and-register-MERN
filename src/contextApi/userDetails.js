import { createContext, useContext, useState } from "react";

const TokenContext = createContext(null);

function TokenProvider({ children }) {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  function updateToken(newToken) {
    setToken(newToken);
  }

  function updateEmail(email) {
    setEmail(email);
  }

  return (
    <TokenContext.Provider value={{ token, updateToken, email, updateEmail }}>
      {children}
    </TokenContext.Provider>
  );
}

function useToken() {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
}

function useEmail() {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useEmail must be used within a TokenProvider");
  }
  return context;
}

export { TokenProvider, useToken, useEmail };
