import "./Button.css";

const Button = ({ nextSlide, prevSlide }) => {
  return (
    <div className="Buttons">
      <i className="fa fa-forward btn-next" onClick={nextSlide}></i>
      <i className="fa fa-forward btn-prev" onClick={prevSlide}></i>
    </div>
  );
};
export default Button;
