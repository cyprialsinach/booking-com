import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomButton from "../../../../../components/CustomButton";
import { useGetHotelDestination } from "../../services/Home.service";

interface ChooseLocationModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ChooseLocationModal: React.FC<ChooseLocationModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const { getDestination, loading } = useGetHotelDestination();

  const formik = useFormik({
    initialValues: {
      location: "",
    },
    validationSchema: Yup.object().shape({
      location: Yup.string()
        .required("Location is required")
        .min(2, "Location must be at least 2 characters long"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const data = await getDestination(values.location);
        console.log("Fetched data:", data); // Handle the data
        setIsOpen(false); // Close modal on success
      } catch (error) {
        console.error("Error fetching hotels:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

   
    if (!isOpen) return null;
    
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-bold text-center">Search for Hotels</h3>
        <p className="text-center text-md text-greyAsh mt-2">
          Enter a location to find hotels in that area.
        </p>
        <form onSubmit={formik.handleSubmit} className="mt-4 space-y-4">
          <div>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter location (e.g., city, country)"
              className="w-full px-4 py-2 border rounded-md text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
            />
            {formik.touched.location && formik.errors.location && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.location}
              </p>
            )}
          </div>
          <CustomButton
            type="submit"
            className="w-full"
            disabled={formik.isSubmitting || loading}
          >
            {loading ? "Loading..." : "Find Hotels"}
          </CustomButton>
        </form>

        <CustomButton
          onClick={() => setIsOpen(!isOpen)}
          className="w-full mt-4"
          color="text-primary"
          bgColor="bg-red-10"
          disabled={formik.isSubmitting || loading}
        >
          Cancel
        </CustomButton>
      </div>
    </div>
  );
};

export default React.memo(ChooseLocationModal);
