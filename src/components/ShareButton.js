import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/scss/components/Share.scss";

const ShareButton = props => {
  const { twitterData, title, icon, name } = props;

  return (
    <div className="completed_content hidden">
      <h3 className="completed_content_title">{title}</h3>
      <a href={`${twitterData}`} className="completed_content_url" target="_self" rel="noopener noreferrer">
        {twitterData}
      </a>
      <button type="submit" className="completed_content_button">
        {" "}
        <a href={`https://twitter.com/intent/tweet?text=Aqui tienes mi tarjeta: ${twitterData}`} className="completed_content_button_twitter" target="_blank" rel="noopener noreferrer">
          <i className={icon}></i>
          {name}
        </a>
      </button>
    </div>
  );
};

ShareButton.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ShareButton;
