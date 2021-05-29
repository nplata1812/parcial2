import React, { useEffect, useState } from "react";
import "./HomesList.scss";
import { getHomes } from "../../services/utils";
import { Card } from "../../components/card/Card";
import { FormattedMessage } from "react-intl";
export const HomesList = ({ setLanguage }) => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("homes") === null) setHomes("Loading...");
      else setHomes(JSON.parse(localStorage.getItem("homes")));
    } else {
      getHomes().then((data) => {
        setHomes(data);
        localStorage.setItem("homes", JSON.stringify(data));
      });
    }
  }, []);

  return (
    <div className="container home">
      <h1>
        {" "}
        <FormattedMessage id="spaces" />
      </h1>
      {homes && homes.map((home) => <Card info={home}></Card>)}
    </div>
  );
};
