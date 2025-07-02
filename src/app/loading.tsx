import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center z-[9999]">
      <div className="relative flex items-center justify-center">
        <Image src="/brand/logo-w.png" alt="Logo" width={64} height={64} priority />
        <div className="absolute w-20 h-20 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
