import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Widget } from "../../components/Widget";

import "./styles.css";

function ClientDetail() {
  const params = useParams();
  return (
    <Header active="clients">
      <section>
        <Widget title="Detalhar Cliente">
          <></>
        </Widget>
      </section>
      <SideMenu title="">
        <></>
      </SideMenu>
    </Header>
  );
}
export { ClientDetail };
