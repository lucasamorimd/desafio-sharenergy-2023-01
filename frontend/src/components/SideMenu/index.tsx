import "./styles.css";
type SideMenuChield = {
  children: JSX.Element;
};
function SideMenu({ children }: SideMenuChield) {
  return (
    <aside>
      <div className="widget">
        <div className="widget_title">
          <div className="widget_title_text">Filtros</div>
          <div className="widget_title_bar"></div>
        </div>
        <div className="widget_body flex filters">{children}</div>
      </div>
    </aside>
  );
}
export { SideMenu };
