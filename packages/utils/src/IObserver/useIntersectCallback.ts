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
const useIntersectCallback = (
  { rootMargin, threshold }: IntersectionOptions,
  onIntersect: () => void,
  once: boolean = false,
): [
  any,
] => {
  const [isObserving, setIsObserving] = useState(true);
  const [nodeRefToObserve, setNodeRefToObserve] = useState();
  const [observer, setObserver] = useState<IntersectionObserver|null>(null);

  const intersectCallback = useCallback(() => {
    onIntersect();
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
        const { isIntersecting } = firstEntry;
        if (isIntersecting && intersectCallback) {
          intersectCallback();
        }
        if (isIntersecting && once) {
          setIsObserving(false);
        }
      },
      {
        ...(threshold && { threshold }),
        ...(rootMargin && { rootMargin }),
      }, // ? ignoring threshold and root here to simplify the use case
    );

    setObserver(newObserver);
  }, [once, intersectCallback, threshold, rootMargin, observer]);


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

  useEffect(() => {
    if ((!isObserving) && observer) {
      observer.disconnect();
    }
  }, [isObserving, observer]);

  return [setNodeRefToObserve];
};

export default useIntersectCallback;
