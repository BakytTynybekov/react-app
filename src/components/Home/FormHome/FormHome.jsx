import Form from "../../Contacts/form/Form";
import "./formHome.scss";

function FormHome({ title }) {
  return (
    <div className="formHome">
      <div className="formHome__inner">
        <div className="formHome__item">
          <h2 className="section-title">{title}</h2>
          <Form />
        </div>
        <div className="formHome__item">
          <img src="https://atfdigital.ru/assets/img/contact-img.png" alt="" />
        </div>
      </div>
    </div>
  );
}
export default FormHome;
