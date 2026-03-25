import { useEffect, useRef, useCallback } from "react";

export const useInfiniteScroll = (ref, callback, options = {}) => {
    const {
        enabled = true,
        threshold = 0.1,
        rootMargin = "200px",
        root = null,
    } = options;

    const observerRef = useRef(null);
    const callbackRef = useRef(callback);
    const isObserving = useRef(false);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const handleIntersection = useCallback((entries) => {
        const entry = entries[0];

        if (entry?.isIntersecting && enabled) {
            callbackRef.current();
        }
    }, [enabled]);

    useEffect(() => {
        const element = ref.current;

        if (!element || !enabled) {
            return;
        }

        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver(handleIntersection, {
            root,
            rootMargin,
            threshold,
        });

        observerRef.current.observe(element);
        isObserving.current = true;

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
                isObserving.current = false;
            }
        };
    }, [ref, enabled, root, rootMargin, threshold, handleIntersection]);
};