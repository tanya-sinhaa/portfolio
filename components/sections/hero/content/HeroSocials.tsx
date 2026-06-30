import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import { heroData } from "@/data/hero";

export default function HeroSocials() {
  return (
    <div className="mt-10 flex items-center gap-5">

      <a
        href={heroData.socials.github}
        target="_blank"
        className="transition-all duration-300 hover:-translate-y-1 hover:text-[var(--color-primary)]"
      >
        <FaGithub size={22} />
      </a>

      <a
        href={heroData.socials.linkedin}
        target="_blank"
        className="transition-all duration-300 hover:-translate-y-1 hover:text-[var(--color-primary)]"
      >
        <FaLinkedin size={22} />
      </a>

      <a
        href={heroData.socials.email}
        className="transition-all duration-300 hover:-translate-y-1 hover:text-[var(--color-primary)]"
      >
        <FaEnvelope size={22} />
      </a>

      <a
        href={heroData.socials.leetcode}
        target="_blank"
        className="transition-all duration-300 hover:-translate-y-1 hover:text-[var(--color-primary)]"
      >
        <SiLeetcode size={20} />
      </a>

    </div>
  );
}