import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { shipments } from "../constants";
import { Shipment } from "../types";

interface SearchContextType {
  trackingId: string;
  setTrackingId: (id: string) => void;
  currentShipment: Shipment | null;
  searchShipment: (id: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [trackingId, setTrackingId] = useState(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("trackingId") || "";
  });
  const [currentShipment, setCurrentShipment] = useState<Shipment | null>(null);

  const searchShipment = (id: string) => {
    const shipment = shipments.find((shipment) => shipment.trackingId === id);
    setCurrentShipment(shipment || null);
  };

  useEffect(() => {
    if (trackingId) {
      searchShipment(trackingId);
    }
  }, [trackingId]);

  return (
    <SearchContext.Provider
      value={{
        trackingId,
        setTrackingId,
        currentShipment,
        searchShipment,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
