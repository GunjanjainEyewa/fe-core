import React, { useState, useEffect } from 'react';
import { styled } from '@eyewa/ui-components';
import Thumb from '../thumb';
import { inputType as InputType } from '../../types';
import { min as minType, max as maxType } from '../../constants';

interface Hover {
  min: number;
  max: number;
}

interface RangeProps {
  left: number;
  right: number;
}

const MultiRangeSelector = styled.div`
  position: relative;
  width: 100%;
  height: 42px;
  input[type=range]{
    position: absolute;
    pointer-events: none;
    -webkit-appearance: none;
    background: none;
    z-index: 4;
    height: 10px;
    width: 100%;
    top: 16px;
  }
  input[type=range]::-webkit-slider-thumb {
    width: 40px;
    height: 40px;
    overflow: visible;
    cursor: pointer;
    background: none;
    border: 1.5px solid transparent;
    box-sizing: border-box;
    z-index: 2;
    pointer-events: all;
    -webkit-appearance: none;
  }
  input[type=range]::-moz-range-thumb{
    pointer-events: all;
    height: 40px;
    width: 40px;
    border-radius: 0;
    z-index: 2;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  display: flex;
  align-items: center;
`;
const Track = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  position: absolute;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.surface30};
`;
const Range = styled.div`
  position: absolute;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.primary};
  left: ${({ left }: RangeProps) => `${left}%`};
  right: ${({ right }: RangeProps) => `${right}%`};
  border-radius: 5px;
  height: 2px;
`;
interface Props {
  min: number;
  max: number;
  currentValue: {
    min: number,
    max: number,
  };
  onChange: (val:number, type: InputType) => void;
  onBlur: (min: number, max: number) => void;
}

function Selector(props: Props) {
  const {
    min = 0,
    max = Number.POSITIVE_INFINITY,
    currentValue = {
      min: 0,
      max: 0,
    },
    onChange,
    onBlur = null,
  } = props;
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [isFocused, setFocus] = useState(0);
  const [isHover, setHover] = useState<Hover>({ min: 0, max: 0 });

  const calcPercentage = (value: number, minValue: number, maxValue: number): number => {
    const diff = maxValue - minValue;
    const per = diff / 100;
    const valPercent = value / per;
    return valPercent;
  };

  const changeAxisPositions = (val: number = 0, type: InputType) => {
    if (type === minType) {
      setLeft(Number(val));
    } else if (type === maxType) {
      setRight(Number(val));
    }
  };

  const handleChange = (e: any, type: InputType) => {
    const { value } = e.target;
    const shouldChange = (
      (type === minType && (Number(value) < currentValue.max))
      || (type === maxType && (Number(value) > currentValue.min))
    );
    if (shouldChange) {
      onChange(Number(value), type);
      const percentage = calcPercentage(Number(value), min, max);
      changeAxisPositions(percentage, type);
    }
  };

  const handleMouseOver = (e: any, type: InputType) => {
    setHover({ ...isHover, [type]: 1 });
  };

  const handleMouseLeave = (e: any, type: InputType) => {
    setHover({ ...isHover, [type]: 0 });
    if (typeof onBlur === 'function' && isFocused) {
      onBlur(currentValue.min, currentValue.max);
    }
    setFocus(0);
  };

  useEffect(() => {
    Object.keys(currentValue).forEach((key: InputType) => {
      const value = currentValue[key];
      const shouldChange = (
        (key === minType && (Number(value) < currentValue.max))
        || (key === maxType && (Number(value) > currentValue.min))
      );
      if (shouldChange) {
        const position = calcPercentage(value, min, max);
        changeAxisPositions(position, key);
      }
    });
  }, [currentValue.min, currentValue.max]);

  return (
    <>
      <MultiRangeSelector>
        <input
          type="range"
          min={min}
          max={max}
          value={currentValue.min}
          onClick={() => setFocus(1)}
          onChange={(e) => handleChange(e, minType)}
          onMouseOver={(e) => handleMouseOver(e, minType)}
          onMouseLeave={(e) => handleMouseLeave(e, minType)}
          onFocus={() => {}}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={currentValue.max}
          onClick={() => setFocus(1)}
          onChange={(e) => handleChange(e, maxType)}
          onMouseOver={(e) => handleMouseOver(e, maxType)}
          onMouseLeave={(e) => handleMouseLeave(e, maxType)}
          onFocus={() => {}}
        />
        <Wrapper>
          <Track />
          <Range left={left} right={100 - right} />
          <Thumb className={`min ${isHover.min ? 'hover' : ''}`} left={left} />
          <Thumb className={`max ${isHover.max ? 'hover' : ''}`} right={right} />
        </Wrapper>
      </MultiRangeSelector>
    </>
  );
}

export default Selector;
