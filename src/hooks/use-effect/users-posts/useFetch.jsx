import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("setInterval called");
    }, 1000);

    return () => {
      console.log("IntervalId", intervalId);
      clearInterval(intervalId);
    };
  }, [url]);

  return { isPending, data, error };
}
