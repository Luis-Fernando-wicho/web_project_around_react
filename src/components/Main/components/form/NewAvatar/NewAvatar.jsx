export default function NewCard() {
  return (
    <>
      <label className="popup__form__label">
        <input
          className="popup__input popup__input_avatar"
          type="url"
          name="link"
          placeholder="Enlace de la imagen"
          required
        />
        <span id="error-title" className="popup__error"></span>
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
