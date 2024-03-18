import { useState, useEffect } from "react";

const useEthPrice = () => {
  const [ethPrice, setEthPrice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setEthPrice(data.ethereum.usd);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchEthPrice();

    // Clean up function
    return () => {
      // Perform cleanup if necessary
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return { ethPrice, isLoading, error };
};

export default useEthPrice;
