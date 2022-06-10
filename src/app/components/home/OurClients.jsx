import React from "react";
// import { Carousel } from "react-bootstrap";
// import { toAbsoluteUrl } from "theme/helpers/AssetsHelpers";
import "./testimonial.scss";

export const OurClients = () => {
  const cards = [
    {
      image:
        "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=",
      name: "Vanessa Martinez",
      text: "Haber adquerido una póliza de salud, fue la mejor inversión que pude haber hecho, por mi bienestar",
      id: 1,
    },
    {
      image:
        "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=",
      name: "Pedro García",
      text: "Encontré un seguro de vida, que se ajusta a mi necesidad y presupuesto",
      id: 2,
    },
    {
      image:
        "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=",
      name: "Julio González.",
      text: "El seguro por kilómetros, me permite pagar solo lo que realmente consumo, excelente e innovador producto",
      id: 3,
    },
  ];

  const renderTestimonial = (items) => {
    return items.map((item) => (
      <div key={item.id} className="testimonial">
        <div class="testimonial-header">
          <img className="testimonial-avatar" src={item.image} alt="avatar" />
          <h2 className="testimonial-name">{item.name}</h2>
        </div>
        <p className="testimonial-text">{item.text}</p>
      </div>
    ));
  };

  return (
    <>
      <div className="testimonial-wrapper">{renderTestimonial(cards)}</div>
    </>
  );
};
