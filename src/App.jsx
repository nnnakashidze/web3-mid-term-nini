import { useState, useEffect } from "react";

const App = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ასინქრონული ფუნქცია
    const fetchLaunches = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v4/launches");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setLaunches(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch data");
        setLoading(false);
      }
    };

    fetchLaunches();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className="mb-6 font-bold text-3xl text-center">SpaceX Launches</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {launches &&
          launches.map((launch) => (
            <div
              key={launch.id}
              className="bg-white hover:bg-blue-50 shadow-md p-4 rounded-lg w-72"
            >
              <h2 className="mb-2 font-semibold text-lg text-center">
                Flight Number: {launch.flight_number}
              </h2>
              <p className="mb-1 text-gray-600 text-center">
                Mission: {launch.name}
              </p>
              <p className="text-gray-600 text-center">
                Launch Year: {new Date(launch.date_utc).getFullYear()}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
