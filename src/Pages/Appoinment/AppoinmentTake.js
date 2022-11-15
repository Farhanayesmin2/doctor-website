import React from 'react';


const AppoinmentTake = ({appointment}) => {
    const {name,slots} = appointment;
    return (
        <div className='my-6'>
            {/* //bg-gradient-to-t from-stone-400 via-slate-300 to-stone-500 */}
            <div className="card text-center shadow-2xl border border-emerald-500">
  <div className="card-body">
    <h2 className="card-title text-emerald-700">{name}</h2>
    <p>Available Slot: <span className='text-red-600'>{slots.length > 0 ? slots[0] : 'Try Another day'} </span> </p>
    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
    <div className="card-actions justify-end">
    <label htmlFor="appoinment-book" className="btn text-white bg-gradient-to-b from-stone-100 via-stone-900 to-stone-400">Appointment Book</label>
       
    </div>
  </div>
</div>
        </div>
    );
};

export default AppoinmentTake;