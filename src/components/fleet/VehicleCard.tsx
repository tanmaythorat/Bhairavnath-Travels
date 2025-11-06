// src/components/Fleet/VehicleCard.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Vehicle } from "@/data/vehicleData";

interface Props {
  vehicle: Vehicle;
  onViewDetails: () => void;
}
const VehicleCard: React.FC<Props> = ({ vehicle, onViewDetails }) => (
  <div className="bg-white rounded-xl shadow p-5 flex flex-col">
    <img
      src={vehicle.images[0]}
      alt={vehicle.name}
      className="w-full h-44 object-contain mb-4 rounded"
    />
    <h2 className="font-bold text-xl mb-1">{vehicle.name}</h2>
    <div className="mb-2 text-gray-500">{vehicle.model}</div>
    <div className="mb-3 text-base font-semibold text-indigo-600">
      {vehicle.priceRange}
    </div>
    <Button className="mt-auto" onClick={onViewDetails}>
      View Details
      <ArrowRight className="w-4 h-4 ml-2" />
    </Button>
  </div>
);

export default VehicleCard;
