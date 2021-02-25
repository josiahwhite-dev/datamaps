import { feature } from "topojson-client";
import countries from "../assets/data/mapdata.json";

export const COUNTRIES = feature(countries, countries.objects.countries)
  .features;
