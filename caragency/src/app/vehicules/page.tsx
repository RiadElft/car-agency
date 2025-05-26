'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const vehicles = [
  {
    id: 1,
    brand: "BMW",
    model: "Série 5",
    year: 2023,
    price: 65000,
    mileage: 15000,
    fuel: "Essence",
    transmission: "Automatique",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    features: ["GPS", "Climatisation", "Cuir", "Toit ouvrant"]
  },
  {
    id: 2,
    brand: "Audi",
    model: "A6",
    year: 2023,
    price: 58000,
    mileage: 22000,
    fuel: "Diesel",
    transmission: "Automatique",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    features: ["GPS", "Climatisation", "Cuir", "Caméra de recul"]
  },
  {
    id: 3,
    brand: "Mercedes",
    model: "Classe E",
    year: 2024,
    price: 72000,
    mileage: 8000,
    fuel: "Hybride",
    transmission: "Automatique",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    features: ["GPS", "Climatisation", "Cuir", "Conduite autonome"]
  },
  {
    id: 4,
    brand: "Porsche",
    model: "Cayenne",
    year: 2023,
    price: 95000,
    mileage: 12000,
    fuel: "Essence",
    transmission: "Automatique",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    features: ["GPS", "Climatisation", "Cuir", "Sport Package"]
  },
  {
    id: 5,
    brand: "BMW",
    model: "X5",
    year: 2022,
    price: 78000,
    mileage: 28000,
    fuel: "Diesel",
    transmission: "Automatique",
    image: "https://images.unsplash.com/photo-1549399431-bb1c6443e545?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    features: ["GPS", "Climatisation", "Cuir", "7 places"]
  },
  {
    id: 6,
    brand: "Tesla",
    model: "Model S",
    year: 2024,
    price: 89000,
    mileage: 5000,
    fuel: "Électrique",
    transmission: "Automatique",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    features: ["Autopilot", "Écran tactile", "Cuir", "Supercharger"]
  }
];

export default function VehiclesPage() {
  const [filters, setFilters] = useState({
    brand: '',
    fuel: '',
    priceRange: '',
    year: ''
  });

  const filteredVehicles = vehicles.filter(vehicle => {
    if (filters.brand && vehicle.brand !== filters.brand) return false;
    if (filters.fuel && vehicle.fuel !== filters.fuel) return false;
    if (filters.year && vehicle.year.toString() !== filters.year) return false;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (vehicle.price < min || (max && vehicle.price > max)) return false;
    }
    return true;
  });

  const resetFilters = () => {
    setFilters({ brand: '', fuel: '', priceRange: '', year: '' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2066&q=80"
            alt="Car dealership"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Nos Véhicules</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Découvrez notre sélection exclusive de véhicules haut de gamme
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Filtrer les véhicules</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Marque</label>
              <select
                value={filters.brand}
                onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Toutes les marques</option>
                <option value="BMW">BMW</option>
                <option value="Audi">Audi</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Porsche">Porsche</option>
                <option value="Tesla">Tesla</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Carburant</label>
              <select
                value={filters.fuel}
                onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Tous carburants</option>
                <option value="Essence">Essence</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybride">Hybride</option>
                <option value="Électrique">Électrique</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Prix</label>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Tous prix</option>
                <option value="0-60000">Moins de 60,000€</option>
                <option value="60000-80000">60,000€ - 80,000€</option>
                <option value="80000-100000">80,000€ - 100,000€</option>
                <option value="100000-">Plus de 100,000€</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Année</label>
              <select
                value={filters.year}
                onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Toutes années</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </div>
          
          <button
            onClick={resetFilters}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Réinitialiser les filtres
          </button>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredVehicles.length} véhicule{filteredVehicles.length > 1 ? 's' : ''} trouvé{filteredVehicles.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 relative">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {vehicle.brand} {vehicle.model}
                  </h3>
                  <span className="text-sm text-gray-500">{vehicle.year}</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Kilométrage:</span>
                    <span>{vehicle.mileage.toLocaleString()} km</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Carburant:</span>
                    <span>{vehicle.fuel}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Transmission:</span>
                    <span>{vehicle.transmission}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Équipements:</p>
                  <div className="flex flex-wrap gap-1">
                    {vehicle.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {vehicle.features.length > 3 && (
                      <span className="text-xs text-gray-500">+{vehicle.features.length - 3} autres</span>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {vehicle.price.toLocaleString()}€
                  </span>
                  <Link
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200"
                  >
                    Contacter
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucun véhicule ne correspond à vos critères de recherche.</p>
            <button
              onClick={resetFilters}
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 