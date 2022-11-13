import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ selectedDate }) => {
  return (
    <div className="text-center mt-16">
          <section>
          <h1 className="text-xl text-lime-500">Available Appointment on: {format(selectedDate, "PP")} </h1>
        </section>
    
    </div>
  );
};

export default AvailableAppointment;
