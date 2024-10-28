import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./multiRangeSlider.module.css";

interface CurrentValues {
  min?: number;
  max?: number;
}

const MultiRangeSlider: React.FC<{
  min: number;
  max: number;
  current?: CurrentValues;
  showInput?: boolean;
  showButton?: boolean;
  onChange: (values: { min: number; max: number }) => void;
}> = ({ min, max, current, onChange, showInput = false, showButton = false }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const [minError, setMinError] = useState<string | null>(null);
  const [maxError, setMaxError] = useState<string | null>(null);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (current) {
      if (current.min !== undefined && current.min > min && current.min < max) {
        setMinVal(current.min);
      }
      if (current.max !== undefined && current.max > min && current.max < max) {
        setMaxVal(current.max);
      }
    }
  }, [current, min, max]);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Trigger onChange only if showButton is false (immediate update)
  useEffect(() => {
    if (!showButton) {
      onChange({ min: minVal, max: maxVal });
    }
  }, [minVal, maxVal, onChange, showButton]);

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

  // Button click handler to trigger onChange if showButton is true
  const handleButtonClick = () => {
    onChange({ min: minVal, max: maxVal });
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
                className={`form-control ${styles['input--wide']}`}
              />
              {minError && <small className={styles['error-message']}>{minError}</small>}
            </div>
            <span className="mx-2">to</span>
            <div className={styles['input-container']}>
              <input
                type="number"
                value={maxVal}
                onChange={handleMaxInputChange}
                className={`form-control ${styles['input--wide']}`}
              />
              {maxError && <div className={styles['error-message']}>{maxError}</div>}
            </div>
          </div>
        )}
        {showButton && (
          <button className={`btn btn-primary ${styles['update-button']}`} onClick={handleButtonClick}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  current: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
  showButton: PropTypes.bool
};

export default MultiRangeSlider;
