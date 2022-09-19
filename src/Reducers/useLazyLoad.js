//this is custom(useLazyLoad) reducer, debounce these plugin is for trigger an method on periodic set time later.
//Depends on the page the data and the reducer call back the corresponding data.

import { useEffect, useReducer, useCallback } from "react";
import debounce from "lodash/debounce";

const INTERSECTION_THRESHOLD = 1;
const LOAD_DELAY_MS = 50;

const reducer = (state, action) => {
    switch (action.type) {
        case "set": {
            return {
                ...state,
                ...action.payload
            };
        }
        case "onGrabData": {
            if (action.payload.data) {
                return {
                    ...state,
                    loading: false,
                    data: [...state.data, ...action.payload.data],
                    currentPage: state.currentPage + 1
                };
            }
            else {
                return {
                    ...state,
                    loading: false,

                    currentPage: 4
                };

            }

        }
        default:
            return state;
    }
};

const useLazyLoad = ({ triggerRef, onGrabData, options }) => {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        currentPage: 1,
        data: []
    });

    const _handleEntry = async (entry) => {
        const boundingRect = entry.boundingClientRect;
        const intersectionRect = entry.intersectionRect;

        if (
            !state.loading &&
            entry.isIntersecting &&
            intersectionRect.bottom - boundingRect.bottom <= INTERSECTION_THRESHOLD
        ) {
            dispatch({ type: "set", payload: { loading: true } });
            const data = await onGrabData(state.currentPage);

            dispatch({ type: "onGrabData", payload: { data } });

        }

    };

    const handleEntry = debounce(_handleEntry, LOAD_DELAY_MS);

    const onIntersect = useCallback(
        (entries) => {
            handleEntry(entries[0]);
        },
        [handleEntry]
    );

    useEffect(() => {
        if (triggerRef.current) {
            const container = triggerRef.current;
            const observer = new IntersectionObserver(onIntersect, options);

            observer.observe(container);

            return () => {
                observer.disconnect();
            };
        }
    }, [triggerRef, onIntersect, options]);

    return state;
};

export default useLazyLoad;