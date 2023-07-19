import { useState } from "react";

function useSpeakerFilter(startingShowSessions, startingEventYear) {
  const [showSessions, setShowSessions] = useState(startingShowSessions);
  const [eventYear, setEventYear] = useState(startingEventYear);
  const [searchQuery, setSearchQuery] = useState("");

  const EVENT_YEARS = [
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",

  ]
  return {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEARS,
  };
}

export default useSpeakerFilter;
