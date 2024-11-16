import axiosInstance from "../../../../api/AxiosInstance";
import React from "react";
import { useNavigate } from "react-router-dom";

export function useGetHotelDestination() {
      const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const getDestination = async (query: string) => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await axiosInstance("/api/v1/hotels/searchDestination", {
        params: { query },
      });
     navigate("/hotels", { state: { destinations: response.data.data } });
    } catch (error) {
      console.error("Error fetching destination data:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    getDestination,
  };
}
export function useSearchHotel() {}
