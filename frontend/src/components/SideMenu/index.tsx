import "./styles.css";
type SideMenuChield = {
  filter: JSX.Element;
};
function SideMenu({ filter }: SideMenuChield) {
  return (
    <aside>
      <div className="widget">
        <div className="widget_title">
          <div className="widget_title_text">Filtros</div>
          <div className="widget_title_bar"></div>
        </div>
        <div className="widget_body flex filters">{filter}</div>
      </div>
    </aside>
  );
}
export { SideMenu };
