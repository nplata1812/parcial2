import React, { useState, useEffect } from "react";
import { getHomeById } from "../../services/utils";
import "./RoomCard.scss";
import "../../components/tabla/Tabla";
import { Tabla } from "../../components/tabla/Tabla";
import PieChart from "../../components/figura/PieChart";
import { FormattedMessage } from "react-intl";

export const HomesDetail = ({ match, setLanguage }) => {
  const [rooms, setRooms] = useState();
  const [devices, setDevices] = useState([]);

  function renderSwitch(param) {
    switch (param) {
      case "Living room":
        return <FormattedMessage id="livinRoom" />;
      case "Kitchen":
        return <FormattedMessage id="kitchen" />;
      case "Dinner room":
        return <FormattedMessage id="dinnerRoom" />;
      default:
        return "none";
    }
  }

  useEffect(() => {
    let idHome = "home" + match.params.idHome;
    if (!navigator.onLine) {
      setRooms(JSON.parse(localStorage.getItem(idHome)).rooms);
    } else {
      getHomeById(match.params.idHome).then((data) => {
        setRooms(data.rooms);
        localStorage.setItem(idHome, JSON.stringify(data));
      });
    }
  }, [match.params.idHome]);
  return (
    <div>
      <h1 style={{ margin: "1rem" }}>
        <FormattedMessage id="myRooms" />
      </h1>
      {rooms &&
        rooms.map((room, index) => (
          <div className="card roomCard" key={index}>
            <p>{renderSwitch(room.name)}</p>
            {room.type === "room" ? (
              <img
                src="/living-room.png"
                className="img-top"
                alt="Icon Room"
                onClick={() => setDevices(room.devices)}
              />
            ) : (
              <img
                src="/kitchen.png"
                className="img-top"
                alt="Icon Kitchen"
                onClick={() => setDevices(room.devices)}
              />
            )}
          </div>
        ))}
      <div style={{ display: "inline-flex" }}>
        <Tabla devices={devices} setLanguage={setLanguage}></Tabla>
      </div>
      <h2 style={{ margin: "1rem" }}>
        {" "}
        <FormattedMessage id="stats" />
      </h2>
      <div style={{ marginLeft: "14rem" }}>
        {rooms && <PieChart info={rooms} setLanguage={setLanguage}></PieChart>}
      </div>
    </div>
  );
};
