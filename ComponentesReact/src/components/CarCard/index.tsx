import carImg from "../../assets/imgs/car.png";
import "./styles.css";

export default function CarCard() {
  return (
    <div className="dsct-car-card">
      <img src={carImg} alt="Carro" />
      <h3>Lorem ipsum dolor</h3>
    </div>
  );
}
