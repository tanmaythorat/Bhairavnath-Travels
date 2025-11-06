// import React, { useState, useEffect } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { 
//   Users, Luggage, Fuel, Star, Shield, Car, Crown, ChevronLeft, ChevronRight, 
//   Filter, Search, Calendar, MapPin, ArrowRight, Clock, Award, CheckCircle, 
//   Phone, Mail, Navigation, Zap, Wifi, Music, Snowflake, Settings,
//   Home, ArrowLeft, Heart, Share2, Download, Camera, Play
// } from 'lucide-react';


// import wagonrImg1 from '../Cars Images/WagnoR (1).png';
// import wagonrImg2 from '../Cars Images/WagnoR (2).png';
// import ciazImg1 from '../Cars Images/ciaz.png';
// import ciazImg2 from '../Cars Images/ciaz2.png';
// import ciazImg3 from '../Cars Images/ciaz3.png';
// import DzireImg1 from '../Cars Images/Swift DZIRE.png';
// import DzireImg2 from '../Cars Images/Swift DZIRE1.png';
// import DzireImg3 from '../Cars Images/Swift DZIRE2.png';
// import glanzaImg1 from '../Cars Images/glanza.png';
// import glanzaImg2 from '../Cars Images/glanza1.png';
// import auraImg1 from '../Cars Images/Aura.png';
// import auraImg2 from '../Cars Images/Aura2.png';
// import auraImg3 from '../Cars Images/Aura3.png';
// import xcentImg1 from '../Cars Images/Xcent.png';
// import xcentImg2 from '../Cars Images/xcent2.png';
// import xcentImg3 from '../Cars Images/Xcent3.png';
// import crystaImg1 from '../Cars Images/Toyota Innova Crysta.png';
// import innovaImg1 from '../Cars Images/Toyota Innova.png';
// import innovaImg2 from '../Cars Images/Toyota Innova2.png';
// import innovaImg3 from '../Cars Images/Toyota Innova3.png';
// import ertigaImg1 from '../Cars Images/Maruti Ertiga.png';
// import ertigaImg2 from '../Cars Images/Maruti Ertiga2.png';
// import ertigaImg3 from '../Cars Images/Maruti Ertiga3.png';
// import rumionImg1 from '../Cars Images/Toyota Rumion.png';
// import rumionImg2 from '../Cars Images/Toyota Rumion2.png';
// import audiImg1 from '../Cars Images/Audi.png';
// import audiImg2 from '../Cars Images/Audi1.png';
// import audiImg3 from '../Cars Images/Audi2.png';
// import bmwImg1 from '../Cars Images/BMW.png';
// import bmwImg2 from '../Cars Images/BMW1.png';
// import bmwImg3 from '../Cars Images/BMW2.png';
// import mercedesImg1 from '../Cars Images/Mercedes.png';
// import mercedesImg2 from '../Cars Images/Mercedes1.png';
// import mercedesImg3 from '../Cars Images/Mercedes2.png';
// import jaguarImg1 from '../Cars Images/Jaguar.png';
// import TampoTravller17Seater from '../Cars Images/TampoTravller17Seater.png';
// import TampoTravller17Seater1 from '../Cars Images/TampoTravller17Seater1.png';
// import TampoTravller17Seater2 from '../Cars Images/TampoTravller17Seater2.png';


























