import React, { createContext, useState } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

const SpeakerFilterContext = createContext();

function SpeakerFilterProvider({ children, startingShowSessions }) {
    const { showSessions, setShowSessions } = useSpeakerFilter(
        startingShowSessions
    );
    
    return (
        <SpeakerFilterContext.Provider
        value={{ showSessions, setShowSessions }}
        >
        {children}
        </SpeakerFilterContext.Provider>
    );
}

export { SpeakerFilterProvider, SpeakerFilterContext };