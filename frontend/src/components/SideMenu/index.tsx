import { Widget } from "../Widget";
import "./styles.css";
type SideMenuChield = {
  children: JSX.Element;
  title: string;
};
function SideMenu({ children, title = "Ações" }: SideMenuChield) {
  return (
    <aside>
      <Widget title={title}>
        <div className="actionsArea">{children}</div>
      </Widget>
    </aside>
  );
}
export { SideMenu };
