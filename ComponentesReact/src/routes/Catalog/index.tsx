import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionCars from "./SectionCars";
import SectionComments from "./SectionComments";
import "./styles.css";

export default function Catalog() {
  return (
    <>
      <Header />
      <main>
        <SectionCars />
        <SectionComments />
      </main>
      <Footer />
    </>
  );
}
