
import { SocialIcon } from "react-social-icons"

export default function Footer() {

  return (

<div className="flex flex-col p3 opacity-60">
  <div className=" relative p3">

    <div className="text-[16px]">
      CRAIG PARFITT - 0786 656 2170
    </div>

      <div className="text-[14px] font-bold">
          Web Application Designed & built using:
     </div>
     <div className="font-extralight">
       Pen & Paper - Adobe Photoshop, XD, MediaEncoder and  - Next.js 13 (Framework) - Sanity (Headless CMS), Videos and Images served from Cloudinary - Deployed on Vercel.
    </div>
    <div>
         To view a larger selection of projects including:
     </div>

     <div className="font-extralight">
     Branding, Packaging, Print and Web Applications Visit -
       <a className="opacity-80 hover:opacity-100 transition duration-300"
         href="https://craigsteel-design.com/"> www.craigsteel-design.com
       </a>
     </div>

     <div className="flex space-x-5 py-5">
      <SocialIcon
        url="https://github.com/craigsteel/csportfolio"
        target="_blank"
        rel="noopener noreferrer"
        style={
          {
            height: 30,
            width: 30,
          }
        }>
      </SocialIcon>

      <SocialIcon
        url="https://twitter.com/home"
        target="_blank"
        rel="noopener noreferrer"
        style={{ height: 30, width: 30 }}>
      </SocialIcon>
     </div>
  </div>
  </div>
  )
}