// // Vehicle data organized by category
// const vehicleCategories = {
//   'Hatchback': {
//     title: 'Hatchback Collection',
//     description: 'Perfect for city drives and short trips. Compact, fuel-efficient, and easy to maneuver through traffic.',
//     icon: Car,
//     color: 'from-green-500 to-blue-500',
//     bgColor: 'from-green-50 to-blue-50',
//     vehicles: [
//       {
//         id: 1,
//         name: 'WagonR',
//         model: '2024 VXI',
//         images: [
//           wagonrImg1,wagonrImg2],
//         capacity: '4+1',
//         luggage: '2 Large Bags',
//         fuelType: 'Petrol',
//         mileage: '22 km/l',
//         transmission: 'Manual/Automatic',
//         features: ['AC', 'Power Steering', 'Music System', 'Central Locking', 'Power Windows', 'GPS Navigation'],
//         priceRange: '₹8-12/km',
//         rating: 4.5,
//         trips: 1250,
//         popular: true,
//         specifications: {
//           engine: '1.2L Petrol',
//           power: '82 HP',
//           torque: '113 Nm',
//           fuelTank: '37 L',
//           bootSpace: '268 L',
//           groundClearance: '163 mm'
//         }
//       }
//     ]
//   },
//   'Sedan': {
//     title: 'Sedan Collection',
//     description: 'Elegant and comfortable sedans perfect for business trips and family outings.',
//     icon: Car,
//     color: 'from-blue-500 to-purple-500',
//     bgColor: 'from-blue-50 to-purple-50',
//     vehicles: [
//       {
//         id: 2,
//         name: 'Maruti Ciaz',
//         model: '2024 ZX CVT',
//         images: [
//         ciazImg1,ciazImg2,ciazImg3
//         ],
//         capacity: '4+1',
//         luggage: '3 Large Bags',
//         fuelType: 'Petrol',
//         mileage: '18 km/l',
//         transmission: 'CVT',
//         features: ['Premium AC', 'Touchscreen', 'Sunroof', 'Leather Seats', '8" Touchscreen', 'Cruise Control'],
//         priceRange: '₹12-16/km',
//         rating: 4.7,
//         trips: 1580,
//         popular: true,
//         specifications: {
//           engine: '1.5L Petrol',
//           power: '103 HP',
//           torque: '138 Nm',
//           fuelTank: '43 L',
//           bootSpace: '510 L',
//           groundClearance: '170 mm'
//         }
//       },
//       {
//         id: 3,
//         name: 'Swift Dzire',
//         model: '2024 ZXI+',
//         images: [
//           DzireImg1,DzireImg2,DzireImg3
//         ],
//         capacity: '4+1',
//         luggage: '3 Large Bags',
//         fuelType: 'Petrol/CNG',
//         mileage: '24 km/l',
//         transmission: 'Manual/AMT',
//         features: ['Smart Play Studio', 'Cruise Control', 'Auto AC', 'Rear Defogger', 'Height Adjustable Seats'],
//         priceRange: '₹10-14/km',
//         rating: 4.4,
//         trips: 1200,
//         specifications: {
//           engine: '1.2L Petrol',
//           power: '90 HP',
//           torque: '113 Nm',
//           fuelTank: '37 L',
//           bootSpace: '378 L',
//           groundClearance: '163 mm'
//         }
//       },
//       {
//         id: 4,
//         name: 'Toyota Glanza',
//         model: '2024 V CVT',
//         images: [
//          glanzaImg1,glanzaImg2
//         ],
//         capacity: '4+1',
//         luggage: '2-3 Large Bags',
//         fuelType: 'Petrol/CNG',
//         mileage: '22 km/l',
//         transmission: 'Manual/AMT',
//         features: ['Touchscreen', 'Smart Play', 'Auto AC', 'Rear Camera', 'Keyless Entry', 'Cruise Control'],
//         priceRange: '₹10-14/km',
//         rating: 4.5,
//         trips: 980,
//         specifications: {
//           engine: '1.2L Petrol',
//           power: '90 HP',
//           torque: '113 Nm',
//           fuelTank: '37 L',
//           bootSpace: '339 L',
//           groundClearance: '163 mm'
//         }
//       },
//       {
//         id: 5,
//         name: 'Hyundai Aura',
//         model: '2024 SX(O)',
//         images: [
// auraImg1,auraImg2,audiImg3
//         ],
//         capacity: '4+1',
//         luggage: '3 Large Bags',
//         fuelType: 'Petrol/CNG',
//         mileage: '25 km/l',
//         transmission: 'Manual/AMT',
//         features: ['8" Touchscreen', 'Wireless Charging', 'Auto AC', 'Rear Camera', 'Digital Cluster', 'BlueLink'],
//         priceRange: '₹11-15/km',
//         rating: 4.6,
//         trips: 850,
//         specifications: {
//           engine: '1.2L Petrol',
//           power: '83 HP',
//           torque: '114 Nm',
//           fuelTank: '37 L',
//           bootSpace: '402 L',
//           groundClearance: '165 mm'
//         }
//       },
//       {
//         id: 6,
//         name: 'Hyundai Xcent',
//         model: '2024 SX',
//         images: [
//          xcentImg1,xcentImg2,xcentImg3
//         ],
//         capacity: '4+1',
//         luggage: '3 Large Bags',
//         fuelType: 'Petrol/Diesel',
//         mileage: '20 km/l',
//         transmission: 'Manual/Automatic',
//         features: ['Touchscreen', 'Auto AC', 'Rear Camera', 'Power Windows', 'Central Locking', 'ABS with EBD'],
//         priceRange: '₹10-14/km',
//         rating: 4.3,
//         trips: 720,
//         specifications: {
//           engine: '1.2L Petrol',
//           power: '83 HP',
//           torque: '114 Nm',
//           fuelTank: '43 L',
//           bootSpace: '407 L',
//           groundClearance: '165 mm'
//         }
//       }
//     ]
//   },
//   'SUV': {
//     title: 'SUV Collection',
//     description: 'Powerful and spacious SUVs perfect for family trips and adventure journeys.',
//     icon: Car,
//     color: 'from-orange-500 to-red-500',
//     bgColor: 'from-orange-50 to-red-50',
//     vehicles: [
//       {
//         id: 7,
//         name: 'Toyota Innova Crysta',
//         model: '2024 ZX',
//         images: [
//           crystaImg1
//         ],
//         capacity: '7+1',
//         luggage: '5-6 Large Bags',
//         fuelType: 'Diesel',
//         mileage: '15 km/l',
//         transmission: 'Manual/AT',
//         features: ['Captain Seats', '9" Touchscreen', 'Rear Entertainment', 'Auto AC', 'Push Start', 'Leather Upholstery'],
//         priceRange: '₹20-28/km',
//         rating: 4.7,
//         trips: 890,
//         popular: true,
//         specifications: {
//           engine: '2.4L GD',
//           power: '150 HP',
//           torque: '343 Nm',
//           fuelTank: '55 L',
//           bootSpace: '300 L',
//           groundClearance: '178 mm'
//         }
//       },
//       {
//         id: 8,
//         name: 'Toyota Innova',
//         model: '2024 GX',
//         images: [
//           innovaImg1,innovaImg2,innovaImg3],
//         capacity: '7+1',
//         luggage: '4-5 Large Bags',
//         fuelType: 'Diesel',
//         mileage: '14 km/l',
//         transmission: 'Manual',
//         features: ['AC', 'Touchscreen', 'Rear Camera', 'Power Windows', 'Central Locking', 'USB Charging'],
//         priceRange: '₹18-24/km',
//         rating: 4.6,
//         trips: 1150,
//         specifications: {
//           engine: '2.4L Diesel',
//           power: '148 HP',
//           torque: '343 Nm',
//           fuelTank: '55 L',
//           bootSpace: '300 L',
//           groundClearance: '175 mm'
//         }
//       },
//       {
//         id: 9,
//         name: 'Maruti Ertiga',
//         model: '2024 ZXI+',
//         images: [
//           ertigaImg1,ertigaImg2,ertigaImg3
//         ],
//         capacity: '7+1',
//         luggage: '3-4 Large Bags',
//         fuelType: 'Petrol/CNG',
//         mileage: '20 km/l',
//         transmission: 'Manual/AT',
//         features: ['Smart Play Studio', 'Cruise Control', 'Auto AC', 'Rear Camera', '7" Touchscreen', 'Captain Seats'],
//         priceRange: '₹14-20/km',
//         rating: 4.5,
//         trips: 980,
//         popular: true,
//         specifications: {
//           engine: '1.5L Petrol',
//           power: '103 HP',
//           torque: '138 Nm',
//           fuelTank: '45 L',
//           bootSpace: '209 L',
//           groundClearance: '180 mm'
//         }
//       },
//       {
//         id: 10,
//         name: 'Toyota Rumion',
//         model: '2024 S',
//         images: [
//           rumionImg1,rumionImg2
//         ],
//         capacity: '7+1',
//         luggage: '3-4 Large Bags',
//         fuelType: 'Petrol/CNG',
//         mileage: '20 km/l',
//         transmission: 'Manual/AT',
//         features: ['Touchscreen', 'Auto AC', 'Rear Camera', 'Cruise Control', 'Captain Seats', 'USB Charging'],
//         priceRange: '₹14-20/km',
//         rating: 4.5,
//         trips: 720,
//         specifications: {
//           engine: '1.5L Petrol',
//           power: '103 HP',
//           torque: '137 Nm',
//           fuelTank: '45 L',
//           bootSpace: '209 L',
//           groundClearance: '185 mm'
//         }
//       }
//     ]
//   },
//   'Luxury': {
//     title: 'Luxury Collection',
//     description: 'Premium luxury cars for executive travel and special occasions.',
//     icon: Crown,
//     color: 'from-purple-600 to-pink-600',
//     bgColor: 'from-purple-50 to-pink-50',
//     vehicles: [
//       {
//         id: 11,
//         name: 'Audi',
//         model: '2024 A4 Premium Plus',
//         images: [
//           audiImg1,audiImg2,audiImg3
//         ],
//         capacity: '4+1',
//         luggage: '3 Large Bags',
//         fuelType: 'Petrol',
//         mileage: '16 km/l',
//         transmission: '7-Speed S-Tronic',
//         features: ['Virtual Cockpit', 'MMI Touch', 'Bang & Olufsen', 'Matrix LED', 'Quattro AWD', 'Park Assist'],
//         priceRange: '₹30-42/km',
//         rating: 4.8,
//         trips: 280,
//         luxury: true,
//         specifications: {
//           engine: '2.0L TFSI',
//           power: '190 HP',
//           torque: '320 Nm',
//           fuelTank: '54 L',
//           bootSpace: '460 L',
//           groundClearance: '137 mm'
//         }
//       },
//       {
//         id: 12,
//         name: 'BMW',
//         model: '2024 3 Series 320d Sport',
//         images: [
//           bmwImg1,bmwImg2,bmwImg3
//         ],
//         capacity: '4+1',
//         luggage: '3 Large Bags',
//         fuelType: 'Diesel',
//         mileage: '18 km/l',
//         transmission: '8-Speed AT',
//         features: ['BMW iDrive', 'Harman Kardon', 'Ambient Lighting', 'Gesture Control', 'Wireless Charging', 'Head-Up Display'],
//         priceRange: '₹28-38/km',
//         rating: 4.9,
//         trips: 340,
//         luxury: true,
//         specifications: {
//           engine: '2.0L TwinPower',
//           power: '190 HP',
//           torque: '400 Nm',
//           fuelTank: '59 L',
//           bootSpace: '480 L',
//           groundClearance: '140 mm'
//         }
//       },
//       {
//         id: 13,
//         name: 'Mercedes',
//         model: '2024 E-Class E350d',
//         images: [
//           mercedesImg1,mercedesImg2,mercedesImg3
//         ],
//         capacity: '4+1',
//         luggage: '3 Large Bags',
//         fuelType: 'Diesel',
//         mileage: '16 km/l',
//         transmission: '9G-Tronic',
//         features: ['MBUX', 'Burmester Audio', 'Air Suspension', 'Massage Seats', 'Panoramic Sunroof', 'Wireless Charging'],
//         priceRange: '₹35-50/km',
//         rating: 5.0,
//         trips: 220,
//         luxury: true,
//         specifications: {
//           engine: '3.0L V6',
//           power: '258 HP',
//           torque: '620 Nm',
//           fuelTank: '66 L',
//           bootSpace: '540 L',
//           groundClearance: '125 mm'
//         }
//       },
//       {
//         id: 14,
//         name: 'Jaguar',
//         model: '2024 XF R-Sport',
//         images: [
//          jaguarImg1
//         ],
//         capacity: '4+1',
//         luggage: '3 Large Bags',
//         fuelType: 'Diesel',
//         mileage: '15 km/l',
//         transmission: '8-Speed AT',
//         features: ['InControl Touch Pro', 'Meridian Audio', 'Adaptive Dynamics', 'LED Headlights', 'Climate Control', 'Memory Seats'],
//         priceRange: '₹32-45/km',
//         rating: 4.8,
//         trips: 180,
//         luxury: true,
//         specifications: {
//           engine: '2.0L Diesel',
//           power: '180 HP',
//           torque: '430 Nm',
//           fuelTank: '63 L',
//           bootSpace: '540 L',
//           groundClearance: '135 mm'
//         }
//       }
//     ]
//   },
//   'Tempo Traveler': {
//     title: 'Tempo Traveler Collection',
//     description: 'Spacious tempo travelers perfect for group travel, events, and long journeys.',
//     icon: Users,
//     color: 'from-indigo-500 to-blue-600',
//     bgColor: 'from-indigo-50 to-blue-50',
//     vehicles: [
//       {
//         id: 15,
//         name: 'Tempo Traveler',
//         model: '17 Seater',
//         images: [
//           TampoTravller17Seater ],
//         capacity: '17 Seater',
//         luggage: '8-10 Large Bags',
//         fuelType: 'Diesel',
//         mileage: '12 km/l',
//         transmission: 'Manual',
//         features: ['AC', 'Push Back Seats', 'Music System', 'First Aid Kit', 'Fire Extinguisher', 'Ample Leg Room'],
//         priceRange: '₹18-25/km',
//         rating: 4.5,
//         trips: 650,
//         popular: true,
//         specifications: {
//           engine: '2.6L Diesel',
//           power: '91 HP',
//           torque: '250 Nm',
//           fuelTank: '55 L',
//           bootSpace: 'Large',
//           groundClearance: '195 mm'
//         }
//       },
//       {
//         id: 16,
//         name: 'Tempo Traveler',
//         model: '20 Seater',
//         images: [
//           TampoTravller17Seater1 ],
//         capacity: '20 Seater',
//         luggage: '10-12 Large Bags',
//         fuelType: 'Diesel',
//         mileage: '11 km/l',
//         transmission: 'Manual',
//         features: ['AC', 'Comfortable Seats', 'Music System', 'Mobile Charging', 'LED Lights', 'Spacious Interior'],
//         priceRange: '₹20-28/km',
//         rating: 4.6,
//         trips: 520,
//         specifications: {
//           engine: '2.6L Diesel',
//           power: '91 HP',
//           torque: '250 Nm',
//           fuelTank: '60 L',
//           bootSpace: 'Extra Large',
//           groundClearance: '195 mm'
//         }
//       },
//       {
//         id: 17,
//         name: 'Tempo Traveler',
//         model: '32 Seater',
//         images: [
//          TampoTravller17Seater1 ],
//         capacity: '32 Seater',
//         luggage: '15-18 Large Bags',
//         fuelType: 'Diesel',
//         mileage: '10 km/l',
//         transmission: 'Manual',
//         features: ['AC', 'Reclining Seats', 'Entertainment System', 'USB Ports', 'Overhead Storage', 'Emergency Exit'],
//         priceRange: '₹25-35/km',
//         rating: 4.5,
//         trips: 380,
//         popular: true,
//         specifications: {
//           engine: '3.0L Diesel',
//           power: '120 HP',
//           torque: '300 Nm',
//           fuelTank: '70 L',
//           bootSpace: 'Extra Large',
//           groundClearance: '200 mm'
//         }
//       },
//       {
//         id: 18,
//         name: 'Tempo Traveler',
//         model: '45 Seater',
//         images: [
//           TampoTravller17Seater2  ],
//         capacity: '45 Seater',
//         luggage: '20-25 Large Bags',
//         fuelType: 'Diesel',
//         mileage: '9 km/l',
//         transmission: 'Manual',
//         features: ['AC', 'Premium Seats', 'LCD Screen', 'PA System', 'Reading Lights', 'Luggage Carrier'],
//         priceRange: '₹30-42/km',
//         rating: 4.7,
//         trips: 280,
//         specifications: {
//           engine: '3.5L Diesel',
//           power: '140 HP',
//           torque: '350 Nm',
//           fuelTank: '90 L',
//           bootSpace: 'XXL',
//           groundClearance: '205 mm'
//         }
//       },
//       {
//         id: 19,
//         name: 'Tempo Traveler',
//         model: '50 Seater',
//         images: [
//           TampoTravller17Seater2   ],
//         capacity: '50 Seater',
//         luggage: '25-30 Large Bags',
//         fuelType: 'Diesel',
//         mileage: '8 km/l',
//         transmission: 'Manual',
//         features: ['AC', 'Luxury Seats', 'Entertainment System', 'Wifi', 'Rest Room', 'Mini Fridge', 'GPS Tracking'],
//         priceRange: '₹35-50/km',
//         rating: 4.8,
//         trips: 210,
//         specifications: {
//           engine: '4.0L Diesel',
//           power: '160 HP',
//           torque: '400 Nm',
//           fuelTank: '100 L',
//           bootSpace: 'XXL+',
//           groundClearance: '210 mm'
//         }
//       }
//     ]
//   }
// };

