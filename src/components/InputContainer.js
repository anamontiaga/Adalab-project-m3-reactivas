import React from "react";
import Input from "./Inputs";
import ImageInput from "./ImageInput";
import "../stylesheets/scss/components/ImageInput.scss";

class InputContainer extends React.Component {
  render() {
    return (
      <div>
        <Input
          type="text"
          id="full_name"
          label="Nombre completo"
          classInput="js-name"
          name="name"
          placeholder="Hermione Granger"
        />

        <Input
          type="text"
          id="job"
          label="Puesto"
          classInput="js-job"
          name="job"
          placeholder="Front-end developer"
        />

        <ImageInput
          name="Imagen de perfil"
          valueInput="Añadir imagen"
          classRealButton="fill-in_button js__profile-trigger"
          displayPicture="img-profile_preview js__profile-preview"
        />

        <Input
          type="tel"
          id="phone"
          label="Teléfono"
          classInput="js-phone"
          name="phone"
          placeholder="+34 678334765"
          type="tel"
          minLength="9"
          pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
        />
        <Input
          type="text"
          id="email"
          label="Email"
          classInput="js-email"
          name="email"
          placeholder="hermione-granger@gmail.com"
          type="email"
          pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
        />
        <Input
          type="text"
          id="linkedin"
          label="Linkedin"
          classInput="js-linkedin"
          name="linkedin"
          placeholder="hermionegranger"
          type="text"
        />
        <Input
          type="text"
          id="github"
          label="Github"
          classInput="js-github"
          name="github"
          placeholder="hermione-granger"
          type="text"
        />
      </div>
    );
  }
}

export default InputContainer;
