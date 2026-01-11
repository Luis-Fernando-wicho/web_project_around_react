export default function NewCard(props) {
  const { primero, segundo } = props;
  return (
    <>
      <label className="popup__form__label">
        <input
          className="popup__input popup__input_namePlace"
          type="text"
          name="title"
          placeholder={primero}
          minLength="2"
          maxLength="30"
          required
        />
        <span id="error-title" className="popup__error"></span>
      </label>
      <label className="popup__form__label">
        <input
          className="popup__input popup__input_URL"
          type="url"
          name="link"
          placeholder={segundo}
          required
        />
        <span id="error-link" className="popup__error"></span>
      </label>
      <button
        id="SaveButton"
        className="popup__button popup__button_places"
        disabled
      >
        Guardar
      </button>
    </>
  );
}