// const CategoryPage = ({ category, onBack }) => {
//   const [selectedVehicle, setSelectedVehicle] = useState(null);
//   const categoryData = vehicleCategories[category];
  
//   if (!categoryData) return null;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
//       {/* Header */}
//       <div className={`bg-gradient-to-r ${categoryData.color} text-white py-12`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <button
//             onClick={onBack}
//             className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             Back to Fleet
//           </button>
          
//           <div className="flex items-center gap-4 mb-6">
//             <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
//               <categoryData.icon className="w-8 h-8" />
//             </div>
//             <div>
//               <h1 className="text-4xl lg:text-5xl font-bold">{categoryData.title}</h1>
//               <p className="text-white/90 text-lg mt-2">{categoryData.description}</p>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-6 text-white/80">
//             <span className="flex items-center gap-2">
//               <Car className="w-4 h-4" />
//               {categoryData.vehicles.length} Models Available
//             </span>
//             <span className="flex items-center gap-2">
//               <Shield className="w-4 h-4" />
//               GPS Tracked
//             </span>
//             <span className="flex items-center gap-2">
//               <Clock className="w-4 h-4" />
//               24/7 Support
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Vehicle Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
//           {categoryData.vehicles.map((vehicle) => (
//             <VehicleDetailCard
//               key={vehicle.id}
//               vehicle={vehicle}
//               category={category}
//               onSelect={() => setSelectedVehicle(vehicle)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Vehicle Detail Modal */}
//       {selectedVehicle && (
//         <VehicleDetailModal
//           vehicle={selectedVehicle}
//           category={category}
//           onClose={() => setSelectedVehicle(null)}
//         />
//       )}
//     </div>
//   );
// };

