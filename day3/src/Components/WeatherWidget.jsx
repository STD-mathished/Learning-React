export default function WeatherWidget() {
    const key = import.meta.env.VITE_WEATHER_API_KEY
    const url = 'http://api.weatherapi.com/v1';
  return (
    <div className="rounded-2xl shadow p-4 bg-white">
      <h2 className="text-lg font-bold mb-2">Weather</h2>
      <div className="text-4xl font-semibold">16°</div>
      <div className="text-sm text-gray-500">Paris</div>
      <div className="text-xs text-gray-400">Monday; 24 April</div>
      <div className="mt-2 text-sm">
        <p>21° / 13°</p>
        <p>Humidity: 76%</p>
        <p>Wind: 11 km/h</p>
      </div>
    </div>
  );
};

