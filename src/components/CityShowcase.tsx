import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Car, Hotel, Camera, Clock, ChevronLeft, ChevronRight, Star, Thermometer, Users, Calendar, ArrowRight, Heart, Share2, Navigation, Play } from 'lucide-react';

interface CityImage {
  url: string;
  caption: string;
  type: 'landmark' | 'nature' | 'culture' | 'food';
}

interface CityData {
  id: number;
  name: string;
  state: string;
  images: CityImage[];
  description: string;
  attractions: string[];
  travelTime: string;
  popularSeason: string;
  rating: number;
  reviews: number;
  temperature: string;
  bestFor: string[];
  highlights: string;
  distance: string;
  priceRange: string;
}

const cities: CityData[] = [
  {
    id: 1,
    name: 'Pune',
    state: 'Maharashtra',
    images: [
      { url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop', caption: 'Shaniwar Wada Palace', type: 'landmark' },
      { url: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop', caption: 'Modern Pune Skyline', type: 'culture' },
      { url: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=400&fit=crop', caption: 'Sinhagad Fort', type: 'landmark' },
      { url: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&h=400&fit=crop', caption: 'Cultural Heritage', type: 'culture' }
    ],
    description: 'The cultural capital of Maharashtra, known for its rich history, educational institutions, and thriving IT industry.',
    attractions: ['Shaniwar Wada Palace', 'Sinhagad Fort', 'Aga Khan Palace', 'Osho Ashram', 'Pune University'],
    travelTime: '3-4 hours from Mumbai',
    popularSeason: 'Oct - Mar',
    rating: 4.5,
    reviews: 2840,
    temperature: '18-28°C',
    bestFor: ['History', 'Culture', 'Education'],
    highlights: 'Oxford of the East',
    distance: '150 km',
    priceRange: '₹2,500 - ₹4,000'
  },
  {
    id: 2,
    name: 'Goa',
    state: 'Goa',
    images: [
      { url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop', caption: 'Pristine Beaches', type: 'nature' },
      { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', caption: 'Portuguese Architecture', type: 'landmark' },
      { url: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=400&fit=crop', caption: 'Sunset Views', type: 'nature' },
      { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop', caption: 'Local Cuisine', type: 'food' }
    ],
    description: 'India\'s beach paradise offering pristine coastlines, Portuguese heritage, vibrant nightlife, and world-class water sports.',
    attractions: ['Baga Beach', 'Basilica of Bom Jesus', 'Fort Aguada', 'Dudhsagar Falls', 'Spice Plantations'],
    travelTime: '10-12 hours from Mumbai',
    popularSeason: 'Nov - Feb',
    rating: 4.7,
    reviews: 5620,
    temperature: '24-32°C',
    bestFor: ['Beaches', 'Nightlife', 'Heritage'],
    highlights: 'Beach Capital of India',
    distance: '450 km',
    priceRange: '₹8,000 - ₹15,000'
  },
  {
    id: 3,
    name: 'Mumbai',
    state: 'Maharashtra',
    images: [
      { url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop', caption: 'Gateway of India', type: 'landmark' },
      { url: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop', caption: 'Marine Drive', type: 'culture' },
      { url: 'https://images.unsplash.com/photo-1605649487212-47bdab064fd4?w=600&h=400&fit=crop', caption: 'City Skyline', type: 'culture' },
      { url: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&h=400&fit=crop', caption: 'Street Food', type: 'food' }
    ],
    description: 'The financial capital and Bollywood hub, featuring iconic landmarks, diverse street food, and the bustling spirit of dreams.',
    attractions: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Crawford Market', 'Juhu Beach'],
    travelTime: 'Local destination',
    popularSeason: 'Oct - Mar',
    rating: 4.6,
    reviews: 8940,
    temperature: '20-30°C',
    bestFor: ['Business', 'Entertainment', 'Food'],
    highlights: 'City of Dreams',
    distance: 'Local',
    priceRange: '₹1,500 - ₹3,500'
  },
  {
    id: 4,
    name: 'Nashik',
    state: 'Maharashtra',
    images: [
      { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', caption: 'Sula Vineyards', type: 'nature' },
      { url: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=400&fit=crop', caption: 'Trimbakeshwar Temple', type: 'landmark' },
      { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop', caption: 'Wine Tasting', type: 'culture' },
      { url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop', caption: 'Pandavleni Caves', type: 'landmark' }
    ],
    description: 'The wine capital of India, famous for its world-class vineyards, ancient temples, and the sacred Kumbh Mela pilgrimage.',
    attractions: ['Sula Vineyards', 'Trimbakeshwar Temple', 'Pandavleni Caves', 'Ramkund', 'Coin Museum'],
    travelTime: '4-5 hours from Mumbai',
    popularSeason: 'Oct - Mar',
    rating: 4.4,
    reviews: 1680,
    temperature: '16-26°C',
    bestFor: ['Wine Tours', 'Spirituality', 'History'],
    highlights: 'Wine Capital of India',
    distance: '165 km',
    priceRange: '₹3,000 - ₹6,000'
  },
  {
    id: 5,
    name: 'Lonavala',
    state: 'Maharashtra',
    images: [
      { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', caption: 'Hill Station Views', type: 'nature' },
      { url: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=400&fit=crop', caption: 'Monsoon Waterfalls', type: 'nature' },
      { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop', caption: 'Tiger Point', type: 'nature' },
      { url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop', caption: 'Karla Caves', type: 'landmark' }
    ],
    description: 'A popular hill station retreat offering scenic valleys, cascading waterfalls, and pleasant weather throughout the year.',
    attractions: ['Tiger Point', 'Bhushi Dam', 'Karla Caves', 'Lion Point', 'Wax Museum'],
    travelTime: '2-3 hours from Mumbai',
    popularSeason: 'Jun - Sep',
    rating: 4.3,
    reviews: 3240,
    temperature: '15-25°C',
    bestFor: ['Nature', 'Weekend Getaway', 'Monsoon'],
    highlights: 'Monsoon Paradise',
    distance: '83 km',
    priceRange: '₹2,000 - ₹4,500'
  },
  {
    id: 6,
    name: 'Aurangabad',
    state: 'Maharashtra',
    images: [
      { url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop', caption: 'Ajanta Caves', type: 'landmark' },
      { url: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop', caption: 'Ellora Caves', type: 'landmark' },
      { url: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&h=400&fit=crop', caption: 'Bibi Ka Maqbara', type: 'landmark' },
      { url: 'https://images.unsplash.com/photo-1605649487212-47bdab064fd4?w=600&h=400&fit=crop', caption: 'Historical Architecture', type: 'culture' }
    ],
    description: 'A UNESCO World Heritage site hub, home to the magnificent Ajanta and Ellora caves showcasing ancient Indian art and architecture.',
    attractions: ['Ajanta Caves', 'Ellora Caves', 'Bibi Ka Maqbara', 'Daulatabad Fort', 'Grishneshwar Temple'],
    travelTime: '7-8 hours from Mumbai',
    popularSeason: 'Oct - Mar',
    rating: 4.8,
    reviews: 4520,
    temperature: '18-28°C',
    bestFor: ['Heritage', 'Architecture', 'UNESCO Sites'],
    highlights: 'UNESCO World Heritage',
    distance: '330 km',
    priceRange: '₹3,500 - ₹7,000'
  }
];

const CityCard = ({ city, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality for images
  useEffect(() => {
    if (isAutoPlay && city.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % city.images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, city.images.length]);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % city.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + city.images.length) % city.images.length);
  };

  const goToImage = (index, e) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  return (
    <Card 
      className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-slate-800 h-full"
      style={{ 
        animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
      }}
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="relative h-64 sm:h-72 lg:h-64 overflow-hidden">
        {/* Image Carousel */}
        <div className="relative w-full h-full">
          {city.images.map((image, imgIndex) => (
            <div
              key={imgIndex}
              className={`absolute inset-0 transition-opacity duration-500 ${
                imgIndex === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image.url} 
                alt={image.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Image Navigation Buttons */}
          {city.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </>
          )}
          
          {/* Image Dots */}
          {city.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {city.images.map((_, imgIndex) => (
                <button
                  key={imgIndex}
                  onClick={(e) => goToImage(imgIndex, e)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    imgIndex === currentImageIndex 
                      ? 'bg-white w-6' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          )}
          
          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-blue-600 text-white shadow-lg">
              <Star className="w-3 h-3 mr-1" />
              {city.rating}
            </Badge>
            <Badge className="bg-green-600 text-white shadow-lg">
              {city.highlights}
            </Badge>
          </div>
          
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                isLiked ? 'bg-red-500 text-white' : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={(e) => e.stopPropagation()}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 text-white"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
          
          {/* City Info Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
              <Navigation className="w-3 h-3" />
              <span>{city.distance}</span>
              <span>•</span>
              <Clock className="w-3 h-3" />
              <span>{city.travelTime}</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1 group-hover:scale-105 transition-transform duration-300">
              {city.name}
            </h3>
            <p className="text-white/90 text-sm">{city.state}</p>
          </div>
          
          {/* Image Caption */}
          <div className="absolute bottom-2 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white/80 text-xs bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
              {city.images[currentImageIndex].caption}
            </span>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Rating and Reviews */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-semibold text-slate-900 dark:text-white">{city.rating}</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm">({city.reviews})</span>
            </div>
            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
              <Thermometer className="w-4 h-4" />
              <span className="text-sm">{city.temperature}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500 dark:text-slate-400">From</div>
            <div className="font-bold text-blue-600">{city.priceRange}</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
          {city.description}
        </p>

        {/* Best For Tags */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {city.bestFor.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Popular Attractions */}
        <div className="mb-6">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            Must Visit Places
          </h4>
          <div className="space-y-1">
            {city.attractions.slice(0, 3).map((attraction, idx) => (
              <div key={attraction} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <div className="w-1 h-1 bg-blue-500 rounded-full" />
                <span>{attraction}</span>
              </div>
            ))}
            {city.attractions.length > 3 && (
              <div className="text-xs text-blue-600 cursor-pointer hover:underline">
                +{city.attractions.length - 3} more attractions
              </div>
            )}
          </div>
        </div>

        {/* Season and Travel Info */}
        <div className="flex items-center gap-4 mb-6 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-green-600" />
            <span className="text-slate-700 dark:text-slate-300">Best: {city.popularSeason}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-purple-600" />
            <span className="text-slate-700 dark:text-slate-300">{city.reviews} travelers</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white group/btn">
            <Car className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
            Book Trip
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="px-4 hover:bg-slate-50 dark:hover:bg-slate-700">
            <Play className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
    </Card>
  );
};

const CityShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' or 'grid'
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState(cities);

  const filters = ['All', 'Heritage', 'Nature', 'Beaches', 'Hill Stations', 'Culture'];

  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 3;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter cities
  useEffect(() => {
    let filtered = cities;
    
    if (selectedFilter !== 'All') {
      filtered = filtered.filter(city => 
        city.bestFor.some(tag => tag.toLowerCase().includes(selectedFilter.toLowerCase())) ||
        city.highlights.toLowerCase().includes(selectedFilter.toLowerCase())
      );
    }
    
    if (searchTerm) {
      filtered = filtered.filter(city => 
        city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.attractions.some(attraction => 
          attraction.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    setFilteredCities(filtered);
    setCurrentSlide(0);
  }, [selectedFilter, searchTerm]);

  const totalSlides = Math.ceil(filteredCities.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

  return (
    <>
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <section className="py-12 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Premium Travel Destinations
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Discover Amazing
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Destinations
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore India's most captivating cities with our premium travel services. 
              From cultural heritage to natural beauty, each destination offers unique experiences.
            </p>
          </div>

          {/* Enhanced Controls */}
          <div className="mb-8 lg:mb-12">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode('carousel')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    viewMode === 'carousel' 
                      ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Carousel
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Grid
                </button>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 lg:gap-3 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium transition-all duration-300 ${
                    selectedFilter === filter
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Cities Display */}
          {viewMode === 'carousel' ? (
            <div className="relative mb-12 lg:mb-16">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className={`grid gap-6 ${
                        itemsPerSlide === 3 ? 'grid-cols-1 lg:grid-cols-3' : 
                        itemsPerSlide === 2 ? 'grid-cols-1 md:grid-cols-2' : 
                        'grid-cols-1'
                      }`}>
                        {filteredCities
                          .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                          .map((city, index) => (
                            <CityCard key={city.id} city={city} index={index} />
                          ))
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              {totalSlides > 1 && (
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button
                    onClick={prevSlide}
                    className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-slate-700"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </button>

                  <div className="flex gap-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentSlide === index 
                            ? 'bg-blue-600 w-8' 
                            : 'bg-slate-300 dark:bg-slate-600 hover:bg-blue-400 w-2'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-slate-700"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Grid View
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 lg:mb-16">
              {filteredCities.map((city, index) => (
                <CityCard key={city.id} city={city} index={index} />
              ))}
            </div>
          )}

          {/* Enhanced CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready for Your Next Adventure?</h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Book your premium travel experience with professional drivers, GPS tracking, and 24/7 support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
                  onClick={() => scrollTo('destinations')}
                >
                  
                  <MapPin className="w-5 h-5 mr-2" />
                  View All Destinations
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600"
                  onClick={() => scrollTo('booking')}
>
                  <Car className="w-5 h-5 mr-2" />
                  Custom Trip Planner
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CityShowcase;