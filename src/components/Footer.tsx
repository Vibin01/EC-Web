// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaYoutube, FaMediumM } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0074FF] text-white text-[14px] xl:text-[20px] pt-[5%] pb-12 px-6">
      <div className="flex xl:flex-row flex-col-reverse- justify-center items-center xl:justify-between xl:px-[3%]  mx-auto">
        <div className=" w-[100%] hidden  xl:w-1/4- md:flex flex-wrap_- flex-row justify-center  md:justify-evenly lg:grid grid-cols-1 lg:grid-cols-4  gap-8">
          {/* Employer Links */}
          <div className=" mt-10 xl:mt-0">
            <img src="/Connect_EC_Logo.png" alt="Logo" className="h-16 mb-4" />
            <p className="mt-4 ">
              155/201, Kamarajapuram,
              <br />
              Nungambakkam, Chennai – 600 034
              <br />
              Tamil Nadu
            </p>
            <p className="mt-4 ">Phone : +91 9499045981</p>
            <p className="">Email : connect@primethic.com</p>
          </div>
          <div>
            <h3 className="font-normal text-[28px] xl:text-[32px] 2xl:text-[40px] mb-3">
              Employer
            </h3>
            <ul className="space-y-2 ">
              <li>Interview Scheduling Software</li>
              <li>Recruiter Motivation System (RMS)</li>
              <li>Applicant Transformation System (ATS)</li>
              <li>Post Offer Engagement Platform</li>
              <li>Candidate Survey Platform</li>
            </ul>
          </div>

          {/* Candidate Links */}
          <div>
            <h3 className="font-normal text-[28px] xl:text-[32px] 2xl:text-[40px] mb-3">
              Candidate
            </h3>
            <ul className="space-y-2 ">
              <li>Gamified Hiring Platform</li>
              <li>Job Search Platform</li>
              <li>Interview Experience Exhilarator</li>
              <li>Company Review Platform</li>
              <li>HonesTalent League</li>
            </ul>
          </div>

          {/* Recruiter Links */}
          <div>
            <h3 className="font-normal text-[28px] xl:text-[32px] 2xl:text-[40px] mb-3">
              Recruiter
            </h3>
            <ul className="space-y-2 ">
              <li>Job Posting Platform</li>
              <li>Feedback Management Platform</li>
              <li>Talent Engagement Platform</li>
              <li>Candidate Experience Platform</li>
              <li>RockstaRecruiter League</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end pl-[2%] py-4">
        <div className="sm:w-[100%] lg:w-3/4  border-t border-[#FFFFFF] my-8"></div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-row justify-center md:justify-between ">
        <div className="2xl:flex hidden w-1/4 "></div>

        <div className="2xl:w-3/4 2xl:pl-[2%] grid grid-cols-1 md:grid-cols-3  gap-8">
          <div className="flex justify-center 2xl:justify-start gap-2">
            <img src="/app-logo.png" alt="Google Play" className="h-10" />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center 2xl:justify-start gap-6 text-2xl">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaMediumM />
          </div>

          {/* Footer Links */}
          <div className="text-[16px] xl:text-[18px] flex-- justify-center-- 2xl:justify-end-- font-medium space-x-3">
            <a href="#">About us</a>| <a href="#">Careers</a>|{" "}
            <a href="#">Terms & Conditions</a>| {""}
            <br className="hidden 2xl:block" />
            <a href="#">Privacy Policy</a>| <a href="#">FAQs</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-[16px] 2xl:text-[18px] xl:text-20 font-normal mt-6">
        © Copyright Primethic Private Limited {new Date().getFullYear()}. All
        Rights Reserved.
      </p>
    </footer>
  );
}