// const VehicleDetailCard = ({ vehicle, category, onSelect }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex(prev => (prev + 1) % vehicle.images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [vehicle.images.length]);

//   return (
//     <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-slate-800 overflow-hidden">
//       <div className="relative h-64 overflow-hidden">
//         {/* Image Carousel */}
//         <div className="relative w-full h-full">
//           {vehicle.images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={vehicle.name}
//               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:scale-105 ${
//                 index === currentImageIndex ? 'opacity-100' : 'opacity-0'
//               }`}
//             />
//           ))}
//         </div>
        
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
//         {/* Badges */}
//         <div className="absolute top-4 left-4 flex gap-2">
//           {vehicle.popular && (
//             <Badge className="bg-orange-500 text-white">
//               <Star className="w-3 h-3 mr-1" />
//               Popular
//             </Badge>
//           )}
//           {vehicle.luxury && (
//             <Badge className="bg-purple-600 text-white">
//               <Crown className="w-3 h-3 mr-1" />
//               Luxury
//             </Badge>
//           )}
//         </div>

//         {/* Actions */}
//         <div className="absolute top-4 right-4 flex gap-2">
//           <button
//             onClick={() => setIsLiked(!isLiked)}
//             className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all ${
//               isLiked ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
//             }`}
//           >
//             <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
//           </button>
//         </div>

