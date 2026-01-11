export default function Popup(props) {
  const { onClose, link, description } = props;
  return (
    <>
      <div method="dialog" className="img_open">
        <img src={link} alt="" className="img_open__img" />
        <p className="img_open__text">{description}</p>
      </div>
    </>
  );
}
