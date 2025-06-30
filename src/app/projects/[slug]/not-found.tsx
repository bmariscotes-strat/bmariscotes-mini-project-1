import Link from "next/link";
import { ReactElement } from "react";

export default function NotFound(): ReactElement {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p className="text-gray-600 mb-6">Sorry.</p>
        <Link
          href="/projects"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors inline-block"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
