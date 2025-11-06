// src/data/vehicleData.ts
import wagonrImg1 from '../Cars Images/WagnoR (1).png';
import wagonrImg2 from '../Cars Images/WagnoR (2).png';
import ciazImg1 from '../Cars Images/ciaz.png';
import ciazImg2 from '../Cars Images/ciaz2.png';
import ciazImg3 from '../Cars Images/ciaz3.png';
import DzireImg1 from '../Cars Images/Swift DZIRE.png';
import DzireImg2 from '../Cars Images/Swift DZIRE1.png';
import DzireImg3 from '../Cars Images/Swift DZIRE2.png';
import glanzaImg1 from '../Cars Images/glanza.png';
import glanzaImg2 from '../Cars Images/glanza1.png';
import auraImg1 from '../Cars Images/Aura.png';
import auraImg2 from '../Cars Images/Aura2.png';
import auraImg3 from '../Cars Images/Aura3.png';
import xcentImg1 from '../Cars Images/Xcent.png';
import xcentImg2 from '../Cars Images/xcent2.png';
import xcentImg3 from '../Cars Images/Xcent3.png';
import crystaImg1 from '../Cars Images/Toyota Innova Crysta.png';
import innovaImg1 from '../Cars Images/Toyota Innova.png';
import innovaImg2 from '../Cars Images/Toyota Innova2.png';
import innovaImg3 from '../Cars Images/Toyota Innova3.png';
import ertigaImg1 from '../Cars Images/Maruti Ertiga.png';
import ertigaImg2 from '../Cars Images/Maruti Ertiga2.png';
import ertigaImg3 from '../Cars Images/Maruti Ertiga3.png';
import rumionImg1 from '../Cars Images/Toyota Rumion.png';
import rumionImg2 from '../Cars Images/Toyota Rumion2.png';
import audiImg1 from '../Cars Images/Audi.png';
import audiImg2 from '../Cars Images/Audi1.png';
import audiImg3 from '../Cars Images/Audi2.png';
import bmwImg1 from '../Cars Images/BMW.png';
import bmwImg2 from '../Cars Images/BMW1.png';
import bmwImg3 from '../Cars Images/BMW2.png';
import mercedesImg1 from '../Cars Images/Mercedes.png';
import mercedesImg2 from '../Cars Images/Mercedes1.png';
import mercedesImg3 from '../Cars Images/Mercedes2.png';
import jaguarImg1 from '../Cars Images/Jaguar.png';
import TampoTravller17Seater from '../Cars Images/TampoTravller17Seater.png';
import TampoTravller17Seater1 from '../Cars Images/TampoTravller17Seater1.png';
import TampoTravller17Seater2 from '../Cars Images/TampoTravller17Seater2.png';

export interface VehicleSpecifications {
  engine: string;
  power: string;
  torque: string;
  fuelTank: string;
  bootSpace: string;
  groundClearance: string;
}

export interface Vehicle {
  id: number;
  name: string;
  model: string;
  images: string[];
  capacity: string;
  luggage: string;
  fuelType: string;
  mileage: string;
  transmission: string;
  features: string[];
  priceRange: string;
  rating: number;
  trips: number;
  popular?: boolean;
  luxury?: boolean;
  specifications: VehicleSpecifications;
}

export interface VehicleCategory {
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  vehicles: Vehicle[];
}

