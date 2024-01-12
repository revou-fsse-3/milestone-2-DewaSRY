// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import queryClient from "@features/Query";
import "./index.css";
const queryClient = new QueryClient();
// import PokemonListProvider from "@/context/PokemonList/PokemonListProvider.tsx";
// import FilterProvider from "@/pages/Home/context/FilterProvider.tsx";
// import PokemonSearchProvider from "@/context/PokemonSearch/PokemonSearchProvider.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
