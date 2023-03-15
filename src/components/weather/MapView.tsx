import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

interface MapProps {
  latitude: number;
  longitude: number;
  classStyle?: string;
}

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

const MapView: React.FunctionComponent<MapProps> = ({
  latitude,
  longitude,
  classStyle,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map>();

  useLayoutEffect(() => {
    if (!map) {
      setMap(
        new mapboxgl.Map({
          container: mapRef.current!,
          style: "mapbox://styles/mapbox/streets-v12",
          center: [longitude, latitude],
          zoom: 10,
        })
      );
    } else {
      map.setCenter({ lat: latitude, lon: longitude });
    }
  }, [latitude, longitude]);

  return <div className={classStyle} ref={mapRef}></div>;
};

export default MapView;
