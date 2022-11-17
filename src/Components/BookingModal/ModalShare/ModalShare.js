import React from "react";

const ModalShare = ({ treatment,selectedDate,  setTreatment}) => {
  const { name,slots } = treatment;

const handleBooking = event =>{
event.preventDefault();
const form = event.target;
const slot = form.slot.value;
const names = form.names.value;
const email =form.email.value;
const phone = form.number.value;
const date = form.date.value;

const booking = {

treatment: name,
appoinmentDate: date,   
patient: names,
slot,
phone,
email,
}
console.log(booking);
setTreatment(null)
}



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
          <h3 className="text-lg font-bold text-emerald-400">{name}</h3>
          <p className="py-4">
           Hey,
          </p>

          <form  onSubmit={handleBooking}  className="grid  grid-cols-1 gap-3">
            <input
              type="text"
              name='date'
             value={selectedDate} disabled
              className="input input-bordered input-accent w-full max-w-xs"
            />
           <select name='slot' className="select select-accent w-full max-w-xs">
  {
    slots.map((slot, i)=> <option value={slot}
    key={i}  >{slot}</option>)
  }
</select>
            <input
              type="text"
              name='names'
              placeholder="Your Name"
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <input
              type="email"
              name='email'
              placeholder="Your Email "
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <input
              type="number"
              name='number'
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
