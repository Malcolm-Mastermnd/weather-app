import { createContext, useState } from "react";
import { TemperatureUnit } from "../../types/types";

/** Context **/
export interface UserPreferencesContextType {
  temperatureUnit: TemperatureUnit;
  setTemperatureUnit: (unit: TemperatureUnit) => void;
}

export const UserPreferencesContext = createContext<UserPreferencesContextType>({
  temperatureUnit: 'F',
  setTemperatureUnit: () => {},
});

/** Provider **/
interface UserPreferencesProviderProps {
  children: React.ReactNode;
}

export const UserPreferencesProvider = ({
  children,
}: UserPreferencesProviderProps) => {
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>('F');

  const value = {
    temperatureUnit,
    setTemperatureUnit,
  };

  return (
    <UserPreferencesContext.Provider value={value}>
      {children}
    </UserPreferencesContext.Provider>
  );
}
