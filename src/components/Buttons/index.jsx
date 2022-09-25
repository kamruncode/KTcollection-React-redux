import "./Button.css";

const Buttons = ({ nextSlide, prevSlide }) => {
  return (
    <div className="Buttons">
      <i className="fa fa-forward btn-next" onClick={nextSlide}></i>
      <i className="fa fa-forward btn-prev" onClick={prevSlide}></i>
    </div>
  );
};
export default Buttons;
