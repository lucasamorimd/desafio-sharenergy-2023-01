import { Header } from "../../components/Header";
import "./styles.css";
function NotFound() {
  return (
    <>
      <Header />
      <section id="geral">
        <div className="container">
          <section>
            <div className="widget">
              <div className="widget_title">
                <div className="widget_title_text">404</div>
                <div className="widget_title_bar"></div>
              </div>
              <div className="widget_body flex">
                <article>Página não encontrada</article>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
export { NotFound };
