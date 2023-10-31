import axios from "axios";
import http from "../utils/http";
const getStates = (id: number) => {
  return axios.get(
    `https://geodata.phplift.net/api/index.php?type=getStates&countryId=${id}`
  );
};
const getCities = (countryId: number, stateId: number) => {
  return axios.get(
    `https://geodata.phplift.net/api/index.php?type=getCities&countryId=${countryId}&stateId=${stateId}`
  );
};
const getCountries = () => {
  return axios.get(
    `https://geodata.phplift.net/api/index.php?type=getCountries`
  );
};
export const HandbookService = {
  getStates,
  getCities,
};
