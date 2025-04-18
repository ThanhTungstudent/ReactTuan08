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
    <div className="w-full p-5 space-y-5">
      <div className="flex flex-row gap-2">
        <img src="./Lab_05/Squares four 1.png" alt="" />
        <h1 className="text-2xl font-bold text-black">Overview</h1>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {overviews &&
          overviews.map((overview, index) => (
            <div
              key={index}
              className="flex w-full items-center justify-center"
            >
              <Card overview={overview} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Overview;
