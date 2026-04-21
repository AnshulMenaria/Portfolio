import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr,2fr] gap-8 lg:gap-16 lg:items-start">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <div
            className="text-gray-200 text-sm lg:text-lg text-justify"
            dangerouslySetInnerHTML={{ __html: personalData.description }}
          />
        </div>
        <div className="flex justify-center order-2 lg:order-2 lg:-mt-16">
          <Image
            src={personalData.profile}
            width={350}
            height={300}
            alt="Ansul Menaria"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-[1.3] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
