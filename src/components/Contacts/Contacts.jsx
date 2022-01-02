import "./contacts.scss";
import Form from "./form/Form";

function Contacts() {
  return (
    <div className="contacts">
      <h2 className="section-title">Contacts</h2>
      <div className="contacts__inner">
        <h3>Оставьте свою заявку и мы вам перезвоним</h3>
        <Form />
      </div>
    </div>
  );
}
export default Contacts;