//         {/* Vehicle Info Overlay */}
//         <div className="absolute bottom-4 left-4 right-4">
//           <h3 className="text-2xl font-bold text-white mb-1">{vehicle.name}</h3>
//           <p className="text-white/80 text-sm">{vehicle.model}</p>
//         </div>

//         {/* Image Dots */}
//         <div className="absolute bottom-4 right-4 flex gap-1">
//           {vehicle.images.map((_, index) => (
//             <div
//               key={index}
//               className={`w-2 h-2 rounded-full transition-all ${
//                 index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       <CardContent className="p-6">
//         {/* Rating and Trips */}
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center gap-2">
//             <Star className="w-4 h-4 text-yellow-500 fill-current" />
//             <span className="font-semibold">{vehicle.rating}</span>
//             <span className="text-slate-500 text-sm">({vehicle.trips} trips)</span>
//           </div>
//           <div className="text-right">
//             <div className="text-xs text-slate-500">From</div>
//             <div className="font-bold text-blue-600">{vehicle.priceRange}</div>
//           </div>
//         </div>

//         {/* Key Specs */}
//         <div className="grid grid-cols-3 gap-3 mb-4">
//           <div className="text-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
//             <Users className="w-4 h-4 text-blue-600 mx-auto mb-1" />
//             <div className="text-xs text-slate-500">Capacity</div>
//             <div className="text-sm font-semibold">{vehicle.capacity}</div>
//           </div>
//           <div className="text-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
//             <Luggage className="w-4 h-4 text-blue-600 mx-auto mb-1" />
//             <div className="text-xs text-slate-500">Luggage</div>
//             <div className="text-sm font-semibold">{vehicle.luggage}</div>
//           </div>
//           <div className="text-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
//             <Fuel className="w-4 h-4 text-blue-600 mx-auto mb-1" />
//             <div className="text-xs text-slate-500">Mileage</div>
//             <div className="text-sm font-semibold">{vehicle.mileage}</div>
//           </div>
//         </div>

