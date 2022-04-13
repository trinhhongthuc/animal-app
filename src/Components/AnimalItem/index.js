import "./animalItem.scss";

const AnimalItem = ({ animal }) => {
  return (
    <div className="animal-item">
      <div className="animal-item--information">
        <img
          className="information-img"
          src={
            animal.primary_photo_cropped !== null
              ? animal.primary_photo_cropped.small
              : ""
          }
          alt="animal"
        />
        <span className="information-age">{animal.age}</span>
      </div>
      <div className="animal-item--note">
        <h2 className="note-title">{animal.name}</h2>
        <p className="note-description">{animal.description}</p>
        <div className="note-animal">
          <p>
            <span>species:</span>
            <span>{animal.species}</span>
          </p>
          <p>
            <span>Size:</span>
            <span>{animal.size}</span>
          </p>
          <p>
            <span>Gender:</span>
            <span>{animal.gender}</span>
          </p>
        </div>
        <div className="note-contact">
          <h4>Contact</h4>
          <div className="note-contact--wrapper">
            <p>
              <span>Email:</span>
              <span>{animal.contact.email}</span>
            </p>
            <p>
              <span>Phone:</span>
              <span>{animal.contact.phone}</span>
            </p>
            <p>
              <span>Address:</span>
              <span>{animal.contact.address.city}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalItem;
