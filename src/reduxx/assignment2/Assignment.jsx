import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {adding, deleting} from "./actions";

const Assignment = () => {
  const assState = useSelector((state) => state.assReducer);

  const numberOfPassengers = useSelector(
    (state) => state.assReducer.passenger.length
  );
  const dispach = useDispatch();
  // let [form, setForm] = useState({
  //  // id: (numberOfPassengers) + 1,
  //   from: "",
  //   to: "",
  //   date: "",
  //   guests: "",
  //   class: "",
  // });

  const [from, setFrom] = useState("");
  const [to, seTo] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [clas, setClas] = useState("");

  console.log(assState);

  // function onChangeHandler(key, value) {
  //   setForm((formData) => ({
  //     ...formData,

  //     [key]: value,
  //   }));
  // }

  function show(e) {
    e.preventDefault();

    let data = {
      id: numberOfPassengers + 1,
      from: from,
      to: to,
      date: date,
      guests: guests,
      class: clas,
    };
    dispach(adding(data));
    //   console.log(data);
    // console.log(numberOfPassengers)
  }

  return (
    <div>
      <header id="header">
        <div className="container">
          <img src="/img/lws-logo.svg" alt="logo" className="logo" />
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>

      <section>
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form className="first-hero lws-inputform">
              <div className="des-from">
                <p>Destination From</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Frame.svg" alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="from"
                    id="lws-from"
                    required
                    onChange={(e) => setFrom(e.target.value)}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              <div className="des-from">
                <p>Destination To</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Frame.svg" alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="to"
                    id="lws-to"
                    required
                    onChange={(e) => seTo(e.target.value)}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              <div className="des-from">
                <p>Journey Date</p>
                <input
                  type="date"
                  className="outline-none px-2 py-2 w-full date"
                  name="date"
                  id="lws-date"
                  required
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="des-from">
                <p>Guests</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Vector (1).svg" alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="guests"
                    id="lws-guests"
                    required
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                  </select>
                </div>
              </div>

              <div className="des-from !border-r-0">
                <p>className</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Vector (3).svg" alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="ticketClass"
                    id="lws-ticketClass"
                    required
                    onChange={(e) => setClas(e.target.value)}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Business</option>
                    <option>Economy</option>
                  </select>
                </div>
              </div>

              <button
                onClick={(e) => show(e)}
                className="addCity"
                type="submit"
                id="lws-addCity"
              >
                <svg
                  width="15px"
                  height="15px"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="text-sm">Book</span>
              </button>
            </form>
          </div>
        </div>

        <div className="table-container">
          <table className="booking-table">
            <thead className="bg-gray-100/50">
              <tr className="text-black text-left">
                <th>Destination From</th>
                <th>Destination To</th>
                <th className="text-center">Journey Date</th>
                <th className="text-center">Guests</th>
                <th className="text-center">Class</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody
              className="divide-y divide-gray-300/20"
              id="lws-previewBooked"
            >
              {assState.passenger.map((passenger, index) => {
                return (
                  <tr key={index} className="lws-bookedTable text-black">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <p className="lws-bookedFrom">{passenger.from}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="lws-bookedTo">{passenger.to}</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <p className="lws-bookedDate">{passenger.date}</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <p className="lws-bookedGustes">{passenger.guests}</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="lws-bookedClass"> {passenger.class} </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center gap-4">
                        <button className="lws-remove" onClick={()=>dispach(deleting(passenger.id))} >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Assignment;
