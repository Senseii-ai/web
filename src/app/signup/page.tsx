import HomeLeft from "@/components/HomeLeft";
import SignupForm from "@/components/Signup";

const Signup = () => {
  return (
    <div className="h-full p-5 w-full bg-no-repeat bg-cover bg-[url('/page-bg.png')]">
      <div className="h-full rounded-lg flex lg:flex-row md:flex-col w-full">
        <div className="xl:w-1/3 lg:w-2/5 lg:block hidden rounded-l-xl bg-[#fafafa] h-full">
          <HomeLeft />
        </div>
        <div className="xl:w-2/3 lg:w-3/5 w-full rounded-r-xl h-full">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
