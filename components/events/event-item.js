import Link from "next/link";

import classes from './event-item.module.css'

function EventItems(props) {
    const { title, image, date, location, id } = props;

    const huumanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: numeric,
    });
    const formattedAddress = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{date}</time>
                    </div>
                    <div>
                        <address>ADDRESS</address>
                    </div>
                </div>
                <div>
                    <Link href="/">Explore Event</Link>
                </div>
            </div>
        </li>
    );
}

export default EventItems;