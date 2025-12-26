import { useState } from "react";
import logo from "../images/Vector.svg";
import avatar from "../images/01.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="page">
        <header class="header">
          <img class="header__logo" src={logo} alt="around" />
          <div class="header__line"></div>
        </header>

        <main class="main">
          <div class="profile">
            <div class="profile__avatar">
              <img class="profile__img" src={avatar} alt="" />
              <div class="profile__hover">
                <img
                  class="profile__svg"
                  src="./images/lapiz.svg"
                  alt="svg de un lapiz"
                />
              </div>
            </div>

            <div class="profile__info">
              <h2 class="profile__info profile__info_name"></h2>
              <button
                id="infoedit"
                class="profile__info profile__info_edit"
              ></button>
              <h2 class="profile__info profile__info_ocupation"></h2>
            </div>
            <button class="profile__add-button">
              <img
                class="profile__add-button profile__add-button_image"
                src="/images/Vector (1).svg"
                alt=""
              />
            </button>
          </div>

          <ul class="elements"></ul>
        </main>

        <footer class="footer">
          <p class="footer__text">© 2024 Around The U.S.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
