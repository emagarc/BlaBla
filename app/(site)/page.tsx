import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="
      flex
      min-h-full
      flex-col
      justify-center
      py-12
      sm:px-6
      lg:px-8
      bg-gray-100
      bg-home-image
      "
    >
      <div 
        className="
        sm:mx-auto 
        sm:w-full 
        sm:max-w-md
        "
      >
        <div 
          className="
            mb-2 rounded-full 
            overflow-hidden
            "
          >
            <Image 
            alt="Logo"
            height={65}
            width={65}
            className="mx-auto w-auto"
            src="/images/logo3.png"
            />
          </div>
          <div
            className="
            bg-white px-4 
            py-0 shadow 
            sm:rounded-lg 
            sm:px-10
            "
          >
            <h2 
              className="
                mt-6
                text-center
                text-3xl
                text-black
                font-bold
                tracking-tight
                bg-white
              "
            >
              Sign in to your account
            </h2>
          </div>
      </div>
      <AuthForm />
  </div>
  )
}
