import "./styles.css";

type WidgetChildren = {
  children: JSX.Element | JSX.Element[];
  title: string;
};
function Widget({ children, title }: WidgetChildren) {
  return (
    <div className="widget">
      <div className="widget_title">
        <div className="widget_title_text">{title}</div>
        <div className="widget_title_bar"></div>
      </div>
      <div className="widget_body flex">{children}</div>
    </div>
  );
}
export { Widget };
