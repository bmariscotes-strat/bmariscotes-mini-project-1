"use client";

import Image from "next/image";
import { useRoughNotation } from "../../hooks/useRoughNotation";
import { Button } from "@/components/ui/Button";

// Main component
export default function About() {
  const { elementRef, handleMouseEnter, handleMouseLeave } = useRoughNotation();

  const handleResumeClick = () => {
    window.open("files/Resume.pdf", "_blank");
  };

  return (
    <section className="pt-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="w-60 md:w-90">
            <Image
              src="/media/image-self.png"
              alt="Biella's profile picture"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="bg-white">
          <div className="light-green-background">
            <div className="profile-card">
              <h1 className="title">
                Hi, the name is <span className="highlight">Biella</span> ♡
              </h1>
              <p className="text-lg mb-6">
                I design and{" "}
                <span
                  ref={elementRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="cursor-pointer text-green-600 font-medium"
                >
                  develop
                </span>{" "}
                web applications.
              </p>

              <div className="text-base space-y-2 mb-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec aliquam orci. Donec mollis maximus
                  egestas. Aliquam viverra mi et tortor iaculis gravida eget ut ipsum. Integer faucibus metus nec purus
                  molestie, at ornare enim blandit. Ut vitae dui iaculis, cursus orci vel, maximus nulla.{" "}
                </p>
              </div>

              <Button variant="accent" onClick={handleResumeClick}>
                See Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
