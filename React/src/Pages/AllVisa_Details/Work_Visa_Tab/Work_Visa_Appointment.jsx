import React, { useState } from "react"; // Adjust the path if needed
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Work_Visa_Appointment = ({ data }) => {
  //(data);
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    working_visa_id: data?.singleWorkingVisaData?.id, // Assuming a default value, modify as needed
    name: "",
    phone: "",
    email: "",
    date_of_birth: "",
    travel_date: "",
    purpuse_title: "",
    purpuse_details: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    //(formData);
    try {
      const response = await axiosPublic.post(
        "/working-visa-appoinment",
        formData
      );
      //(response);
      if (response.status === 200 || response.status === 201) {
        toast.success("Appointment booked successfully!");
        setFormData({
          working_visa_id: data?.singleWorkingVisaData?.id,
          name: "",
          phone: "",
          email: "",
          date_of_birth: "",
          travel_date: "",
          purpuse_title: "",
          purpuse_details: "",
        });
      }
    } catch (error) {
      toast.error("Failed to book appointment. Try again!");
      console.error("API Error:", error);
    }
  };

  return (
    <div className="">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 outline-none border-2 focus:border-clr_primary_text rounded w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="p-3 outline-none border-2 focus:border-clr_primary_text rounded w-full"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-3 outline-none border-2 focus:border-clr_primary_text rounded w-full"
            required
          />
          <input
            type="text"
            name="purpuse_title"
            value={formData.purpuse_title}
            onChange={handleChange}
            placeholder="Purpose Title"
            className="p-3 outline-none border-2 focus:border-clr_primary_text rounded w-full"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-start">
            <p className="pb-1 font-bold">Date of Birth</p>
            <input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              className="p-3 outline-none border-2 focus:border-clr_primary_text rounded w-full"
              required
            />
          </div>
          <div className="text-start">
            <p className="pb-1 font-bold">Tentative Travel Date</p>
            <input
              type="date"
              name="travel_date"
              value={formData.travel_date}
              onChange={handleChange}
              className="p-3 outline-none border-2 focus:border-clr_primary_text rounded w-full"
            />
          </div>
        </div>

        <div className="text-start">
          <p className="pb-1 font-bold">Purpose Details</p>
          <textarea
            name="purpuse_details"
            value={formData.purpuse_details}
            onChange={handleChange}
            placeholder="Purpose Details"
            className="p-3 outline-none border-2 focus:border-clr_primary_text rounded w-full"
            rows="3"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-clr_btn_primary font-bold text-text_title text-white py-2 px-4 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Work_Visa_Appointment;
