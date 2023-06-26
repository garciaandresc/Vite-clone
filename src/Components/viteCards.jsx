export default function ViteCard(props) {
  const CardIcon = `${props.icon}`;
  const CardTitle = `${props.Title}`;
  const CardText = `${props.Text}`;

  return (
    <div className="CardWrapper">
      <div className="Bulb-Icon">{CardIcon}</div>
      <p className="Card-title-1">{CardTitle}</p>
      <p className="Card-text-1">{CardText}</p>
    </div>
  );
}
