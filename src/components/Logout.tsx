import { useAuth } from "@/hooks/auth";

const Logout = () => {
  const { logout } = useAuth();
  return (
    <div className="absolute top-5 right-2">
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
