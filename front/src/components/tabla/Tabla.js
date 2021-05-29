import React from "react";
import "./tabla.scss";
import { FormattedMessage } from "react-intl";
export const Tabla = (props, { setLanguage }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>
            {" "}
            <FormattedMessage id="device" />
          </th>
          <th>
            {" "}
            <FormattedMessage id="value" />
          </th>
        </tr>
      </thead>
      <tbody>
        {props.devices &&
          props.devices.map((device, index) => (
            <tr key={index}>
              <th>{index}</th>
              <td>{device.id}</td>
              <td>{device.name}</td>
              <td>{device.desired.value}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
