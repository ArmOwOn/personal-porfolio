"use client";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import TelegramIcon from "../public/telegram-icon.svg";
import MailIcon from "../public/mail-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="flex my-[200px] relative justify-center content-center text-center"
    >
      <div className=" flex flex-col max-w-[600px]">
        <div className="z-10">
          <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
          <p className="text-[#ADB7BE] mb-4 ">
            {" "}
            I&apos;m currently looking for new opportunities, my inbox is always open. Whether you
            have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2"></div>
        </div>
        <div className="flex fap-5 justify-evenly">
          <Link href="https://github.com/ArmOwOn" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" className="w-[40px] h-[40px]" />
          </Link>
          <Link href="https://www.linkedin.com/in/armaan-seydi-62350b293" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-[40px] h-[40px]" />
          </Link>
          <Link href="https://t.me/armowon." target="_blank">
            <Image src={TelegramIcon} alt="Telegram Icon" className="w-[35px] h-[35px]" />
          </Link>
          <Link href="mailto:armaanseydi@gmail.com" target="_blank">
            <Image src={MailIcon} alt="Linkedin Icon" className="w-[35px] h-[35px]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
