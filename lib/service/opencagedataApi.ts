import axios from 'axios';

type CoorditationsProps = {
  latitude: number;
  longitude: number;
};

type OpencageCurrensy = {
  iso_code: string;
  name: string;
  symbol: string;
};

type OpencageResault = {
  annotations: {
    currency: OpencageCurrensy;
  };
};

type OpencageResponse = {
  results: OpencageResault[];
};
export const getUserInfo = async ({
  latitude,
  longitude,
}: CoorditationsProps): Promise<OpencageResponse> => {
  const apiKey = process.env.NEXT_PUBLIC_OPENCAGE_API_KEY;
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}`;

  const { data } = await axios.get<OpencageResponse>(urlPosition, {
    params: {
      key: apiKey,
      language: 'en',
    },
  });

  return data;
};
