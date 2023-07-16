import SpeakerFavorite from "./SpeakerFavorite";

const Speaker = ({speaker, showSessions, onFavoriteToggle}) => {
    const { id, first, last, sessions } = speaker;
    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={id}>
            <div className="card card-heigh p-4 mt-4">
                <SpeakerImage id={id} first={first} last={last} />
                <SpeakerDemographic {...speaker} onFavoriteToggle={onFavoriteToggle} />
                {showSessions===true ? <Sessions sessions={sessions} />: null }
            </div>
        </div>
    );
}

const SpeakerDemographic = ( { first, last, bio, company, twitterHandle, favorite, onFavoriteToggle }) => {
    return (
        <div className="speaker-info mb-3">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="text-truncate w-200">
                    {first} {last}
                </h3>
            </div>
            <SpeakerFavorite favorite={favorite} onFavoriteToggle={onFavoriteToggle} />
            <div>
                <p className="card-description">
                    {bio}
                </p>
                <div className="social d-flex flex-row mt-4">
                    <div className="company">
                        <h5>Company</h5>
                        <h6>{company}</h6>
                    </div>
                    <div className="twitter">
                        <h5>Twitter</h5>  
                        <h6>{twitterHandle}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

const SpeakerImage = (props) => {
    const { id, first, last } = props;
    return (
        <div className="speaker-img d-flex flex-row justify-content-center align-items-center">
            <img
                className="rounded-circle"
                src={`/images/speaker-${id}.jpg`}
                width="300"
                height="300"
                alt={`${first} ${last}`}
            />
        </div>
    )
}

const Sessions = (props) => {
    const { sessions } = props;
    return (
        <div className="sessionBox card h-250">
            <Session title={sessions[0].title} room={sessions[0].room.name} />
        </div>
    );
}

const Session = (props) => {
    const { title, room } = props;
    return (
        <span className="session w-100">
            {title} <strong>Room: {room}</strong>
        </span>
    );
}

export default Speaker;