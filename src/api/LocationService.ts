import axios from "axios";

export const getLocation = async () => {
  const datalocation = await axios.get(
    "https://api.ipdata.co?api-key=103d2d6ed44f7690cbece89921a95a4d6a0755fabdfb0f313e2ee827"
  );
  console.log(datalocation.data);
};
