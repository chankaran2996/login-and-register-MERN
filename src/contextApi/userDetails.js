import { createContext, useContext, useState } from "react";

const TokenContext = createContext(null);

function TokenProvider({ children }) {
  const [token, setToken] = useState(null);

  function updateToken(newToken) {
    setToken(newToken);
  }

  return (
    <TokenContext.Provider value={{ token, updateToken }}>
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

export { TokenProvider, useToken };