//         {/* Top Features */}
//         <div className="mb-4">
//           <div className="flex flex-wrap gap-1">
//             {vehicle.features.slice(0, 4).map((feature) => (
//               <span 
//                 key={feature}
//                 className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs"
//               >
//                 {feature}
//               </span>
//             ))}
//             {vehicle.features.length > 4 && (
//               <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
//                 +{vehicle.features.length - 4} more
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex gap-3">
//           <Button onClick={onSelect} className="flex-1 bg-blue-600 hover:bg-blue-700">
//             View Details
//             <ArrowRight className="w-4 h-4 ml-2" />
//           </Button>
//           <Button variant="outline" className="px-4">
//             <Phone className="w-4 h-4" />
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// const VehicleDetailModal = ({ vehicle, category, onClose }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [activeTab, setActiveTab] = useState('features');

//   return (
//     <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
//       <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
//         <div className="relative">
//           {/* Header */}
//           <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
//             <div>
//               <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{vehicle.name}</h2>
//               <p className="text-slate-600 dark:text-slate-400">{vehicle.model}</p>
//             </div>
//             <button
//               onClick={onClose}
//               className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
//             >
//               ×
//             </button>
//           </div>

//           {/* Content */}
//           <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
//             {/* Image Gallery */}
//             <div className="relative h-80">
//               <img
//                 src={vehicle.images[currentImageIndex]}
//                 alt={vehicle.name}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
//               {/* Image Navigation */}
//               {vehicle.images.length > 1 && (
//                 <>
//                   <button
//                     onClick={() => setCurrentImageIndex(prev => (prev - 1 + vehicle.images.length) % vehicle.images.length)}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
//                   >
//                     <ChevronLeft className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() => setCurrentImageIndex(prev => (prev + 1) % vehicle.images.length)}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
//                   >
//                     <ChevronRight className="w-5 h-5" />
//                   </button>
//                 </>
//               )}

