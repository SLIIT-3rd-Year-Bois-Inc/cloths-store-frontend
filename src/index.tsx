import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "flowbite";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import CustomerRouter from "./routes/customer";
import StockRouter from "./routes/stock";
import ReviewsRouter from "./routes/reviews";
import OrderRouter from "./routes/order";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CustomerRouter />
        <StockRouter />
        <ReviewsRouter />
        <OrderRouter />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
