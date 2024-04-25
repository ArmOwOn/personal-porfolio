"use client";
import Image from "next/image";
import React from "react";

const TechStackSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-wrap justify-center sm:justify-between">
        <div className="flex flex-col items-center sm:w-auto w-1/3 mb-4 sm:mb-0">
          <Image src="logos/javascript.svg" alt="JavaScript Logo" width={50} height={50} />
          <span className="mt-2">JavaScript</span>
        </div>
        <div className="flex flex-col items-center sm:w-auto w-1/3 mb-4 sm:mb-0">
          <Image src="logos/typescript.svg" alt="TypeScript Logo" width={50} height={50} />
          <span className="mt-2">TypeScript</span>
        </div>
        <div className="flex flex-col items-center sm:w-auto w-1/3 mb-4 sm:mb-0">
          <Image src="logos/html.svg" alt="HTML Logo" width={50} height={50} />
          <span className="mt-2">HTML</span>
        </div>
        <div className="flex flex-col items-center sm:w-auto w-1/3 mb-4 sm:mb-0">
          <Image src="logos/css.svg" alt="CSS Logo" width={50} height={50} />
          <span className="mt-2">CSS</span>
        </div>
        <div className="flex flex-col items-center sm:w-auto w-1/3 mb-4 sm:mb-0">
          <Image src="logos/redux.svg" alt="Redux Logo" width={50} height={50} />
          <span className="mt-2">Redux</span>
        </div>
        <div className="flex flex-col items-center sm:w-auto w-1/3 mb-4 sm:mb-0">
          <Image src="logos/sass.svg" alt="Sass Logo" width={50} height={50} />
          <span className="mt-2">Sass</span>
        </div>
        <div className="flex flex-col items-center sm:w-auto w-1/3 mb-4 sm:mb-0">
          <Image src="logos/tailwind.svg" alt="Tailwind Logo" width={50} height={50} />
          <span className="mt-2">Tailwind</span>
        </div>
        <div className="flex flex-col items-center sm:w-auto w-1/3 mb-4 sm:mb-0">
          <Image src="logos/material-ui.svg" alt="Material UI Logo" width={50} height={50} />
          <span className="mt-2">Material UI</span>
        </div>
        <div className="flex flex-col items-center sm:w-auto w-1/3 mb-4 sm:mb-0">
          <Image src="logos/git.svg" alt="Git Logo" width={50} height={50} />
          <span className="mt-2">Git</span>
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
