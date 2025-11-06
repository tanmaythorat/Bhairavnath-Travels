
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Luggage, Fuel, Star, Crown, Heart, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import VehicleDetailsModal from "./VehicleDetailsPage";  // Import the modal!

const VehicleDetailCard = ({ vehicle, category }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % vehicle.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [vehicle.images.length]);

  return (
    <>
      <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-slate-800 overflow-hidden rounded-xl">
        <div className="relative h-52 overflow-hidden flex items-center justify-center bg-gray-50">
          <img
            src={vehicle.images[currentImageIndex]}
            alt={vehicle.name}
            className="object-cover object-center w-full h-full transition-all duration-300 rounded-t-xl"
          />
          {/* BADGES */}
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            {vehicle.popular && (
              <Badge className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                <Star className="w-3 h-3 mr-1 inline" />
                Popular
              </Badge>
            )}
            {vehicle.luxury && (
              <Badge className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
                <Crown className="w-3 h-3 mr-1 inline" />
                Luxury
              </Badge>
            )}
          </div>
          {/* Like icon */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`w-8 h-8 rounded-full bg-white/70 flex items-center justify-center transition ${
                isLiked ? "bg-red-500 text-white" : "hover:bg-blue-100 text-blue-700"
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
            </button>
          </div>
          {/* Price badge */}
          <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full font-bold shadow text-sm z-10">
            {vehicle.priceRange}
          </div>
        </div>
        <CardContent className="pt-5 pb-3 px-6 flex flex-col">
          {/* Title/Model */}
          <div>
            <h2 className="font-bold text-xl mb-1">{vehicle.name}</h2>
            <div className="mb-2 text-gray-500 text-xs">{vehicle.model}</div>
          </div>
          {/* Ratings */}
          <div className="flex items-center gap-2 mb-3">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="font-semibold">{vehicle.rating}</span>
            <span className="text-slate-500 text-xs">({vehicle.trips} trips)</span>
          </div>
          {/* Key specs (grid) */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="text-center text-sm">
              <Users className="w-4 h-4 text-blue-600 mx-auto mb-1" />
              <div className="text-xs text-slate-400">Capacity</div>
              <div>{vehicle.capacity}</div>
            </div>
            <div className="text-center text-sm">
              <Luggage className="w-4 h-4 text-blue-600 mx-auto mb-1" />
              <div className="text-xs text-slate-400">Luggage</div>
              <div>{vehicle.luggage}</div>
            </div>
            <div className="text-center text-sm">
              <Fuel className="w-4 h-4 text-blue-600 mx-auto mb-1" />
              <div className="text-xs text-slate-400">Mileage</div>
              <div>{vehicle.mileage}</div>
            </div>
          </div>
          {/* Features chips (up to 3, then "+N more") */}
          <div className="mb-3 flex flex-wrap gap-1">
            {vehicle.features.slice(0, 3).map((feature, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
              >{feature}</span>
            ))}
            {vehicle.features.length > 3 && (
              <span className="px-2 py-1 bg-gray-200 text-slate-600 rounded text-xs">
                +{vehicle.features.length - 3} more
              </span>
            )}
          </div>
          {/* Action buttons */}
          <div className="flex gap-2 mt-3">
            <Button onClick={() => setIsModalOpen(true)} className="flex-1 bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2">
              View Details
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="flex items-center gap-1 px-3">
              <Phone className="w-4 h-4" /> Call
            </Button>
            <Button variant="outline" className="flex items-center gap-1 px-3">
              <Mail className="w-4 h-4" /> Email
            </Button>
          </div>
        </CardContent>
      </Card>

      {isModalOpen && (
        <VehicleDetailsModal vehicleId={vehicle.id} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default VehicleDetailCard;
