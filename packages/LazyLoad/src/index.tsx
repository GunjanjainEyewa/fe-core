import React, { ReactChild, useState, ReactNode } from 'react';
import useIntersectionCallback from '@nykaa/utils/IObserver/useIntersectCallback';


interface Props {
  bottomMargin?: number;
  children: ReactChild;
  placeHolder: ReactNode;
  rightMargin?: number;
  wrapperClassName?: string;
}

function LazyLoad({
  children,
  bottomMargin = 0,
  rightMargin = 0,
  wrapperClassName,
  placeHolder,
}: Props) {
  const [isInAreaOfInterest, setIsInAreaOfInterest] = useState(false);
  const [setNodeReference] = useIntersectionCallback(
    {
      rootMargin: `0px ${rightMargin}px ${bottomMargin}px 0px`,
    },
    () => setIsInAreaOfInterest(true),
    true,
  );

  return (
    <div className={wrapperClassName} ref={setNodeReference}>
      {
        isInAreaOfInterest ? (
          <>
            { children }
          </>
        ) : (
          placeHolder
        )
      }
    </div>
  );
}

export default LazyLoad;
