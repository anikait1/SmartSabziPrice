import { useState, useEffect } from "react";

const usePosition = () => {
  const [position, setPosition] = useState({});
  const [locationError, setLocationError] = useState(null);

  const onChange = (position) => {
    setPosition({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  // more descriptive error messages to be added
  const onError = (error) => {
    setLocationError(error);
  };

  useEffect(() => {
    if (!navigator || !navigator.geolocation) {
      setLocationError("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(onChange, onError);
  }, []);

  return { ...position, locationError };
};

export default usePosition;
