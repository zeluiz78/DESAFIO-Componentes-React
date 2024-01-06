import CarCard from "../../../components/CarCard";
import "./styles.css";

export default function SectionCars() {
  return (
    <section id="section-cars">
      <h2 className="section-title">Venha nos visitar</h2>
      <div className="dsct-cards-ctr">
        <CarCard />
        <CarCard />
      </div>
    </section>
  );
}
