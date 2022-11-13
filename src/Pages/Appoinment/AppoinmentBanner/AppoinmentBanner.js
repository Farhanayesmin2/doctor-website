
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            alt="dentist chair"
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            {/* <p>You Have Seleted Date: {format(selectedDate, "PP")} </p> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
