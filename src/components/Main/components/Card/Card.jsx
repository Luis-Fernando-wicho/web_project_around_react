export default function Card(props) {
  const { card, popup } = props;
  return (
    <>
      <li className="element">
        <img
          className="element__image"
          src={card.link}
          onClick={() => {
            popup(card.link, card.name), console.log("hola");
          }}
        />
        <button className="element__trash"></button>
        <div className="element__white">
          <h2 className="element__white element__white_title">{card.name}</h2>
          <button className="element__white element__white_button"></button>
        </div>
      </li>
    </>
  );
}
