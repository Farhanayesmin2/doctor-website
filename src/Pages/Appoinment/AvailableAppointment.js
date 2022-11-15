import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import ModalShare from "../../Components/BookingModal/ModalShare/ModalShare";
import AppoinmentCard from "./AppoinmentCard";



const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentTake, setAppoinmentTake] = useState([]);
  const [treatment, setTreatment]= useState(null);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setAppoinmentTake(data));
  }, []);
  return (
    <div className="text-center mt-16">
      <section>
        <h1 className="text-2xl font-serif text-emerald-500">
          Available Appointment on:{" "}
          <p className="text-red-600"> {format(selectedDate, "PP")} </p>
        </h1>
        <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {appointmentTake.map((appointment) => (
            <AppoinmentCard
              appointment={appointment}
              key={appointment._id}
              setTreatment={setTreatment}
            ></AppoinmentCard>
          ))}{
            treatment && <ModalShare 
            selectedDate={ selectedDate }
            
            treatment={treatment}  ></ModalShare>
          }
  
        </div>
      </section>
    </div>
  );
};

export default AvailableAppointment;
