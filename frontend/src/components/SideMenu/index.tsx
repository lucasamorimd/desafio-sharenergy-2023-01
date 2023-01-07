import "./styles.css";
type SideMenuChield = {
  children: JSX.Element;
  title: string;
};
function SideMenu({ children, title = "Ações" }: SideMenuChield) {
  return (
    <aside>
      <div className="widget">
        <div className="widget_title">
          <div className="widget_title_text">{title}</div>
          <div className="widget_title_bar"></div>
        </div>
        <div className="widget_body flex filters">{children}</div>
      </div>
    </aside>
  );
}
export { SideMenu };
