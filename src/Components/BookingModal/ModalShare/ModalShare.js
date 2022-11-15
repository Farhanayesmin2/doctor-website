import React from "react";

const ModalShare = ({ treatment,selectedDate }) => {
  const { name,slots } = treatment;

const handleBooking = event =>{
event.preventDefault()


    
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

          <form className="grid  grid-cols-1 gap-3">
            <input
              type="text"
              name='date'
             value={selectedDate} disabled
              className="input input-bordered input-accent w-full max-w-xs"
            />
           <select name='slot' className="select select-accent w-full max-w-xs">
  {
    slots.map(slot => <option value={slot}  >{slot}</option>)
  }
</select>
            <input
              type="text"
              name='name'
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
