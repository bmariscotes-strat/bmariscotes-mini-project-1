import { ReactElement } from "react";

export default function Loading(): ReactElement {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse">
        {/* Back button skeleton */}
        <div className="h-4 bg-gray-200 rounded w-32 mb-6"></div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image skeleton */}
          <div className="h-64 md:h-96 bg-gray-200"></div>

          {/* Content skeleton */}
          <div className="p-8">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="space-y-2 mb-6">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>

            {/* Info section skeleton */}
            <div className="border-t pt-6">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-3"></div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            </div>

            {/* Buttons skeleton */}
            <div className="border-t pt-6 mt-6">
              <div className="flex gap-4">
                <div className="h-10 bg-gray-200 rounded w-32"></div>
                <div className="h-10 bg-gray-200 rounded w-36"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
