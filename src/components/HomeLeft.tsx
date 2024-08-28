import { Poppins } from "next/font/google";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoRocketOutline } from "react-icons/io5";
import { ReactNode } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const poppins = Poppins({
  weight: ["100", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

const HomeLeft = () => {
  return (
    <div className="flex flex-col justify-between h-full text-black p-5">
      <div className="">
        <h1 className={`${poppins.className} text-3xl font-bold`}>
          Senseii AI
        </h1>
      </div>
      <div className="relative my-auto flex flex-col gap-y-10">
        <div className="absolute left-6 border border-gray-400 h-full"></div>
        <div className="z-10 lg:space-y-8 h-full">
          <Step
            icon={<FiUser />}
            heading={"Your details"}
            content={"Provide an email and password"}
          />
          <Step
            icon={<FaRegNoteSticky />}
            heading={"Share your Goal"}
            content={"Explain your fitness goals"}
          />
          <Step
            icon={<IoRocketOutline />}
            heading={"Get your Plans"}
            content={"Get your workout and Diet plans"}
          />
        </div>
      </div>
      <div>
        <Link href={"/login"}>
          <div className="flex border-2 border-[#087443] w-fit px-5 rounded-lg py-2 items-center gap-x-2 ">
            Login <FaLongArrowAltRight className="text-xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

const Step = ({
  icon,
  heading,
  content,
}: {
  icon: ReactNode;
  heading: string;
  content: string;
}) => {
  return (
    <div className="flex gap-x-5 items-center">
      <div className=" p-3 ring ring-gray-200 rounded-lg bg-white lg:text-2xl md:text-xl">
        {icon}
      </div>
      <div>
        <h1 className="lg:text-lg text-base font-semibold">{heading}</h1>
        <p className="text-base text-gray-900">{content}</p>
      </div>
    </div>
  );
};

export default HomeLeft;
