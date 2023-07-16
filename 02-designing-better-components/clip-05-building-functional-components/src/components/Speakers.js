import SpeakersToolbar from "./SpeakersToolbar";
import SpeakerList from "./SpeakerList";
import { useState } from 'react';

function Speakers() {
    const [showSessions, setShowSessions] = useState(true);
    return (
        <>
            <SpeakersToolbar showSessions={showSessions}
                setShowSessions={setShowSessions} />
            <SpeakerList showSessions={showSessions}/>
        </>
    );
}

export default Speakers;