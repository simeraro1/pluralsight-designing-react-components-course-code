
import { useState, useEffect } from "react";

const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
}

function useRequestDelay(delayTime = 1000, initialData = []) {

    const [data, setData] = useState(initialData);
    const [error, setError] = useState("");
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING)

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(async () => {
        try {
            await delay(delayTime);
            setData(initialData);
            setRequestStatus(REQUEST_STATUS.SUCCESS);
        } catch (e) {
            setRequestStatus(REQUEST_STATUS.FAILURE);
            setError(e);
        }
    }, []);

    function updateRecord(recordUpdated, doneCallBack) {
        const originalRecords = [...data];
        const newRecords = data.map(function (rec) {
            return rec.id === recordUpdated.id ? recordUpdated : rec;
        });
        async function delayFunction() {
            try {
                setData(newRecords);
                await delay(delayTime);
                if (doneCallBack) {
                    doneCallBack();
                }
            } catch (e) {
                console.log("error thrown inside delayFunction", e);
                if (doneCallBack) {
                    doneCallBack();
                }
                setData(originalRecords);
            }
        }
        delayFunction();
    }

    return {
        data,
        requestStatus,
        error,
        updateRecord
    }
}

export default useRequestDelay;

export { REQUEST_STATUS };