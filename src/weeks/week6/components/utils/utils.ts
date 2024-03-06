import { TemperatureUnit, Temperature } from "../../types/types";

export const getTempDisplay = (temp: Temperature, unit: TemperatureUnit): string => {
  return unit === 'C' ? `${temp.celcius}°C` : `${temp.fahrenheit}°F`;
}