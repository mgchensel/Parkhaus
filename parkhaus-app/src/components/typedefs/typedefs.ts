//URL für das Servlet hier eingeben
export const DEFAULTSERVLETURL = "localhost:4000";

//Dieses Interface wird für die fetch funktion verwenden um auf das Servlet zuzugreifen,
export interface IUseGetDataProps {
  url: string;
  method?: "GET" | "POST" | "UPDATE" | "DELETE";
  payload?: string;
  condition?: Array<any>;
}

export interface IJSONString {
  [key: string]: string /* das hier akzeptiert alle Einträge, 
  wenn man spezifischere braucht bzw man sollte das eigentlich spezifizieren, 
  dann das hier löschen und folgende beschreibung beachten:
  Bei Bedarf kann man hier bestimmte einträge spezifizieren und einfach filtern lassen
  z.B. sowas:
  name: string;
  alter: number;
  dadurch werden nur die hier erwähnten einträge angezeigt was eine bessere Übersicht ermöglicht */;
}
