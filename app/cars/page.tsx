"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";
import { CarCard } from "@/components/car-card";
import { Car } from "@/types/car";

export default function CarsPage() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    API.get("/cars").then((res) => setCars(res.data));
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}