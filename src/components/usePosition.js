import { useState, useEffect } from "react";

const usePosition = () => {
  const [position, setPosition] = useState({});
  const [locationError, setError] = useState(null);

  const onChange = (position) => {
    setPosition({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  const onError = (error) => {
    setError(error);
  };

  useEffect(() => {
    if (!navigator || !navigator.geolocation) {
      setError("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(onChange, onError);
  }, []);

  return { ...position, locationError };
};

export default usePosition;
