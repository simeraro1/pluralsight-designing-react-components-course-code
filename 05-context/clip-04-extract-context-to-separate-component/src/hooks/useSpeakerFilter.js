import { useState } from "react";

useSpeakerFilter = (startingShowSessions) => {
    const [showSessions, setShowSessions] = useState(startingShowSessions);

    return {
        showSessions,
        setShowSessions
    };
}

export default useSpeakerFilter;