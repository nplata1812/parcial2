import React from "react";
import "./CardRoom.scss";

export const CardRoom = ({ room, handleRoomState }) => {
  return (
    <div
      className="card card-room"
      style={{ width: "12rem", height: "14rem" }}
      onClick={() => {
        console.log("room->", room);
        handleRoomState(room);
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{room.name}</h5>
        {room.type === "room" ? (
          <img
            src="/living-room.png"
            className="card-img-top"
            alt="Icon Living Room"
          />
        ) : (
          <img
            src="/kitchen.png"
            className="card-img-top"
            alt="Icon Kitchen Room"
          />
        )}
      </div>
    </div>
  );
};
