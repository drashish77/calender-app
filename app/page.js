import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-14">
        <div className="lg:w-1/2">
          <h1 className="text-7xl font-extrabold pb-6 gradient-title">
            Simplify Your Scheduling
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Our scheduler help you manage your time effectively, create events,
            set your availibility, and let other book time with you seamlessly.
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="relative w-full aspect-square max-w-md">
            <Image
              src="/meeting.svg"
              alt="dec"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
