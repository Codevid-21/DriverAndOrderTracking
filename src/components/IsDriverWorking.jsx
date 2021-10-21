import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dotenv from "dotenv";
dotenv.config();

function IsDriverWorking({ drivers, isWorking, setDrivers, callTheDriversApi }) {

  const handleWorkingSituation = (value, i) => {
    const url = `${process.env.REACT_APP_API_SERVER}/drivers/${value._id}`;
    const options = {
      method: "PUT",
      body: JSON.stringify({ ...value, isWorking: !isWorking }),
      headers: {
        "Content-type": "application/json", // The type of data you're sending
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        drivers[i] = result;
        setDrivers(drivers);
        callTheDriversApi();
        // const customId = "custom-id-status";
        toast.info(`${value.user.name}'s Work Status Changed... `);
      });
  };

  const filteredDrivers = drivers.filter(driver => driver.isWorking === isWorking);
  const lengthOfFilteredDrivers = filteredDrivers.length >= 1;
  return (
    <>
      <div className="workingDrivers">
        <div className="workingDrivers__card">
          <div className="header">
            <h2>{isWorking ? "Working" : "Not Working"} Drivers</h2>
          </div>
          <div className="workingDrivers__info">
            {lengthOfFilteredDrivers ?
              filteredDrivers.map((value, i) => {
                return (
                  <p key={i} onClick={() => handleWorkingSituation(value, i)}>
                    {`${value.user.name} ${value.user.surname}`}
                  </p>
                );
              })
              :
              <>
                <img src="./images/nodriver" alt="no driver"/>
                <p>No <span>{isWorking ? "Working" : "Not Working"}</span> drivers are listed here.</p>
              </>
            }
          </div>
        </div>
      </div>

      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      // limit={1}
      />
    </>
  );
}

export default IsDriverWorking;
