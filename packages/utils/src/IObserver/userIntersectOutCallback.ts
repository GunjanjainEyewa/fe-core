import { useEffect, useState, useCallback } from 'react';


interface IntersectionOptions {
  rootMargin?: string;
  threshold?: (number | number[]);
}

/**
 *
 * @param intersectionOptions - options for intersection observer
 * @param onIntersect - options for intersection observer
 * @param once - can be used if you want to stop observing once the element is visible
 */
const useIntersectOutCallback = (
  { rootMargin }: IntersectionOptions,
  thresholdPercent: number,
  onIntersect: () => void,
  onOut: () => void,
): [
  any,
] => {
  const [nodeRefToObserve, setNodeRefToObserve] = useState();
  const [observer, setObserver] = useState<IntersectionObserver|null>(null);
  const thresholdUpperLimit = ((thresholdPercent || 0) / 100);
  const threshold = [0, thresholdUpperLimit];


  const intersectCallback = useCallback(() => {
    onIntersect();
  }, [onIntersect]);

  const outCallback = useCallback(() => {
    onOut();
  }, [onIntersect]);

  useEffect(() => {
    if (observer) {
      /**
       * ! It is critical to avoid creating multiple instances
       * ? since observer is updated after component mounts
       */
      return;
    }

    const newObserver = new window.IntersectionObserver(
      ([firstEntry]) => {
        const { intersectionRatio } = firstEntry;
        if (intersectCallback && (intersectionRatio >= thresholdUpperLimit)) {
          intersectCallback();
        } else if ((outCallback) && (intersectionRatio < thresholdUpperLimit)) {
          outCallback();
        }
      },
      {
        ...(threshold && { threshold }),
        ...(rootMargin && { rootMargin }),
      }, // ? ignoring threshold and root here to simplify the use case
    );

    setObserver(newObserver);
  }, [intersectCallback, rootMargin, observer]);


  useEffect(() => {
    /**
     * ? Why this?
     * * when the nodeRefToObserve updates we will want to stop observing the old node
     *  */
    if (observer) {
      observer.disconnect();
      if (nodeRefToObserve) {
        // ? ESLINT throws an error here because it is not able to link to the check above
        observer.observe(nodeRefToObserve);
      }
    }
    /**
     * ! This is critical.
     * We will have to  stop observing when the parent component un-mounts.
     */
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [nodeRefToObserve, observer]);

  return [setNodeRefToObserve];
};

export default useIntersectOutCallback;
