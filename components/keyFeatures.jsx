import { Clock, LinkIcon, Calendar } from "lucide-react";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Feather } from "lucide-react";

const features = [
  {
    Icon: Calendar,
    id: 1,
    title: "Create Events",
    description: "Easily set up and customize your event types",
  },
  {
    Icon: Clock,
    id: 2,
    title: "Manage Availability",
    description: "Define your availability to streamline scheduling",
  },
  {
    Icon: LinkIcon,
    id: 3,
    title: "Custom Links",
    description: "Share your personalized scheduling link",
  },
];



const KeyFeatures = () => {
  return (
    <div>
      <div className="mb-24">
        <h2 className="gradient-title text-3xl text-center tracking-wider">
          Key Features
        </h2>
        <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-8">
          {features.map(({ id, title, description, Icon }) => {
            return (
              <Card key={id}>
                <CardHeader>
                  <Icon className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
                  <CardTitle className="text-blue-600">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
