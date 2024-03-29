import PropTypes from "prop-types";

const ImageItem = ({ title = "", src = "", updated = "" }) => {
  const transformDate = (updated) => {
    const date = new Date(updated);

    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  };

  return (
    <div className="img-item-wrapper">
      <div className="img-wrapper">
        <img src={src} alt={title} />
      </div>

      <div className="description-area">
        <div className="date">{transformDate(updated)}</div>
      </div>
    </div>
  );
};

ImageItem.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  updated: PropTypes.string,
};

export default ImageItem;
