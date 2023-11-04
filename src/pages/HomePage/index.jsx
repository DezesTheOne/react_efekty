import { Ukol1 } from "../../components/Ukol1";
import { Ukol2 } from "../../components/Ukol2";
import { Ukol3 } from "../../components/Ukol3";
import { Ukol4 } from "../../components/Ukol4";
import { Ukol5 } from "../../components/Ukol5";
import "./style.css";

export const HomePage = () => {
  return (
    <>
      <h1>Cvičení React useEffect</h1>
      <main>
        <article>
          <h2>Úkol 1</h2>
          <div className="content">
            <Ukol1 />
          </div>
        </article>
        <article>
          <h2>Úkol 2</h2>
          <div className="content">
            <Ukol2 />
          </div>
        </article>
        <article>
          <h2>Úkol 3</h2>
          <div className="content">
            <Ukol3 />
          </div>
        </article>
        <article>
          <h2>Úkol 4</h2>
          <div className="content">
            <Ukol4 />
          </div>
        </article>
        <article>
          <h2>Úkol 5</h2>
          <div className="content">
            <Ukol5 />
          </div>
        </article>
      </main>
    </>
  );
};
