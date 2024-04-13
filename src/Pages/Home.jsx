import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="max-w-[1204px] px-4 mx-auto font-poppins pb-12">
      <div id="About" className="flex ">
        <div className="mt-16 max-w-[700px] ">
          <h1 className="text-3xl">
            "Health is not just the absence of illness, but the presence of
            vitality and well-being."
          </h1>
          <h1 className="text-3xl font-bold m-8">
            Transforming Healthcare with AI: Personalized Diagnoses & Expert
            Guidance
          </h1>
          <h1 className="text-xl m-8">
            Experience the future of healthcare with our AI-powered symptom
            diagnosis and personalized recommendations. Take control of your
            health journey with us <span className="bg-yellow-300">Today.</span>
          </h1>
          <button className="m-8 mt-4 w-60 px-4 py-2 bg-black text-white hover:opacity-70 rounded">
            Learn More
          </button>
        </div>
        <img
          src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2023/04/2484387-7-Best-Stethoscopes-of-2023-1296x728-Header-acc919-1024x575.jpg"
          alt="img"
          className="h-52 mt-32 mx-auto"
        />
      </div>

      <div className="relative w-full mt-2">
        <div
          className="absolute inset-0 bg-cover opacity-15"
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg")',
          }}
        ></div>
        <div className="relative p-4">
          <h1 className="text-3xl font-bold pt-16">What We Provide ?</h1>
          <div className=" flex items-center max-w-[700px]">
            <p className="text-5xl font-lobster">1.</p>
            <h2 className="text-xl mt-4 hover:bg-stone-200 rounded py-2 pl-3 pr-2 ">
              Receive instant, personalized diagnoses based on your symptoms.
              Our AI quickly analyzes your symptoms and medical history to
              provide accurate insights, empowering informed health decisions.
            </h2>
          </div>
          <div className=" flex items-center md:mr-0 ml-auto  max-w-[700px]">
            <p className="text-5xl">2.</p>
            <h2 className="text-xl mt-4 hover:bg-stone-200 rounded p-2 pl-3 pr-2 ">
              Benefit from recommendations tailored to your unique health
              profile. Whether it's self-care advice or specialized treatment
              options, our app suggests precise next steps based on your medical
              background, ensuring proactive and optimal care.
            </h2>
          </div>
          <div className=" flex items-center max-w-[700px]">
            <p className="text-5xl">3.</p>
            <h2 className=" text-xl mt-4 hover:bg-stone-200 rounded p-2 pl-3 pr-2 ">
              Easily connect with healthcare experts for further assistance. Our
              app bridges AI-driven diagnosis with human expertise, allowing you
              to transition from self-care to professional guidance
              effortlessly, ensuring comprehensive healthcare support.
            </h2>
          </div>
        </div>
      </div>
      <div id="pricing" className="mt-16">
        <h1 className="text-2xl font-bold">Digital Healthcare Subscriptions</h1>
        <div className="flex items-center md:flex-row justify-around my-4 min-w-[766px] max-w-[800px] mx-auto">
          <div className="border-2 rounded-sm w-80 p-2 m-2">
            <div className="py-8 px-4">
              <p className="text-2xl">Basic Subscription</p>
              <p className="flex items-center text-xl">
                <FaRupeeSign />
                2999
              </p>
            </div>
            <div className="border-t-2 mx-auto w-72  flex flex-col items-center">
              <p className="flex items-center justify-between pt-4">
                <FaArrowAltCircleRight className="text-3xl" />
                <span className="p-1.5">
                  Personalized recommendations based on your symptoms
                </span>
              </p>
              <p className="flex items-center justify-between">
                <FaArrowAltCircleRight className="text-lg" />
                <span className="p-1.5">Connect with a healthcare expert</span>
              </p>
              <p className="flex items-center justify-between">
                <FaArrowAltCircleRight className="text-2xl" />
                <span className="pl-1.5 pb-4">
                  Real-time updates and intuitive interface
                </span>
              </p>
              <button className="mx-auto mt-4 w-52 px-4 py-2 bg-black text-white hover:opacity-50 rounded">
                Learn more about Basic
              </button>
            </div>
          </div>
          <div className="border-2 rounded-sm w-80 p-2 m-2">
            <div className="py-8 px-4">
              <p className="text-2xl">Premium Subscription</p>
              <p className="flex items-center text-xl">
                <FaRupeeSign />
                5999
              </p>
            </div>
            <div className="border-t-2 mx-auto w-72  flex flex-col items-center">
              <p className="flex items-center justify-between pt-4">
                <FaArrowAltCircleRight className="text-3xl" />
                <span className="p-1.5">
                  Personalized recommendations based on your symptoms
                </span>
              </p>
              <p className="flex items-center justify-between">
                <FaArrowAltCircleRight className="text-lg" />
                <span className="p-1.5">Connect with a healthcare expert</span>
              </p>
              <p className="flex items-center justify-between">
                <FaArrowAltCircleRight className="text-2xl" />
                <span className="pl-1.5 pb-4">
                  Real-time updates and intuitive interface
                </span>
              </p>
              <button className="mx-auto mt-4 w-60 px-4 py-2 bg-black text-white hover:opacity-50 rounded">
                Learn More about Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
