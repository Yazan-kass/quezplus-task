import { createContext, useState } from "react";

export const AppContext = createContext({
  guess: [],
  userName: "",
  originalNamber: 0,
  startTime: 0,
  endTime: 0,
  setGuess: () => {},
  setUserName: () => {},
  setOriginalNamber: () => {},
  setStartTime: () => {},
  setEndTime: () => {},
});

export const AppContextProvider = (props) => {
  let [guessArray, setGuessArray] = useState([]);
  let [userName, setUserName] = useState("");
  let [startTime, setStartTime] = useState(0);
  let [endTime, setEndTime] = useState(0);
  let [originalNamber, setOriginalNamber] = useState(0);
  return (
    <AppContext.Provider
      value={{
        userName: userName,
        startTime: startTime,
        endTime: endTime,
        originalNamber: originalNamber,
        guess: guessArray,
        setGuess: setGuessArray,
        setUserName: setUserName,
        setStartTime: setStartTime,
        setEndTime: setEndTime,
        setOriginalNamber: setOriginalNamber,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
