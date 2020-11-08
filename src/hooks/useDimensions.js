import { useLayoutEffect, useRef, useState } from 'react';

const useDimensions = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const ref = useRef();

  useLayoutEffect(() => {
    setHeight(ref.current.getBoundingClientRect().height)
    setWidth(ref.current.getBoundingClientRect().width)
  }, [ref.current]);

  return [ref, { height, width }];
};

export default useDimensions;