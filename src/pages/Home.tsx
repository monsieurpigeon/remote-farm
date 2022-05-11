import { getEphemeride } from "../utils/ephemeride";
import * as moment from "moment";
import "moment/locale/fr";

moment.locale("fr");

export const Home = () => {
  const date = new Date();
  return (
    <>
      <h1>REMOTE.FARM</h1>
      <div>Bienvenue à la ferme</div>
      <div>
        Nous sommes le{" "}
        {date.toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div>{getEphemeride(date)}</div>
    </>
  );
};
