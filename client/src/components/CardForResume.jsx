import PropTypes from "prop-types";

function CardForResume({
  title,
  year,
  // rate,
  desc,
}) {
  return (
    <div className="box btn_shadow">
      <div className="title_content d_flex">
        <div className="title">
          <h2>{title}</h2>
          <span>{year}</span>
        </div>
        {/* <div className="rate">
          <button type="button" className="btn_shadow ">
            {rate}
          </button>
        </div> */}
      </div>
      <hr />
      <p>{desc}</p>
    </div>
  );
}

CardForResume.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  // rate: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default CardForResume;
