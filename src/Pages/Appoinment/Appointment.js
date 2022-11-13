import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner/AppoinmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner
            selectedDate={selectedDate}
            setSelectedDate ={setSelectedDate}
            ></AppoinmentBanner>
            <AvailableAppointment
                selectedDate={selectedDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;