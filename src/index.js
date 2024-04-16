import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { ChakraProvider } from "@chakra-ui/react";
import  theme  from "./theme";
// TODO ver si voy a usar chakra para el estilo o no import { ChakraProvider } from "@chakra-ui/react";//


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>
);
