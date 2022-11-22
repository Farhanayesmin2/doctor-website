import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import ModalShare from "../../Components/BookingModal/ModalShare/ModalShare";
import Loading from "../Shared/Loading/Loading";
import AppoinmentCard from "./AppoinmentCard";

const AvailableAppointment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appointmentTake = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentTake", date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/services?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //   fetch("http://localhost:5000/services")
  //     .then((res) => res.json())
  //     .then((data) => setAppoinmentTake(data));
  // }, []);
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
          ))}
          {treatment && (
            <ModalShare
              selectedDate={selectedDate}
              setTreatment={setTreatment}
              refetch={refetch}
              treatment={treatment}
            ></ModalShare>
          )}
        </div>
      </section>
    </div>
  );
};

export default AvailableAppointment;
