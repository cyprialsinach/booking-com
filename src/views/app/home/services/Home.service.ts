import axiosInstance from "../../../../api/AxiosInstance";
import React from "react";
import { toast } from "sonner";
import { homeRoutes } from "../../../../shared/routes/routes";
import { useNavigate } from "react-router";

export function useGetHotelDestination(onSuccess?: () => void) {
  const [data, setData] = React.useState<HotelDestinationRes[]>([]);
  const [apiError, setApiError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const getDestination = async (param: string) => {
    if (!param) return;
    setLoading(true);
    try {
      const { data } = await axiosInstance("/api/v1/hotels/searchDestination", {
        params: { param },
      });
      if (data.status) {
        setData(data.data);
        toast.success(data.message);
        onSuccess?.(); //call on success callback fn after fetching
      } else {
        throw "Could not complete process";
      }
    } catch (error: any) {
      console.error("Error fetching destination data:", error.message);
      setApiError(error.message || "An error occurred");
      toast.error(error.message || "An error occurred while fetching hotels destinations");
      throw error.message;
    } finally {
      setLoading(false);
    }
  };
  return {
    data,
    apiError,
    loading,
    getDestination,
  };
}

export function useSearchHotel() {
    const navigate = useNavigate();
  const [data, setData] = React.useState<HotelSearchRes[]>([]); // Define `HotelSearchRes` type if needed
  const [apiError, setApiError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const searchHotels = async (params: HotelSearchParams) => {
    /**
     * @param params: Object with properties such as:
     *    - dest_id, search_type, arrival_date, departure_date, etc.
     */

    setLoading(true);
    try {
      const { data } = await axiosInstance("/api/v1/hotels/searchHotels", {
        params
      });
      if (data.status) {
        setData(data.data); 
        toast.success("Hotels fetched successfully!");
         navigate(homeRoutes.HotelListPage, { state: data.data });
      } else {
        throw new Error("Failed to fetch hotels");
      }
    } catch (error: any) {
      console.error("Error fetching hotels:", error.message || error);
      setApiError(error.message || "An error occurred");
      toast.error(error.message || "An error occurred while fetching hotels");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    apiError,
    loading,
    searchHotels,
  };
}
