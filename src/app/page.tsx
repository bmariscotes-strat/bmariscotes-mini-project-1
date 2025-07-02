"use client";

import { useBodyBackground } from "./hooks/useBodyBackground";
import Image from "next/image";

export default function HomePage() {
  useBodyBackground("bg-secondary");

  return (
    <div className="h-full">
      <section className="intro h-screen overflow-hidden">
        <div className="flex flex-col text-container">
          <Image src="/brand/logo-w.png" className="logo" alt="Logo" width={1588} height={1284} />
          <p className="tag-line pt-10 text-white">Hello, {`I'm`}</p>
          <p className="text-9xl text-white">Biella!</p>

          <p className="desc text-white pt-10">A web developer and UI/UX designer.</p>
        </div>

        <div className="cloud-container">
          <Image src="/media/cloud.png" alt="Logo" width={1440} height={389} />
        </div>
      </section>
    </div>
  );
}
