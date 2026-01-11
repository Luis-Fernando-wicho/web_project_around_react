export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <>
      <dialog
        id="myDialog"
        closedby="any"
        className={`popup popup__avatar ${!title ? "img_open" : ""}`}
      >
        <button style={{ color: "red" }} onClick={onClose}>
          X
        </button>
        <form method="dialog" className="popup__form" noValidate>
          <h3 className="popup__title">{title}</h3>
          {children}
        </form>
      </dialog>
    </>
  );
}
