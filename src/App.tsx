import CareerApp from "./CareerApp";
import BookApp from "./BookApp";
import "./career.css";
import "./book.css";

export default function App() {
  const params = new URLSearchParams(window.location.search);
  return params.get("view") === "career" ? <CareerApp /> : <BookApp />;
}
