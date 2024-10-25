import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./multiRangeSlider.module.css";

const MultiRangeSlider: React.FC<{
  min: number;
  max: number;
  showInput?: boolean;
  onChange: (values: { min: number; max: number }) => void;
}> = ({ min, max, onChange, showInput = false }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const [minError, setMinError] = useState<string | null>(null);
  const [maxError, setMaxError] = useState<string | null>(null);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement | null>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value < min || value >= maxVal) {
      setMinError(`Value must be between ${min} and ${maxVal - 1}`);
    } else {
      setMinError(null);
      setMinVal(value);
      minValRef.current = value;
    }
  };

  const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value > max || value <= minVal) {
      setMaxError(`Value must be between ${minVal + 1} and ${max}`);
    } else {
      setMaxError(null);
      setMaxVal(value);
      maxValRef.current = value;
    }
  };

  return (
    <div className={`${styles['container']}`}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className={`${styles['thumb']} ${styles['thumb--left']}`}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className={`${styles['thumb']} ${styles['thumb--right']}`}
      />

      <div className={`${styles['slider']}`}>
        <div className={`${styles['slider__track']}`} />
        <div ref={range} className={`${styles['slider__range']}`} />
        {showInput && (
          <div className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['mt-6']}`}>
            <div className={styles['input-container']}>
              <input
                type="number"
                value={minVal}
                onChange={handleMinInputChange}
                className={`form-control w-50 ${styles['input--wide']}`}
              />
              {minError && <small className={styles['error-message']}>{minError}</small>}
            </div>
            <span className="mx-2">to</span>
            <div className={styles['input-container']}>
              <input
                type="number"
                value={maxVal}
                onChange={handleMaxInputChange}
                className={`form-control w-50 ${styles['input--wide']}`}
              />
              {maxError && <small className={styles['error-message']}>{maxError}</small>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;
