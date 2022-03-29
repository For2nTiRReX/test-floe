import PropTypes from "prop-types";

import "./ToggleButton.css";

const ToggleButton = ({ toggleCallback }) => {
  return (
    <div className="list-grid-toggle" onClick={toggleCallback}>
      <div className="icon">
        <div className="icon-bar" />

        <div className="icon-bar" />

        <div className="icon-bar" />
      </div>
    </div>
  );
};

ToggleButton.propTypes = {
  toggleCallback: PropTypes.func
}

export default ToggleButton;
