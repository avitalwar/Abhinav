// import "./login.css";
import { BsFillMoonStarsFill, BsCircleFill } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import logo from "./IMG_4284.PNG";
import { useState } from "react";

function Login() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : '' }>
      <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-5 flex justify-between">
            <h1 className="font-Caveta text-2xl dark:text-white">
              Abhinav<span className="text-teal-500">T.</span>
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer mr-3 dark:fill-white" onClick={()=>setDarkMode(!darkMode)}/>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-tr from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-3"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-4xl py-2 text-teal-500 font-medium md:text-6xl ">
              Hi. I'm Abhinav
            </h2>
            <h3 className="py-2 text-2xl md:text-3xl dark:text-white">Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              Sed enim ut sem viverra aliquet eget sit amet tellus cras
              adipiscing enim eu turpis egestas pretium aenean pharetra magna
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500">
            <a href="https://instagram.com/abhinav_talwar_?igshid=YmMyMTA2M2Y=">
              <AiFillInstagram />
            </a>
            <a>
              <AiFillLinkedin />
            </a>
            <a>
              <AiFillTwitterCircle />
            </a>
          </div>
          <div className="mx-auto mt-20 bg-gradient-to-b from-teal-500 rounded-full h-80 w-80 overflow-hidden md:w-96 md:h-96">
            <img src={logo} />
          </div>
        </section>

        <section>
          <div className="text-center mb-10 mt-12">
            <h3 className="text-3xl dark:text-white">Professional Experiences</h3>

            <div className="lg:flex gap-10 pb-7">
              <div className="text-center shadow-lg rounded-lg p-5 my-7 lg:w-1/2 dark:bg-white">
                <h4 className="text-2xl py-2">Software Engineer</h4>
                <h6 className="pb-5">
                  Oct 2021 - Present |{" "}
                  <span className="text-teal-500 text-lg font-medium">
                    Xoriant
                  </span>
                  , Pune
                </h6>
                <div className="py-2 text-md leading-6 text-gray-800">
                  Worked on payment domain, which includes SWIFT, ISO 20022,
                  andGPP.
                </div>
                <div className="py-2 text-md leading-6 text-gray-800">
                  Analyzed information to determine, recommend and plan
                  installation of new system and modification of existing
                  system.
                </div>
                <div className="py-2" text-md leading-6 text-gray-800>
                  Met deadlines while maintaining high-quality deliverables.
                </div>
              </div>

              <div className="text-center shadow-lg rounded-lg p-5 my-7 lg:w-1/2 dark:bg-white">
                <h4 className="text-2xl py-2">ReactJS Trainee</h4>
                <h6 className="pb-5">
                  Mar 2021 - Sep 2021 |{" "}
                  <span className="text-teal-500 text-lg font-medium">
                    Mobile Programming
                  </span>
                  , Mohali, Punjab
                </h6>
                <div className="py-2 text-md leading-6 text-gray-800">
                  Worked on different components of the website
                </div>
                <div className="py-2 text-md leading-6 text-gray-800">
                  Involved in API testing
                </div>
                <div className="py-2 text-md leading-6 text-gray-800">
                  Prepared reports or correspondence concerning project
                  specifications, activities or status.
                </div>
                <div className="py-2 text-md leading-6 text-gray-800">
                  Made wireframes on Figma
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;

// dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
