import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/scss/components/PalettesContainer.scss";
import Palette from "./Palette";

const PalettesContainer = props => {
  const { title, updateCheckboxColor } = props;
  return (
    <div className="js-collapsible-content">
      <div className="tittlePalettes">
        <div className="design_palette-description">{title}</div>
        <div className="palettes js-palettes">
          <Palette color1="item_1" color2="item_2" color3="item_3" id="design1" actionToPerform={updateCheckboxColor} value="1" htmlFor="design1" />
          <Palette color1="item_4" color2="item_5" color3="item_6" id="design2" actionToPerform={updateCheckboxColor} value="2" htmlFor="design2" />
          <Palette color1="item_7" color2="item_8" color3="item_9" id="design3" actionToPerform={updateCheckboxColor} value="3" htmlFor="design3" />
        </div>
      </div>
    </div>
  );
};

PalettesContainer.propTypes = {
  updateCheckboxColor: PropTypes.func.isRequired
};

export default PalettesContainer;
