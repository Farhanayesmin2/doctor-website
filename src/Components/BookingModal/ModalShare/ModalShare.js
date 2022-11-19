import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const ModalShare = ({ treatment, selectedDate, setTreatment }) => {
  const { name: treatmentName, slots } = treatment;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const names = form.names.value;
    const email = form.email.value;
    const phone = form.number.value;
    const date = form.date.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: names,
      slot,
      email,
      phone,
    }
    console.log(booking);
    // TODO: send data to the server
    // and once data is saved then close the modal
    // and display success toast
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.acknowledged) {
        //   setTreatment(null);
        //   toast.success("Booking confirmed");
      
        // } else {
        //   toast.error(data.message);
        // }
      });
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="appoinment-book" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appoinment-book"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-emerald-400">{treatmentName}</h3>
          <p className="py-4">Hey,</p>

          <form onSubmit={handleBooking} className="grid  grid-cols-1 gap-3">
            <input
              type="text"
              name="date"
              value={selectedDate}
              disabled
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-accent w-full max-w-xs"
            >
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="names"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="Your Email "
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <input
              type="number"
              name="number"
              placeholder="Phone Number"
              className="input input-bordered input-accent w-full max-w-xs"
            />

            <button className="btn text-white bg-gradient-to-b from-emerald-100 via-emerald-900 to-emerald-400 w-40">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalShare;
