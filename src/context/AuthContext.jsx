import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await api.get("/me", { withCredentials: true });
        setUser(res.data.data);
        setIsLogged(true);
      } catch (error) {
        if (error.response?.status === 401) {
          setIsLogged(false);
          setUser(null);
        } else {
          console.error("Unexpected error during /me check:", error);
          setIsLogged(false);
          setUser(null);
        }
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  const loginUser = async ({ username, password }) => {
    const res = await api.post("/login", { username, password }, { withCredentials: true });
    setUser(res.data.data);
    setIsLogged(true);
  };

  const registerUser = async ({ fullname, email, password, username }) => {
    const res = await api.post("/signup", { fullname, email, password, username }, { withCredentials: true });
    setUser(res.data.data);
    setIsLogged(true);
  };

  const logoutUser = async () => {
    await api.post("/logout", {}, { withCredentials: true });
    setUser(null);
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        user,
        loading,
        loginUser,
        logoutUser,
        registerUser,
        setIsLogged,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
