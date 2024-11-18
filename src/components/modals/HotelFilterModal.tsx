import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomButton from "../CustomButton";
import CustomInput from "../customInputs/Index";

const HotelFilterModal: IModal = ({ isOpen, setIsOpen, data }) => {

  const initialValues: HotelSearchParams = {
    dest_id: data.dest_id || "",
    search_type: data.search_type || "",
    arrival_date: "",
    departure_date: "",
    adults: "1",
    children_age: "",
    room_qty: "1",
    page_number: "1",
    price_min: "",
    price_max: "",
    sort_by: "",
    categories_filter: "",
    units: "",
    temperature_unit: "",
    languagecode: "en-us",
    currency_code: "AED",
  };

  const validationSchema = Yup.object().shape({
    arrival_date: Yup.string()
      .required("Arrival date is required")
      .matches(/^\d{4}-\d{2}-\d{2}$/, "Date must be in the format YYYY-MM-DD"),
    departure_date: Yup.string()
      .required("Departure date is required")
      .matches(/^\d{4}-\d{2}-\d{2}$/, "Date must be in the format YYYY-MM-DD"),
    adults: Yup.number()
      .required("Number of adults is required")
      .min(1, "At least 1 adult is required"),
    children_age: Yup.string().matches(
      /^(\d{1,2})(,\d{1,2})*$/,
      "Children's ages must be a comma-separated list of numbers"
    ),
    room_qty: Yup.number().min(1, "At least 1 room is required"),
    price_min: Yup.number().nullable(),
    price_max: Yup.number().nullable(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
       const param = {
         ...values,
         dest_id: data.dest_id,
         search_type: data.search_type,
       };
       try {
         await data.searchHotels(param);
         setIsOpen(false); // Close the modal on success
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
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <h3 className="text-lg font-bold text-center">Search Hotels</h3>
        <form onSubmit={formik.handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="font-medium text-sm">Arrival Date</label>
            <CustomInput
              type="date"
              name="arrival_date"
              placeholder="YYYY-MM-DD"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.arrival_date}
            />
            {formik.touched.arrival_date && formik.errors.arrival_date && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.arrival_date}
              </p>
            )}
          </div>

          <div>
            <label className="font-medium text-sm">Departure Date</label>
            <CustomInput
              type="date"
              name="departure_date"
              placeholder="YYYY-MM-DD"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.departure_date}
            />
            {formik.touched.departure_date && formik.errors.departure_date && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.departure_date}
              </p>
            )}
          </div>

          <div>
            <label className="font-medium text-sm">Adults</label>
            <CustomInput
              type="number"
              name="adults"
              placeholder="Number of Adults"
              min={1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.adults}
            />
          </div>

          <div>
            <label className="font-medium text-sm">Children's Ages</label>
            <CustomInput
              type="text"
              name="children_age"
              placeholder="Comma-separated ages (e.g., 0,5,10)"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.children_age}
            />
          </div>

          <div>
            <label className="font-medium text-sm">Rooms</label>
            <CustomInput
              type="number"
              name="room_qty"
              placeholder="Number of Rooms"
              min={1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.room_qty}
            />
          </div>

          <div>
            <label className="font-medium text-sm">Price Range</label>
            <div className="flex gap-2">
              <CustomInput
                type="number"
                name="price_min"
                placeholder="Min"
                min={1}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price_min || ""}
              />
              <CustomInput
                type="number"
                name="price_max"
                placeholder="Max"
                min={1}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price_max || ""}
              />
            </div>
          </div>

          {data.searchHotelApiError && <p className="text-red-500 text-sm">{data.searchHotelApiError}</p>}

          <CustomButton
            type="submit"
            className="w-full"
            disabled={formik.isSubmitting || data.searchHotelLoading}
          >
            {data.searchHotelLoading ? "Searching..." : "Search Hotels"}
          </CustomButton>

          <CustomButton
            onClick={() => setIsOpen(false)}
            className="w-full mt-4"
            color="text-red-600"
            bgColor="bg-red-10"
          >
            Cancel
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default React.memo(HotelFilterModal);
