import React, { useState, useEffect } from "react";

const ApiFetch = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from CoinDesk API
    const fetchBitcoinData = async () => {
      try {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBitcoinData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBitcoinData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Bitcoin Price Index</h1>
      {bitcoinData && (
        <>
          <p>Updated: {bitcoinData.time.updated}</p>
          <p>
            USD: ${bitcoinData.bpi.USD.rate}
          </p>
          <p>
            GBP: £{bitcoinData.bpi.GBP.rate}
          </p>
          <p>
            EUR: €{bitcoinData.bpi.EUR.rate}
          </p>
        </>
      )}
    </div>
  );
};

export default ApiFetch;
