import Link from "next/link";

function EventItems(props) {
    const { title, image, date, location, id } = props;

    const huumanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: numeric,
    });
    const formattedAddress = location.replace(', ', '\n')

    return (
        <li>
            <img src="" alt="" />
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