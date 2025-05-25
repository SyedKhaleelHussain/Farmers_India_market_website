import { useState, useEffect } from "react";
import { Cloud, Thermometer, Droplets } from "lucide-react";

interface WeatherData {
  temperature: number;
  humidity: number;
  description: string;
  location: string;
}

const weatherCodeToDescription = (code: number) => {
  const map: { [key: number]: string } = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };
  return map[code] || "Unknown";
};

// Helper: determine season by month
const getSeason = (month: number): "spring" | "summer" | "fall" | "winter" => {
  if ([3, 4, 5].includes(month)) return "spring";
  if ([6, 7, 8].includes(month)) return "summer";
  if ([9, 10, 11].includes(month)) return "fall";
  return "winter";
};

// Helper: classify temperature to cold, moderate, hot
const classifyTemperature = (tempC: number): "cold" | "moderate" | "hot" => {
  if (tempC <= 10) return "cold";
  if (tempC > 10 && tempC <= 25) return "moderate";
  return "hot";
};

// Big plant database categorized by season and temperature class
const plantsBySeasonAndTemp: {
  [season: string]: {
    [tempClass: string]: string[];
  };
} = {
  spring: {
    cold: [
      "Primrose",
      "Cyclamen",
      "Snowdrop",
      "Hellebore",
      "Lungwort",
      "Pieris",
      "Forget-me-not",
      "Daffodil",
      "Iris reticulata",
      "Hyacinth",
    ],
    moderate: [
      "Tulip",
      "Azalea",
      "Peony",
      "Lilac",
      "Sweet William",
      "Lily of the valley",
      "Bleeding Heart",
      "Bluebell",
      "Camellia",
      "Foxglove",
    ],
    hot: [
      "Bougainvillea",
      "Jasmine",
      "Hibiscus",
      "Oleander",
      "Plumeria",
      "Lantana",
      "Gardenia",
      "Magnolia",
      "Mandevilla",
      "Frangipani",
    ],
  },
  summer: {
    cold: [
      "Lavender",
      "Hosta",
      "Astilbe",
      "Fuchsia",
      "Daylily",
      "Columbine",
      "Bee Balm",
      "Phlox",
      "Coral Bells",
      "Brunnera",
    ],
    moderate: [
      "Sunflower",
      "Marigold",
      "Zinnia",
      "Petunia",
      "Geranium",
      "Snapdragon",
      "Dahlia",
      "Cosmos",
      "Coneflower",
      "Black-eyed Susan",
    ],
    hot: [
      "Cactus",
      "Succulents",
      "Agave",
      "Desert Rose",
      "Yucca",
      "Oleander",
      "Bougainvillea",
      "Lantana",
      "Plumeria",
      "Jade Plant",
    ],
  },
  fall: {
    cold: [
      "Chrysanthemum",
      "Aster",
      "Sedum",
      "Japanese Anemone",
      "Goldenrod",
      "Heather",
      "Helenium",
      "Montauk Daisy",
      "Toad Lily",
      "Ornamental Kale",
    ],
    moderate: [
      "Camellia",
      "Cyclamen",
      "Pansy",
      "Viola",
      "Snapdragon",
      "Ornamental Cabbage",
      "Hellebore",
      "Primrose",
      "Japanese Maple",
      "Dogwood",
    ],
    hot: [
      "Marigold",
      "Sunflower",
      "Dahlia",
      "Cosmos",
      "Zinnia",
      "Geranium",
      "Lantana",
      "Petunia",
      "Salvia",
      "Tithonia",
    ],
  },
  winter: {
    cold: [
      "Poinsettia",
      "Holly",
      "Snowdrop",
      "Cyclamen",
      "Witch Hazel",
      "Camellia",
      "Winter Jasmine",
      "Heather",
      "Hellebore",
      "Mahonia",
    ],
    moderate: [
      "Christmas Cactus",
      "Amaryllis",
      "Paperwhite Narcissus",
      "Cyclamen",
      "Camellia",
      "Hellebore",
      "Witch Hazel",
      "Primrose",
      "Ivy",
      "Pansy",
    ],
    hot: [
      "Jasmine",
      "Gardenia",
      "Hibiscus",
      "Plumeria",
      "Bougainvillea",
      "Oleander",
      "Lantana",
      "Mandevilla",
      "Jade Plant",
      "Desert Rose",
    ],
  },
};

const WeatherPanel = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [recommendedPlants, setRecommendedPlants] = useState<string[]>([]);

  useEffect(() => {
    // Reverse geocode lat/lon to get city name
    const reverseGeocode = async (lat: number, lon: number): Promise<string> => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
        );
        const data = await res.json();
        return (
          data.address.city ||
          data.address.town ||
          data.address.village ||
          data.address.county ||
          "Unknown Location"
        );
      } catch {
        return "Unknown Location";
      }
    };

    const fetchWeather = async (lat: number, lon: number) => {
      try {
        // Get weather
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relative_humidity_2m`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch weather data");
        const data = await response.json();

        // Get city name
        const city = await reverseGeocode(lat, lon);

        // Get humidity for current hour
        const currentHour = new Date().getHours();
        const humidity = data.hourly?.relative_humidity_2m?.[currentHour] ?? 50;

        setWeather({
          temperature: Math.round(data.current_weather.temperature),
          humidity: Math.round(humidity),
          description: weatherCodeToDescription(data.current_weather.weathercode),
          location: city,
        });
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Error fetching weather");
        setLoading(false);
      }
    };

    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
      () => {
        setError("Failed to get location");
        setLoading(false);
      }
    );
  }, []);

  // Update recommended plants when weather changes
  useEffect(() => {
    if (!weather) return;

    const month = new Date().getMonth() + 1; // 1-12
    const season = getSeason(month);
    const tempClass = classifyTemperature(weather.temperature);

    const plants = plantsBySeasonAndTemp[season]?.[tempClass] || [];

    // Pick 4 random plants (or less if fewer available)
    const shuffled = plants.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);

    setRecommendedPlants(selected);
  }, [weather]);

  if (loading)
    return (
      <div className="glassmorphism rounded-xl p-6 text-center">
        Loading weather info...
      </div>
    );
  if (error)
    return (
      <div className="glassmorphism rounded-xl p-6 text-center">{error}</div>
    );
  if (!weather) return null;

  return (
    <div className="glassmorphism rounded-xl p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a6a38]/10 to-transparent"></div>
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Thermometer className="text-[#f8c05a]" />
              <span className="text-2xl font-semibold">
                {weather.temperature}°C
              </span>
            </div>
            <p className="text-gray-400">Temperature</p>
          </div>

          <div className="text-center transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Droplets className="text-[#f8c05a]" />
              <span className="text-2xl font-semibold">{weather.humidity}%</span>
            </div>
            <p className="text-gray-400">Humidity</p>
          </div>

          <div className="text-center transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Cloud className="text-[#f8c05a]" />
              <span className="text-2xl font-semibold">{weather.description}</span>
            </div>
            <p className="text-gray-400">{weather.location}</p>
          </div>
        </div>

        <div className="mt-6 glassmorphism rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-white">
            Recommended Plants for Your Climate
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recommendedPlants.map((plant) => (
              <div
                key={plant}
                className="text-center p-3 rounded bg-[#1a231c] border border-[#2a6a38]/20 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(42,106,56,0.2)]"
              >
                {plant}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPanel;
