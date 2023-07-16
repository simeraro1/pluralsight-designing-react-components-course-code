import Speaker from "./Speaker";

import ReactPlaceholder from "react-placeholder";
import useRequestSpeakers from "../hooks/useRequestDelay";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import {data} from "../../SpeakerData";

function SpeakerList({ showSessions }) {
    const {
        data: speakersData,
        requestStatus,
        error,
        updateRecord
    } = useRequestDelay(250, data);


    if (REQUEST_STATUS.FAILURE === requestStatus) return <div>Error: {error.message}</div>;
    return (
        <div className="container speakers-list">
            <ReactPlaceholder type="media" rows={15} ready={REQUEST_STATUS.LOADING !== requestStatus} className="speakerlist-placeholder">
                <div className="row">
                    {speakersData.map((speaker) => {
                        return (
                            <Speaker speaker={speaker} showSessions={showSessions} key={speaker.id} onFavoriteToggle={() => updateRecord({...speaker, favorite: !speaker.favorite})} />
                        );
                    })}
                </div>
            </ReactPlaceholder>
        </div>
    );
}

export default SpeakerList;