"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const howitWorks = [
  { id: 1, step: "Sign Up", description: "Create your free Schedulrr account" },
  {
    id: 2,
    step: "Set Availability",
    description: "Define when you're available for meetings",
  },
  {
    id: 3,
    step: "Share Your Link",
    description: "Send your scheduling link to clients or colleagues",
  },
  {
    id: 4,
    step: "Get Booked",
    description: "Receive confirmations for new appointments automatically",
  },
];

export function HowItWorks() {
  return (
    <div className="mb-24">
      <h2 className="gradient-title text-3xl text-center tracking-wider mb-5 ">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {howitWorks.map(({ id, step, description }) => (
          <div key={id} className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ">
              <span className="text-blue-600 font-bold text-xl">{id}</span>
            </div>
            <h3 className="text-semibold text-lg mb-2">{step}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
      <div className="bg-blue-600 mt-20 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to simplify your scheduling
        </h2>
        <p className="text-xl mb-6">
          Join thousands of professionals who trust schedulrr for efficient time
          management
        </p>
        <Link href={"/dashboard"}>
          <Button size="lg" variant="secondary" className="text-blue-600">
            Start For Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
