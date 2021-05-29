import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomesList } from "../pages/homes-list/HomesList";
import { HomesDetail } from "../pages/homes-list/HomesDetail";
import { Navbar } from "../components/nav/Navbar";
import { IntlProvider } from "react-intl";
import { LOCALES } from "../i18n/locales";
import mensajes from "../i18n/messages";

export const Context = React.createContext();
const local = navigator.language;
let lang;
if (local === "en") {
  lang = LOCALES.ENGLISH;
} else {
  lang = LOCALES.SPANISH;
}
export const AppRouter = () => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(mensajes[lang]);
  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "en") {
      setMessages(mensajes["en-us"]);
    } else {
      setMessages(mensajes["es-co"]);
    }
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider locale={locale} messages={messages}>
        <Router>
          <Navbar setLanguage={setLocale}></Navbar>
          <Switch>
            <Route exact path="/">
              <HomesList setLanguage={setLocale} />
            </Route>
            <Route
              path="/homes/:idHome"
              component={HomesDetail}
              setLanguage={setLocale}
            />
            <Route path="/homes" setLanguage={setLocale}>
              <HomesList />
            </Route>
          </Switch>
        </Router>
      </IntlProvider>
    </Context.Provider>
  );
};
