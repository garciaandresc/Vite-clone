import ViteCard from "./Components/viteCards";

export default function App() {
  return (
    <>
      <section className="Hero">
        <div className="container">
          <h1 className="Hero-Title">Vite</h1>
          <h2 className="Hero-h2">
            The Next Generation <br /> Frontend Tooling.
          </h2>
          <p className="Hero-text">
            Get ready for a development environment that
            <br /> can finally catch up with you.
          </p>
        </div>
        <a href="https://vitejs.dev/logo-with-shadow.png">
          <img
            className="Hero-Img"
            src="https://vitejs.dev/logo-with-shadow.png"
            alt=""
          />
        </a>
      </section>
      <div className="Buttons-div">
        <button type="button" className="btn-started">
          Get started
        </button>
        <button className="btn-div">Why Vite?</button>
        <button className="btn-div">View on Github</button>
      </div>
      <section className="list">
        <ViteCard
          icon="💡"
          Title="Instant Server Start"
          Text="On demand file serving over native ESM, no bundling required!"
        />
        <ViteCard
          icon="⚡"
          Title="Lightning Fast HMR"
          Text="Hot Module Replacement (HMR) that stays fast regardless of app size."
        />
        <ViteCard
          icon="🛠️"
          Title="Rich Features"
          Text="Out-of-the-box support for TypeScript, JSX, CSS and more."
        />
        <ViteCard
          icon="📦"
          Title="Optimized Build"
          Text="Pre-configured Rollup build with multi-page and library mode support."
        />
        <ViteCard
          icon="🔩"
          Title="Universal Plugins"
          Text="Rollup-superset plugin interface shared between dev and build."
        />
        <ViteCard
          icon="🔑"
          Title="Fully Typed APIs"
          Text="Flexible programmatic APIs with full TypeScript typing."
        />
      </section>
      <div className="separator"></div>
      <section>
        <div className="Icon-Container">
          <span className="Heart-Icon">❤️</span>
          <p className="Icon-text">
            Vite is free and open source, made <br /> possible by wonderful
            sponsors.
          </p>
        </div>
      </section>
      <section>
        <div className="Sponsosrs-Div">
          <h3>Special Sponsors</h3>
        </div>
      </section>
      <section className="Sponsors-container">
        <div className="Special-sponsors">
          <a href="">
            <img src="https://vitejs.dev/nuxtlabs.svg" alt="" />
          </a>
        </div>
        <div className="Special-sponsors">
          <a href="">
            <img src="https://vitejs.dev/nuxtlabs.svg" alt="" />
          </a>
        </div>
        <div className="Special-sponsors">
          <a href="">
            <img src="https://vitejs.dev/astro.svg" alt="" />
          </a>
        </div>
      </section>
      <section>
        <div className="Sponsosrs-Div-1">
          <h3>Platinum Sponsors</h3>
        </div>
      </section>
      <section className="Sponsors-container">
        <div className="Special-sponsors">
          <a href="">
            <img src="https://vitejs.dev/nuxtlabs.svg" alt="" />
          </a>
        </div>
      </section>
      <section>
        <div className="Sponsosrs-Div-1">
          <h3>Gold Sponsors</h3>
        </div>
      </section>
      <section className="Sponsors-container">
        <div className="Special-sponsors">
          <a href="">
            <img
              src="https://sponsors.vuejs.org/images/tailwind_labs.svg"
              alt=""
            />
          </a>
        </div>
        <div className="Special-sponsors">
          <a href="">
            <img
              src="https://sponsors.vuejs.org/images/tailwind_labs.svg"
              alt=""
            />
          </a>
        </div>
        <div className="Special-sponsors">
          <a href="">
            <img src="https://sponsors.vuejs.org/images/vue_jobs.png" alt="" />
          </a>
        </div>
        <div className="Special-sponsors">
          <a href="">
            <img src="https://sponsors.vuejs.org/images/divriots.png" alt="" />
          </a>
        </div>
        <div className="Special-sponsors">
          <a href="">
            <img
              src="https://sponsors.vuejs.org/images/prefect_io.svg"
              alt=""
            />
          </a>
        </div>
      </section>
      <section className="Sponsors-container">
        <div className="Special-sponsors">
          <a href="">
            <img
              src="https://sponsors.vuejs.org/images/pineview_labs.svg"
              alt=""
            />
          </a>
        </div>
        <div className="Special-sponsors">
          <a href="">
            <img
              src="https://sponsors.vuejs.org/images/pineview_labs.svg"
              alt=""
            />
          </a>
        </div>
        <div className="Special-sponsors">
          <a href="">
            <img src="https://sponsors.vuejs.org/images/mux.svg" alt="" />
          </a>
        </div>
        <div className="Special-sponsors">
          <a href="">
            <img src="https://sponsors.vuejs.org/images/divriots.png" alt="" />
          </a>
        </div>
        <div className="Special-sponsors">
          <a href="">
            <img
              src="https://sponsors.vuejs.org/images/prefect_io.svg"
              alt=""
            />
          </a>
        </div>
      </section>
      <section>
        <div className="Buttons-div-footer">
          <button type="button" className="btn-div">
            Sponsors Vite
          </button>
          <button className="btn-div">Sponsors Evan</button>
        </div>
      </section>
      <div className="separator"></div>
      <footer className="footer">
        <span className="footer-text">
          Released under the MIT License. (b93242e6) <br />
          Copyright © 2019-present Evan You & Vite Contributors
        </span>
      </footer>
    </>
  );
}
