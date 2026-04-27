import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // https://jsonplaceholder.typicode.com/posts
  // https://jsonplaceholder.typicode.com/users

  useEffect(() => {
    // TODO: Reset state when url changes
    // TODO: Use fetch() to call the url
    // TODO: Parse the JSON response
    // TODO: Update data, loading, and error states appropriately
    // TODO: Handle cleanup to avoid setting state on unmounted components
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchApiData = async () => {
      setLoading(true);
      setData(null);
      setError(null);
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error("Failed to fetch...");
        }
        const fetchedData = await response.json();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }
        setError(error.message);
        setLoading(false);
      }
    };
    fetchApiData();
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