export const vehicleCategories: Record<string, VehicleCategory> = {
  'Hatchback': {
    title: 'Hatchback Collection',
    description: 'Perfect for city drives and short trips. Compact, fuel-efficient, and easy to maneuver through traffic.',
    icon: 'Car',
    color: 'from-green-500 to-blue-500',
    bgColor: 'from-green-50 to-blue-50',
    vehicles: [
      {
        id: 1,
        name: 'WagonR',
        model: '2024 VXI',
        images: [wagonrImg1, wagonrImg2],
        capacity: '4+1',
        luggage: '2 Large Bags',
        fuelType: 'Petrol',
        mileage: '22 km/l',
        transmission: 'Manual/Automatic',
        features: ['AC', 'Power Steering', 'Music System', 'Central Locking', 'Power Windows', 'GPS Navigation'],
        priceRange: '₹8-12/km',
        rating: 4.5,
        trips: 1250,
        popular: true,
        specifications: {
          engine: '1.2L Petrol',
          power: '82 HP',
          torque: '113 Nm',
          fuelTank: '37 L',
          bootSpace: '268 L',
          groundClearance: '163 mm'
        }
      }
    ]
  },
  'Sedan': {
    title: 'Sedan Collection',
    description: 'Elegant and comfortable sedans perfect for business trips and family outings.',
    icon: 'Car',
    color: 'from-blue-500 to-purple-500',
    bgColor: 'from-blue-50 to-purple-50',
    vehicles: [
      {
        id: 2,
        name: 'Maruti Ciaz',
        model: '2024 ZX CVT',
        images: [ciazImg1, ciazImg2, ciazImg3],
        capacity: '4+1',
        luggage: '3 Large Bags',
        fuelType: 'Petrol',
        mileage: '18 km/l',
        transmission: 'CVT',
        features: ['Premium AC', 'Touchscreen', 'Sunroof', 'Leather Seats', '8" Touchscreen', 'Cruise Control'],
        priceRange: '₹12-16/km',
        rating: 4.7,
        trips: 1580,
        popular: true,
        specifications: {
          engine: '1.5L Petrol',
          power: '103 HP',
          torque: '138 Nm',
          fuelTank: '43 L',
          bootSpace: '510 L',
          groundClearance: '170 mm'
        }
      },
      {
        id: 3,
        name: 'Swift Dzire',
        model: '2024 ZXI+',
        images: [DzireImg1, DzireImg2, DzireImg3],
        capacity: '4+1',
        luggage: '3 Large Bags',
        fuelType: 'Petrol/CNG',
        mileage: '24 km/l',
        transmission: 'Manual/AMT',
        features: ['Smart Play Studio', 'Cruise Control', 'Auto AC', 'Rear Defogger', 'Height Adjustable Seats'],
        priceRange: '₹10-14/km',
        rating: 4.4,
        trips: 1200,
        specifications: {
          engine: '1.2L Petrol',
          power: '90 HP',
          torque: '113 Nm',
          fuelTank: '37 L',
          bootSpace: '378 L',
          groundClearance: '163 mm'
        }
      },
      {
        id: 4,
        name: 'Toyota Glanza',
        model: '2024 V CVT',
        images: [glanzaImg1, glanzaImg2],
        capacity: '4+1',
        luggage: '2-3 Large Bags',
        fuelType: 'Petrol/CNG',
        mileage: '22 km/l',
        transmission: 'Manual/AMT',
        features: ['Touchscreen', 'Smart Play', 'Auto AC', 'Rear Camera', 'Keyless Entry', 'Cruise Control'],
        priceRange: '₹10-14/km',
        rating: 4.5,
        trips: 980,
        specifications: {
          engine: '1.2L Petrol',
          power: '90 HP',
          torque: '113 Nm',
          fuelTank: '37 L',
          bootSpace: '339 L',
          groundClearance: '163 mm'
        }
      },
      {
        id: 5,
        name: 'Hyundai Aura',
        model: '2024 SX(O)',
        images: [auraImg1, auraImg2, auraImg3],
        capacity: '4+1',
        luggage: '3 Large Bags',
        fuelType: 'Petrol/CNG',
        mileage: '25 km/l',
        transmission: 'Manual/AMT',
        features: ['8" Touchscreen', 'Wireless Charging', 'Auto AC', 'Rear Camera', 'Digital Cluster', 'BlueLink'],
        priceRange: '₹11-15/km',
        rating: 4.6,
        trips: 850,
        specifications: {
          engine: '1.2L Petrol',
          power: '83 HP',
          torque: '114 Nm',
          fuelTank: '37 L',
          bootSpace: '402 L',
          groundClearance: '165 mm'
        }
      },
      {
        id: 6,
        name: 'Hyundai Xcent',
        model: '2024 SX',
        images: [xcentImg1, xcentImg2, xcentImg3],
        capacity: '4+1',
        luggage: '3 Large Bags',
        fuelType: 'Petrol/Diesel',
        mileage: '20 km/l',
        transmission: 'Manual/Automatic',
        features: ['Touchscreen', 'Auto AC', 'Rear Camera', 'Power Windows', 'Central Locking', 'ABS with EBD'],
        priceRange: '₹10-14/km',
        rating: 4.3,
        trips: 720,
        specifications: {
          engine: '1.2L Petrol',
          power: '83 HP',
          torque: '114 Nm',
          fuelTank: '43 L',
          bootSpace: '407 L',
          groundClearance: '165 mm'
        }
      }
    ]
  },
  'SUV': {
    title: 'SUV Collection',
    description: 'Powerful and spacious SUVs perfect for family trips and adventure journeys.',
    icon: 'Car',
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50',
    vehicles: [
      {
        id: 7,
        name: 'Toyota Innova Crysta',
        model: '2024 ZX',
        images: [crystaImg1],
        capacity: '7+1',
        luggage: '5-6 Large Bags',
        fuelType: 'Diesel',
        mileage: '15 km/l',
        transmission: 'Manual/AT',
        features: ['Captain Seats', '9" Touchscreen', 'Rear Entertainment', 'Auto AC', 'Push Start', 'Leather Upholstery'],
        priceRange: '₹20-28/km',
        rating: 4.7,
        trips: 890,
        popular: true,
        specifications: {
          engine: '2.4L GD',
          power: '150 HP',
          torque: '343 Nm',
          fuelTank: '55 L',
          bootSpace: '300 L',
          groundClearance: '178 mm'
        }
      },
      {
        id: 8,
        name: 'Toyota Innova',
        model: '2024 GX',
        images: [innovaImg1, innovaImg2, innovaImg3],
        capacity: '7+1',
        luggage: '4-5 Large Bags',
        fuelType: 'Diesel',
        mileage: '14 km/l',
        transmission: 'Manual',
        features: ['AC', 'Touchscreen', 'Rear Camera', 'Power Windows', 'Central Locking', 'USB Charging'],
        priceRange: '₹18-24/km',
        rating: 4.6,
        trips: 1150,
        specifications: {
          engine: '2.4L Diesel',
          power: '148 HP',
          torque: '343 Nm',
          fuelTank: '55 L',
          bootSpace: '300 L',
          groundClearance: '175 mm'
        }
      },
      {
        id: 9,
        name: 'Maruti Ertiga',
        model: '2024 ZXI+',
        images: [ertigaImg1, ertigaImg2, ertigaImg3],
        capacity: '7+1',
        luggage: '3-4 Large Bags',
        fuelType: 'Petrol/CNG',
        mileage: '20 km/l',
        transmission: 'Manual/AT',
        features: ['Smart Play Studio', 'Cruise Control', 'Auto AC', 'Rear Camera', '7" Touchscreen', 'Captain Seats'],
        priceRange: '₹14-20/km',
        rating: 4.5,
        trips: 980,
        popular: true,
        specifications: {
          engine: '1.5L Petrol',
          power: '103 HP',
          torque: '138 Nm',
          fuelTank: '45 L',
          bootSpace: '209 L',
          groundClearance: '180 mm'
        }
      },
      {
        id: 10,
        name: 'Toyota Rumion',
        model: '2024 S',
        images: [rumionImg1, rumionImg2],
        capacity: '7+1',
        luggage: '3-4 Large Bags',
        fuelType: 'Petrol/CNG',
        mileage: '20 km/l',
        transmission: 'Manual/AT',
        features: ['Touchscreen', 'Auto AC', 'Rear Camera', 'Cruise Control', 'Captain Seats', 'USB Charging'],
        priceRange: '₹14-20/km',
        rating: 4.5,
        trips: 720,
        specifications: {
          engine: '1.5L Petrol',
          power: '103 HP',
          torque: '137 Nm',
          fuelTank: '45 L',
          bootSpace: '209 L',
          groundClearance: '185 mm'
        }
      }
    ]
  },
  'Luxury': {
    title: 'Luxury Collection',
    description: 'Premium luxury cars for executive travel and special occasions.',
    icon: 'Crown',
    color: 'from-purple-600 to-pink-600',
    bgColor: 'from-purple-50 to-pink-50',
    vehicles: [
      {
        id: 11,
        name: 'Audi',
        model: '2024 A4 Premium Plus',
        images: [audiImg1, audiImg2, audiImg3],
        capacity: '4+1',
        luggage: '3 Large Bags',
        fuelType: 'Petrol',
        mileage: '16 km/l',
        transmission: '7-Speed S-Tronic',
        features: ['Virtual Cockpit', 'MMI Touch', 'Bang & Olufsen', 'Matrix LED', 'Quattro AWD', 'Park Assist'],
        priceRange: '₹30-42/km',
        rating: 4.8,
        trips: 280,
        luxury: true,
        specifications: {
          engine: '2.0L TFSI',
          power: '190 HP',
          torque: '320 Nm',
          fuelTank: '54 L',
          bootSpace: '460 L',
          groundClearance: '137 mm'
        }
      },
      {
        id: 12,
        name: 'BMW',
        model: '2024 3 Series 320d Sport',
        images: [bmwImg1, bmwImg2, bmwImg3],
        capacity: '4+1',
        luggage: '3 Large Bags',
        fuelType: 'Diesel',
        mileage: '18 km/l',
        transmission: '8-Speed AT',
        features: ['BMW iDrive', 'Harman Kardon', 'Ambient Lighting', 'Gesture Control', 'Wireless Charging', 'Head-Up Display'],
        priceRange: '₹28-38/km',
        rating: 4.9,
        trips: 340,
        luxury: true,
        specifications: {
          engine: '2.0L TwinPower',
          power: '190 HP',
          torque: '400 Nm',
          fuelTank: '59 L',
          bootSpace: '480 L',
          groundClearance: '140 mm'
        }
      },
      {
        id: 13,
        name: 'Mercedes',
        model: '2024 E-Class E350d',
        images: [mercedesImg1, mercedesImg2, mercedesImg3],
        capacity: '4+1',
        luggage: '3 Large Bags',
        fuelType: 'Diesel',
        mileage: '16 km/l',
        transmission: '9G-Tronic',
        features: ['MBUX', 'Burmester Audio', 'Air Suspension', 'Massage Seats', 'Panoramic Sunroof', 'Wireless Charging'],
        priceRange: '₹35-50/km',
        rating: 5.0,
        trips: 220,
        luxury: true,
        specifications: {
          engine: '3.0L V6',
          power: '258 HP',
          torque: '620 Nm',
          fuelTank: '66 L',
          bootSpace: '540 L',
          groundClearance: '125 mm'
        }
      },
      {
        id: 14,
        name: 'Jaguar',
        model: '2024 XF R-Sport',
        images: [jaguarImg1],
        capacity: '4+1',
        luggage: '3 Large Bags',
        fuelType: 'Diesel',
        mileage: '15 km/l',
        transmission: '8-Speed AT',
        features: ['InControl Touch Pro', 'Meridian Audio', 'Adaptive Dynamics', 'LED Headlights', 'Climate Control', 'Memory Seats'],
        priceRange: '₹32-45/km',
        rating: 4.8,
        trips: 180,
        luxury: true,
        specifications: {
          engine: '2.0L Diesel',
          power: '180 HP',
          torque: '430 Nm',
          fuelTank: '63 L',
          bootSpace: '540 L',
          groundClearance: '135 mm'
        }
      }
    ]
  },
  'TempoTraveler': {
    title: 'Tempo Traveler Collection',
    description: 'Spacious tempo travelers perfect for group travel, events, and long journeys.',
    icon: 'Users',
    color: 'from-indigo-500 to-blue-600',
    bgColor: 'from-indigo-50 to-blue-50',
    vehicles: [
      {
        id: 15,
        name: 'Tempo Traveler',
        model: '17 Seater',
        images: [TampoTravller17Seater],
        capacity: '17 Seater',
        luggage: '8-10 Large Bags',
        fuelType: 'Diesel',
        mileage: '12 km/l',
        transmission: 'Manual',
        features: ['AC', 'Push Back Seats', 'Music System', 'First Aid Kit', 'Fire Extinguisher', 'Ample Leg Room'],
        priceRange: '₹18-25/km',
        rating: 4.5,
        trips: 650,
        popular: true,
        specifications: {
          engine: '2.6L Diesel',
          power: '91 HP',
          torque: '250 Nm',
          fuelTank: '55 L',
          bootSpace: 'Large',
          groundClearance: '195 mm'
        }
      },
      {
        id: 16,
        name: 'Tempo Traveler',
        model: '20 Seater',
        images: [TampoTravller17Seater1],
        capacity: '20 Seater',
        luggage: '10-12 Large Bags',
        fuelType: 'Diesel',
        mileage: '11 km/l',
        transmission: 'Manual',
        features: ['AC', 'Comfortable Seats', 'Music System', 'Mobile Charging', 'LED Lights', 'Spacious Interior'],
        priceRange: '₹20-28/km',
        rating: 4.6,
        trips: 520,
        specifications: {
          engine: '2.6L Diesel',
          power: '91 HP',
          torque: '250 Nm',
          fuelTank: '60 L',
          bootSpace: 'Extra Large',
          groundClearance: '195 mm'
        }
      },
      {
        id: 17,
        name: 'Tempo Traveler',
        model: '32 Seater',
        images: [TampoTravller17Seater1],
        capacity: '32 Seater',
        luggage: '15-18 Large Bags',
        fuelType: 'Diesel',
        mileage: '10 km/l',
        transmission: 'Manual',
        features: ['AC', 'Reclining Seats', 'Entertainment System', 'USB Ports', 'Overhead Storage', 'Emergency Exit'],
        priceRange: '₹25-35/km',
        rating: 4.5,
        trips: 380,
        popular: true,
        specifications: {
          engine: '3.0L Diesel',
          power: '120 HP',
          torque: '300 Nm',
          fuelTank: '70 L',
          bootSpace: 'Extra Large',
          groundClearance: '200 mm'
        }
      },
      {
        id: 18,
        name: 'Tempo Traveler',
        model: '45 Seater',
        images: [TampoTravller17Seater2],
        capacity: '45 Seater',
        luggage: '20-25 Large Bags',
        fuelType: 'Diesel',
        mileage: '9 km/l',
        transmission: 'Manual',
        features: ['AC', 'Premium Seats', 'LCD Screen', 'PA System', 'Reading Lights', 'Luggage Carrier'],
        priceRange: '₹30-42/km',
        rating: 4.7,
        trips: 280,
        specifications: {
          engine: '3.5L Diesel',
          power: '140 HP',
          torque: '350 Nm',
          fuelTank: '90 L',
          bootSpace: 'XXL',
          groundClearance: '205 mm'
        }
      },
      {
        id: 19,
        name: 'Tempo Traveler',
        model: '50 Seater',
        images: [TampoTravller17Seater2],
        capacity: '50 Seater',
        luggage: '25-30 Large Bags',
        fuelType: 'Diesel',
        mileage: '8 km/l',
        transmission: 'Manual',
        features: ['AC', 'Luxury Seats', 'Entertainment System', 'Wifi', 'Rest Room', 'Mini Fridge', 'GPS Tracking'],
        priceRange: '₹35-50/km',
        rating: 4.8,
        trips: 210,
        specifications: {
          engine: '4.0L Diesel',
          power: '160 HP',
          torque: '400 Nm',
          fuelTank: '100 L',
          bootSpace: 'XXL+',
          groundClearance: '210 mm'
        }
      }
    ]
  }
};

// Helper function to find a vehicle by ID
export const findVehicleById = (id: number): { vehicle: Vehicle; categoryKey: string } | null => {
  for (const [key, category] of Object.entries(vehicleCategories)) {
    const vehicle = category.vehicles.find(v => v.id === id);
    if (vehicle) {
      return { vehicle, categoryKey: key };
    }
  }
  return null;
};

// Helper function to get all vehicles
export const getAllVehicles = (): Vehicle[] => {
  return Object.values(vehicleCategories).flatMap(category => category.vehicles);
};