//               {/* Price Badge */}
//               <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
//                 {vehicle.priceRange}
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="border-b border-slate-200 dark:border-slate-700">
//               <div className="flex">
//                 {['features', 'specifications', 'booking'].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-6 py-4 font-medium capitalize transition-colors ${
//                       activeTab === tab
//                         ? 'text-blue-600 border-b-2 border-blue-600'
//                         : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Tab Content */}
//             <div className="p-6">
//               {activeTab === 'features' && (
//                 <div>
//                   <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Features & Amenities</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {vehicle.features.map((feature, index) => (
//                       <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
//                         <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
//                         <span className="text-slate-700 dark:text-slate-300">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'specifications' && (
//                 <div>
//                   <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Technical Specifications</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <h4 className="font-medium mb-3 text-slate-800 dark:text-slate-200">Engine & Performance</h4>
//                       <div className="space-y-3">
//                         <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-600">
//                           <span className="text-slate-600 dark:text-slate-400">Engine</span>
//                           <span className="font-medium">{vehicle.specifications.engine}</span>
//                         </div>
//                         <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-600">
//                           <span className="text-slate-600 dark:text-slate-400">Power</span>
//                           <span className="font-medium">{vehicle.specifications.power}</span>
//                         </div>
//                         <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-600">
//                           <span className="text-slate-600 dark:text-slate-400">Torque</span>
//                           <span className="font-medium">{vehicle.specifications.torque}</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <h4 className="font-medium mb-3 text-slate-800 dark:text-slate-200">Dimensions & Capacity</h4>
//                       <div className="space-y-3">
//                         <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-600">
//                           <span className="text-slate-600 dark:text-slate-400">Fuel Tank</span>
//                           <span className="font-medium">{vehicle.specifications.fuelTank}</span>
//                         </div>
//                         <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-600">
//                           <span className="text-slate-600 dark:text-slate-400">Boot Space</span>
//                           <span className="font-medium">{vehicle.specifications.bootSpace}</span>
//                         </div>
//                         <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-600">
//                           <span className="text-slate-600 dark:text-slate-400">Ground Clearance</span>
//                           <span className="font-medium">{vehicle.specifications.groundClearance}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'booking' && (
//                 <div>
//                   <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Book Your Ride</h3>
//                   <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-6">
//                     <div className="flex items-center justify-between mb-4">
//                       <div>
//                         <h4 className="font-semibold text-slate-900 dark:text-white">{vehicle.name} {vehicle.model}</h4>
//                         <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
//                           <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                           <span>{vehicle.rating} ({vehicle.trips}+ trips)</span>
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <div className="text-2xl font-bold text-blue-600">{vehicle.priceRange}</div>
//                         <div className="text-sm text-slate-500">per kilometer</div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="space-y-4">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
//                           Pickup Location
//                         </label>
//                         <div className="relative">
//                           <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                           <input
//                             type="text"
//                             placeholder="Enter pickup location"
//                             className="w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
//                           />
//                         </div>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
//                           Drop Location
//                         </label>
//                         <div className="relative">
//                           <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                           <input
//                             type="text"
//                             placeholder="Enter destination"
//                             className="w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
//                           Pickup Date
//                         </label>
//                         <input
//                           type="date"
//                           className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
//                           Pickup Time
//                         </label>
//                         <input
//                           type="time"
//                           className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
//                         Special Requirements
//                       </label>
//                       <textarea
//                         rows={3}
//                         placeholder="Any special requirements or instructions..."
//                         className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="border-t border-slate-200 dark:border-slate-700 p-6">
//             <div className="flex gap-4">
//               <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
//                 <Car className="w-4 h-4 mr-2" />
//                 Book Now
//                 <ArrowRight className="w-4 h-4 ml-2" />
//               </Button>
//               <Button variant="outline" className="px-6">
//                 <Phone className="w-4 h-4 mr-2" />
//                 Call
//               </Button>
//               <Button variant="outline" className="px-6">
//                 <Mail className="w-4 h-4 mr-2" />
//                 Email
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const VehicleCategoryApp = () => {
//   const [currentCategory, setCurrentCategory] = useState(null);

//   if (currentCategory) {
//     return (
//       <CategoryPage 
//         category={currentCategory} 
//         onBack={() => setCurrentCategory(null)} 
//       />
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
//             <Award className="w-4 h-4" />
//             Premium Vehicle Categories
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//             Choose Your Perfect
//             <span className="block">Travel Companion</span>
//           </h1>
//           <p className="text-xl text-white/90 max-w-3xl mx-auto">
//             Explore our comprehensive fleet of premium vehicles across different categories. 
//             Each category is carefully curated to meet specific travel needs and preferences.
//           </p>
//         </div>
//       </div>

//       {/* Categories Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {Object.entries(vehicleCategories).map(([categoryKey, category]) => (
//             <Card 
//               key={categoryKey}
//               className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden"
//               onClick={() => setCurrentCategory(categoryKey)}
//             >
//               <div className={`h-48 bg-gradient-to-br ${category.bgColor} relative overflow-hidden`}>
//                 <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
//                     <category.icon className="w-10 h-10 text-white" />
//                   </div>
//                 </div>
                
//                 {/* Vehicle Count Badge */}
//                 <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 px-3 py-1 rounded-full">
//                   <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
//                     {category.vehicles.length} Models
//                   </span>
//                 </div>
//               </div>

//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
//                   {category.title}
//                 </h3>
//                 <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
//                   {category.description}
//                 </p>

//                 {/* Sample Vehicles */}
//                 <div className="mb-4">
//                   <div className="flex -space-x-2 mb-2">
//                     {category.vehicles.slice(0, 3).map((vehicle, index) => (
//                       <img
//                         key={vehicle.id}
//                         src={vehicle.images[0]}
//                         alt={vehicle.name}
//                         className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 object-cover"
//                       />
//                     ))}
//                   </div>
//                   <div className="text-xs text-slate-500 dark:text-slate-400">
//                     {category.vehicles.slice(0, 2).map(v => v.name).join(', ')}
//                     {category.vehicles.length > 2 && ' & more'}
//                   </div>
//                 </div>

//                 {/* Price Range */}
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="text-xs text-slate-500 dark:text-slate-400">Starting from</div>
//                     <div className="font-bold text-blue-600">
//                       ₹{Math.min(...category.vehicles.map(v => parseInt(v.priceRange.match(/\d+/)[0])))}-
//                       {Math.max(...category.vehicles.map(v => parseInt(v.priceRange.match(/\d+/g)[1] || v.priceRange.match(/\d+/)[0])))}/km
//                     </div>
//                   </div>
//                   <Button size="sm" className="group-hover:bg-blue-700 transition-colors">
//                     Explore
//                     <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="bg-slate-900 dark:bg-slate-800 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Fleet?</h2>
//             <p className="text-slate-300 text-lg">Premium features across all vehicle categories</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <Shield className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-lg font-semibold text-white mb-2">Safety First</h3>
//               <p className="text-slate-300 text-sm">GPS tracking, verified drivers, and comprehensive insurance</p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <Star className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-lg font-semibold text-white mb-2">Premium Quality</h3>
//               <p className="text-slate-300 text-sm">Well-maintained vehicles with regular servicing</p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <Users className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-lg font-semibold text-white mb-2">Expert Drivers</h3>
//               <p className="text-slate-300 text-sm">Professional chauffeurs with local knowledge</p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <Clock className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
//               <p className="text-slate-300 text-sm">Round-the-clock customer service and assistance</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VehicleCategoryApp;



import React from "react";
import { useNavigate } from "react-router-dom";
import { vehicleCategories } from "@/data/vehicleData";
import { Car, Users, Crown } from "lucide-react";

// Map icon names to Lucide icons
const iconMap = { Car, Users, Crown };

const FleetShowcasePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header: Gradient, title, subtitle */}
      <div
        className="w-full py-12 text-center"
        style={{
          background:
            "linear-gradient(90deg, #864be9 0%, #3c82f6 100%)"
        }}
      >
        <h1 className="text-white font-extrabold text-4xl md:text-5xl mb-4">
          Choose Your Perfect<br />Travel Companion
        </h1>
        <p className="text-indigo-100 mb-2 max-w-2xl mx-auto">
          Explore our comprehensive fleet of premium vehicles across different categories.<br />
          Each category is carefully curated to meet specific travel needs and preferences.
        </p>
      </div>
      {/* Category grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto py-10 px-2">
        {Object.entries(vehicleCategories).map(([categoryKey, category]) => {
          const Icon = iconMap[category.icon];
          // Calculate starting price for the category
          const minPrice = Math.min(
            ...category.vehicles.map(v =>
              Number((v.priceRange.match(/\d+/) || ["0"])[0])
            )
          );
          const maxPrice = Math.max(
            ...category.vehicles.map(v =>
              Number(
                (v.priceRange.match(/\d+/g) || ["0"])[1] ||
                (v.priceRange.match(/\d+/g) || ["0"])[0]
              )
            )
          );
          return (
            <div
              key={categoryKey}
              className="rounded-xl bg-gradient-to-br from-white to-slate-100 relative p-0 cursor-pointer shadow-lg border transition hover:shadow-2xl"
              onClick={() => navigate(`/fleet/${categoryKey.toLowerCase()}`)}
            >
              {/* Badge for number of models */}
              <div className="absolute top-4 right-4 bg-white px-3 py-1 text-xs rounded-full z-10 shadow font-semibold text-slate-700">
                {category.vehicles.length} Models
              </div>
              {/* Icon and light bg block */}
              <div className="flex items-center justify-center" style={{ minHeight: 110 }}>
                <div className="mt-8 w-14 h-14 rounded-2xl flex items-center justify-center" style={{
                  background: "rgba(127,127,255,0.13)"
                }}>
                  {Icon && <Icon className="w-8 h-8 text-white" />}
                </div>
              </div>
              {/* Card Content */}
              <div className="p-5 pt-2 flex flex-col min-h-[210px]">
                <div className="font-bold text-lg mb-1">{category.title}</div>
                <div className="text-sm text-slate-700 mb-3">{category.description}</div>
                {/* Vehicle avatars */}
                <div className="flex items-center mb-1">
                  {category.vehicles.slice(0, 3).map(vehicle => (
                    <img
                      key={vehicle.id}
                      src={vehicle.images[0]}
                      alt={vehicle.name}
                      className="w-6 h-6 rounded-full border-2 border-white object-cover -ml-2 first:ml-0"
                    />
                  ))}
                </div>
                {/* Vehicle names */}
                <div className="text-xs text-gray-500 mb-1 truncate">
                  {category.vehicles.map(v => v.name).slice(0, 2).join(', ')}
                  {category.vehicles.length > 2 && ' & more'}
                </div>
                {/* Price and action */}
                <div className="flex items-end justify-between mt-auto pt-3">
                  <div className="text-sm">
                    <span className="text-xs text-slate-500 block">Starting from</span>
                    <span className="font-bold text-blue-700">
                      ₹{minPrice}-{maxPrice}/km
                    </span>
                  </div>
                  <button
                    className="text-sm font-bold bg-blue-900 text-white px-5 py-1.5 rounded-lg shadow hover:bg-blue-700 transition"
                    type="button"
                  >
                    Explore &rarr;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FleetShowcasePage;
