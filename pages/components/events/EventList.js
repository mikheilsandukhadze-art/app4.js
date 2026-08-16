function EventList(props) {
  const { events } = props;

  return (
    <div>
        <ul>
            {items.map(event => <li key={event.id}>{event.title}</li>)}
        </ul>
    </div>
  );
}