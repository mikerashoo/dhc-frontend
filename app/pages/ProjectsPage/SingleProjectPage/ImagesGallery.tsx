import React, { FC, useState } from "react";

type Props = {
  images: string[];
};
const ImagesGallery: FC<Props> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showRemaining, setShowRemaining] = useState(false);
  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="Sprject__gallery">
      <div className="sproject__image-active">
        <img src={images[activeIndex]} alt="Active" />
      </div>
      <div className="sproject__images">
        {images.slice(0, 4).map((image, index) => (
          <div className="sproject__image">
            {index < 3 ? (
              <img
                key={index}
                src={image}
                onClick={() => handleThumbnailClick(index)}
              />
            ) : index === 3 && !showRemaining ? (
              <div
                onClick={() => setShowRemaining(true)}
                className="sproject__image sproject__remaining"
              >
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="sproject__remaining"
                />
                <span>{`+ ${images.slice(4).length} more`}</span>
              </div>
            ) : index === 3 ? (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleThumbnailClick(index)}
              />
            ) : null}
          </div>
        ))}
        {showRemaining &&
          images.map(
            (image, index) =>
              index > 3 && (
                <div className="sproject__image">
                  <img
                    key={index}
                    src={image}
                    onClick={() => handleThumbnailClick(index)}
                    className={index === activeIndex ? "active" : ""}
                  />
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default ImagesGallery;
