/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // eslint-disable-line

function CardForPortfolio({
  image = "",
  category = "Category",
  // totalLike = "0",
  title = "Title",
}) {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }

    return () => {
      document.body.classList.remove("active-modal");
    };
  }, [modal]);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="box btn_shadow ">
        <button
          type="button"
          className="img"
          onClick={toggleModal}
          aria-label="Open modal"
        >
          <img src={image} alt="card" />
        </button>
        <div className="category d_flex">
          <button type="button" onClick={toggleModal}>
            {category}
          </button>
          {/* <label>
            <i className="far fa-heart" /> {totalLike}
          </label> */}
        </div>
        <div className="title">
          <button type="button" onClick={toggleModal}>
            {title}
          </button>
          <a
            href="#popup"
            className="arrow"
            onClick={toggleModal}
            aria-label="Open modal"
          >
            {/* <i className="fas fa-arrow-right" /> */}
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className="modal">
          <button
            type="button"
            onClick={toggleModal}
            className="overlay"
            aria-label="Open modal"
          />
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <img src={image} alt="modal" />
            </div>
            <div className="modal-text right">
              <span>Featured - Design</span>
              <h1>{title}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate distinctio assumenda explicabo veniam temporibus
                eligendi.
              </p>
              <p>
                Consectetur adipisicing elit. Cupiditate distinctio assumenda.
                dolorum alias suscipit rerum maiores aliquam earum odit, nihil
                culpa quas iusto hic minus!
              </p>
              <div className="button f_flex mtop">
                {/* <button type="button" className="btn_shadow">
                  LIKE THIS <i className="far fa-thumbs-up" />
                </button> */}
                <button type="button" className="btn_shadow">
                  VIEW PROJECT
                  <FontAwesomeIcon icon="fas fa-chevron-right" />
                </button>
              </div>
              <button
                type="button"
                className="close-modal btn_shadow"
                onClick={toggleModal}
                aria-label="Close"
              >
                <FontAwesomeIcon icon="fas fa-times" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

CardForPortfolio.propTypes = {
  image: PropTypes.string,
  category: PropTypes.string,
  // totalLike: PropTypes.string,
  title: PropTypes.string,
};

export default CardForPortfolio;
