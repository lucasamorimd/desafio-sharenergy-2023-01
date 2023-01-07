import { Header } from "../../components/Header";
import { Widget } from "../../components/Widget";
import "./styles.css";
function NotFound() {
  return (
    <Header active="">
      <section>
        <Widget title="404">
          <article>Página não encontrada</article>
        </Widget>
      </section>
    </Header>
  );
}
export { NotFound };
