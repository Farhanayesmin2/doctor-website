import React, { useState } from 'react';
import ModalShare from '../../Components/BookingModal/ModalShare/ModalShare';
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
              <ModalShare ></ModalShare>
        </div>
    );
};

export default Appointment;