import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context";
import "./index.css";
import Home from "pages/Home/Home";
import BookList from "books/BookList/BookList";
import BookDetails from "books/BookDetails/BookDetails";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
