import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

function Overview() {
  const [overviews, setOverviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const overviewRes = await fetch("http://localhost:3000/overview");

        if (!overviewRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const overviewData = await overviewRes.json();

        setOverviews(overviewData);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="w-full px-4 py-5 space-y-5">
      {/* Header */}
      <div className="flex items-center gap-2">
        <img src="./Lab_05/Squares four 1.png" alt="Overview Icon" className="w-6 h-6" />
        <h1 className="text-xl sm:text-2xl font-bold text-black">Overview</h1>
      </div>
  
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {overviews &&
          overviews.map((overview, index) => (
            <Card key={index} overview={overview} />
          ))}
      </div>
    </div>
  );
}

export default Overview;
