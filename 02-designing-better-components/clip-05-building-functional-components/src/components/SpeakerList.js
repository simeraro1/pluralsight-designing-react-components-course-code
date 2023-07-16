import Speaker from "./Speaker";

import ReactPlaceholder from "react-placeholder";
import { data } from "../../SpeakerData";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";

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
                            <Speaker speaker={speaker} showSessions={showSessions} key={speaker.id} onFavoriteToggle={(doneCallBack) => updateRecord({ ...speaker, favorite: !speaker.favorite }, doneCallBack)} />
                        );
                    })}
                </div>
            </ReactPlaceholder>
        </div>
    );
}

export default SpeakerList;