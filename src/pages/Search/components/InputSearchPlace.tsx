import { autocompletePlace } from "@/api/WeatherServices";
import { ILocationAutocomplete } from "@/types/currentLocation";
import { AiOutlineArrowRight } from "react-icons/ai";
import React, { useState } from "react";

interface InputSearchPlaceProps {
  onClickPlace: (lat: number, lng: number) => void;
}

const InputSearchPlace: React.FunctionComponent<InputSearchPlaceProps> = ({
  onClickPlace,
}) => {
  const [key, setKey] = useState("");
  const [results, setResults] = useState<ILocationAutocomplete[]>([]);

  const getResult = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
    if (event.target.value.length >= 3) {
      const results = await autocompletePlace(event.target.value);
      setResults(results.data);
    } else {
      setResults([]);
    }
  };

  const getInfoPlace = (place: ILocationAutocomplete) => {
    onClickPlace(place.lat, place.lon);
    setResults([]);
  };

  return (
    <div className="search input">
      <input
        type="text"
        onChange={(event) => getResult(event)}
        onFocus={(event) => getResult(event)}
        value={key}
        placeholder="Search place ...."
        //onBlur={(event) => console.log(event)}
      />
      {results.length > 0 && (
        <div className="results">
          {results.map((item) => (
            <p key={item.id} onClick={() => getInfoPlace(item)}>
              {item.country} - {item.name} - {item.name}
              <AiOutlineArrowRight />
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputSearchPlace;
