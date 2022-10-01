import { useSelector } from 'react-redux'
import eventAsset from '../Assets/eventImage.png'


export default function Events() {
    const { events } = useSelector((state) => ({ ...state }));
    return (
        <>
            <img id='event-image' src={eventAsset} alt='event image' />

            <div id='event-name-and-host'>
                <h3>{events.eventName}</h3>
                <p>Hosted by {events.hostName}</p>

            </div>

            <div id='date-and-location'>
                <div className='date'>
                    <p id='start-date'>{events.startDate}</p>
                    <p id='end-date'>to {events.endDate}</p>
                </div>

                <div className='location'>
                    <p id='location'>{events.location}</p>
                </div>
            </div>
        </>
    )
}

