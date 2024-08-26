import LoginForm from "@/components/LoginForm";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex items-center h-full justify-center rounded-lg ">
      <div className="grid grid-cols-2 grid-rows-1 rounded-lg">
        <Image
          className="rounded-l-lg"
          src={"/login-pattern.jpg"}
          width={400}
          height={400}
          alt="design pattern"
        />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
