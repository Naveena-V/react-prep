import { useAuth } from "./authContext";

export default function AuthStatus() {
  const { isAuthenticated, login, logout, userName, addUserName } = useAuth();

  const handleLogin = () => {
    login(true);
    addUserName("Json");
  };
  const handleLogout = () => {
    logout(false);
    addUserName(null);
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>Welcome, {userName}</div>
      ) : (
        <div>Please login to your account</div>
      )}
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}
