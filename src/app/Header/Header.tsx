"use client";
import { Button } from "@/components/ui/button";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";

const buttons = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact Me",
    link: "#contact",
  },
  {
    name: "CV",
    link: "/Beth-CV.pdf",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bethany-ashcroft-5b12b3180/",
  },
];

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  return (
    <div
      className="w-screen flex justify-between items-center px-10 py-6"
      id="top"
    >
      <h1
        className={`font-greatVibes text-4xl ${greatVibes.className}`}
        role="link"
        onClick={() => {
          const topElement = document.getElementById("top");
          if (topElement) {
            topElement.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Beth
      </h1>
      <nav>
        {buttons.map((btn) => (
          <Link
            key={btn.name}
            href={btn.link}
            target={btn.name === "CV" ? "_blank" : undefined}
            rel={btn.name === "CV" ? "noopener noreferrer" : undefined}
          >
            <Button variant="link">{btn.name}</Button>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
