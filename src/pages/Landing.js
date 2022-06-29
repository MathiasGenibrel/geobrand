import React from "react";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import { useFetch } from "../hooks/useFetch";

import { useInput } from "../hooks/useInput";

export const Landing = () => {
  const [city, cityHandler] = useInput("");
  const [activity, activityHandler] = useInput("");
  const [radius, radiusHandler] = useInput(0);

  const [cityResponse, citySubmitHandler] = useFetch(
    "GET",
    "https://geo.api.gouv.fr/communes",
    200
  );

  const submitHandler = (event) => {
    event.preventDefault();

    const cityRequestContent = {
      nom: city,
      codePostal: 66300,
      fields: "nom,code,codesPostaux,centre,departement,region,population",
      format: "json",
      geometry: "centre",
    };

    citySubmitHandler({ params: cityRequestContent });
  };

  const formContent = {
    button: {
      submit: "Afficher les entreprises",
    },
    submitHandler: submitHandler,
    inputs: [
      {
        type: "text",
        text: "Ville",
        value: city,
        changeHandler: cityHandler,
      },
      {
        type: "select",
        text: "Activité Principale",
        options: [
          { value: "en", text: "Hello" },
          { value: "es", text: "Holà" },
          { value: "fr", text: "Bonjour" },
        ],
        value: activity,
        changeHandler: activityHandler,
      },
      {
        type: "range",
        text: "Dans un rayon autour de",
        min: 0,
        max: 4,
        step: 1,
        value: radius,
        changeHandler: radiusHandler,
      },
    ],
  };

  return (
    <>
      <Header />
      <Hero formContent={formContent} />
      {JSON.stringify(cityResponse)}
    </>
  );
};
