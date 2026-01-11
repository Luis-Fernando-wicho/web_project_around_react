import avatar from "../../assets/01.jpg";
import lapiz from "../../assets/lapiz.svg";
import editarName from "../../assets/changename.svg";
import { useState } from "react";
import NewCard from "./components/form/NewCard/NewCard";
import NewAvatar from "./components/form/NewAvatar/NewAvatar";
import Popup from "./components/Popup/Popup";
import Card from "./components/Card/Card";
import ImageOpen from "./components/form/Imageopen/ImageOpen";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard />,
    primero: "Nombre del lugar",
    segundo: "url",
  };
  const newNamePopup = {
    title: "Nuevo nombre",
    children: <NewCard />,
    primero: "Nombre",
    segundo: "ocupacion",
  };
  const newAvatarPopup = { title: "Nuevo avatar", children: <NewAvatar /> };
  /* const imageComponent = { title: "", children: <ImageOpen /> }; */

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }
  return (
    <>
      <main className="main">
        <div className="profile">
          <div
            className="profile__avatar"
            onClick={() => handleOpenPopup(newAvatarPopup)}
          >
            <img className="profile__img" src={avatar} alt="" />
            <div className="profile__hover">
              <img className="profile__svg" src={lapiz} alt="svg de un lapiz" />
            </div>
          </div>

          <div className="profile__info">
            <h2 className="profile__info profile__info_name">Fernando Wicho</h2>
            <button
              id="infoedit"
              className="profile__info profile__info_edit"
              onClick={() => handleOpenPopup(newNamePopup)}
            ></button>
            <h2 className="profile__info profile__info_ocupation">ingeniero</h2>
          </div>
          <button
            className="profile__add-button"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
            <img
              className="profile__add-button profile__add-button_image"
              src={editarName}
              aria-label="Add card"
              alt="cambiar nimbre"
              type="button"
            />
          </button>
        </div>

        <ul className="elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              popup={() => {
                handleOpenPopup({
                  children: (
                    <ImageOpen link={card.link} description={card.name} />
                  ),
                });
              }}
            />
          ))}
        </ul>
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
        {/* {popup && (
          <NewCard primero={popup.primero} segundo={popup.segundo}></NewCard>
        )} */}
      </main>
    </>
  );
}
