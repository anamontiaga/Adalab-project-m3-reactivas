import React from "react";
import PropTypes from "prop-types";
import Input from "./Inputs";
import ImageInput from "./ImageInput";
import "../stylesheets/scss/components/ImageInput.scss";

class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.fr = new FileReader();
    this.myFileField = React.createRef();
    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }
  handleFilePicker() {
    this.myFileField.current.click();
  }

  uploadImage(e) {
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener("load", this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }
  getPreview(isDefault, image) {
    return !isDefault ? { backgroundImage: `url(${image})` } : { backgroundImage: `data:url(../images/sensejs_nomi.jpg)` };
  }

  render() {
    const actionToPerform = this.props.updateEventInfo;
    const infoUser = this.props.data;
    const imagePreview = { backgroundImage: `url(${this.props.imageCard})` };

    return (
      <div>
        <Input type="text" id="name" label="Nombre completo" value={infoUser.name} classInput="js-name" name="userFullName" placeholder="Hermione Granger" action={actionToPerform} required />

        <Input type="text" id="job" label="Puesto" value={infoUser.job} classInput="js-job" name="userJob" placeholder="Front-end developer" action={actionToPerform} required />

        <div className="get-avatar fill-in_item">
          <label className="fill-in_label" htmlFor="img-profile">
            Imagen de perfil
          </label>
          <div className="fill-in_buttonImg-wrapper">
            <button className="fill-in_button js__profile-trigger" type="button" id="img-profile" onClick={this.handleFilePicker} name="img-profile">
              Añadir imagen{" "}
            </button>
            <input type="file" ref={this.myFileField} className="action_hiddenField js__profile-upload-btn" onChange={this.uploadImage} name="photo" id="img-selector" />
            <div className="img-profile_preview js__profile-preview" style={imagePreview}></div>
          </div>
        </div>

        <Input type="tel" id="phone" label="Teléfono" value={infoUser.phone} classInput="js-phone" name="userPhone" placeholder="+34 678334765" minLength="9" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$" action={actionToPerform} />

        <Input type="email" id="email" label="Email" value={infoUser.email} classInput="js-email" name="userEmail" placeholder="hermione-granger@gmail.com" pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" action={actionToPerform} required />
        <Input type="text" id="linkedin" label="Linkedin" value={infoUser.linkedin} classInput="js-linkedin" name="userLinkedin" placeholder="hermionegranger" action={actionToPerform} required />
        <Input type="text" id="github" label="Github" value={infoUser.github} classInput="js-github" name="userGithub" placeholder="hermione-granger" action={actionToPerform} required />
      </div>
    );
  }
}

ImageInput.propTypes = {
  updateEventInfo: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  userFullName: PropTypes.string.isRequired,
  userJob: PropTypes.string.isRequired,
  userPhone: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userLinkedin: PropTypes.string.isRequired,
  userGithub: PropTypes.string.isRequired,
  actionToPerform: PropTypes.func.isRequired
};

export default InputContainer;
