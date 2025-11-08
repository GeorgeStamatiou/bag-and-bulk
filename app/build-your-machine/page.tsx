"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BuildYourMachine() {
  const [machineType, setMachineType] = useState<"Packaging" | "Mixing">(
    "Packaging"
  );
  const [selectedModel, setSelectedModel] = useState("");

  const packagingModels = [
    { name: "Rice Packaging Machine", range: "50 - 500 kg/hr" },
    { name: "Powder Filling Machine", range: "20 - 200 kg/hr" },
    { name: "Liquid Packaging Machine", range: "100 - 1000 kg/hr" },
    { name: "Granule Packaging Machine", range: "30 - 300 kg/hr" },
  ];

  const mixingModels = [
    { name: "Ribbon Mixer", range: "50 - 500 kg/hr" },
    { name: "Cone Blender", range: "20 - 200 kg/hr" },
    { name: "Double Shaft Mixer", range: "100 - 1000 kg/hr" },
    { name: "Vertical Mixer", range: "30 - 300 kg/hr" },
  ];

  const models = machineType === "Packaging" ? packagingModels : mixingModels;

  return (
    <main className="min-h-screen bg-white px-6 md:px-12 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-gray-900">
          Build Your Custom Machine
        </h1>
        <p className="text-gray-600">
          Configure your ideal packaging or mixing machine with our interactive
          builder.
        </p>
      </div>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left side */}
        <div className="flex-1 space-y-6">
          {/* Step 1 */}
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Select Machine Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex rounded-lg bg-gray-100 p-1">
                <Button
                  variant={machineType === "Packaging" ? "default" : "ghost"}
                  className="flex-1"
                  onClick={() => setMachineType("Packaging")}
                >
                  Packaging Machines
                </Button>
                <Button
                  variant={machineType === "Mixing" ? "default" : "ghost"}
                  className="flex-1"
                  onClick={() => setMachineType("Mixing")}
                >
                  Mixing Machines
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Step 2: Choose Model</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {models.map((model) => (
                  <div
                    key={model.name}
                    onClick={() => setSelectedModel(model.name)}
                    className={`border rounded-lg p-4 cursor-pointer transition 
            ${
              selectedModel === model.name
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
                  >
                    <h3 className="font-medium text-gray-800">{model.name}</h3>
                    <p className="text-sm text-gray-500">{model.range}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right side */}
        <div className="lg:w-1/3 space-y-6">
          <Card className="p-6">
            <h2 className="font-semibold text-blue-700 mb-3">
              Configuration Summary
            </h2>
            <p className="text-sm text-gray-600">
              <strong>Machine Type:</strong> {machineType}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Selected Model:</strong>{" "}
              {selectedModel ? selectedModel : "None selected"}
            </p>
          </Card>

          <div className="flex justify-center">
            <Image
              src="/images/machine.svg"
              alt="Machine illustration"
              width={250}
              height={250}
              className="drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
