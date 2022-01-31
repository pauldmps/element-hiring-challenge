import { useState } from 'react';
import CustomNumberInput from '../Shared/CustomNumberInput';
import CustomSlider from '../Shared/CustomSlider';

interface ICoverageSelectorProps {
  min: number;
  max: number;
  risk: number;
  setCoverage: (coverage: number) => void;
  setPremium: (premium: number) => void;
}

const CoverageSelector: React.FC<ICoverageSelectorProps> = ({
  min,
  max,
  risk,
  setCoverage,
  setPremium,
}) => {
  const [value, setValue] = useState(min);

  const onValueChange = (value: number) => {
    setValue(value);
    setCoverage(value);
    setPremium(value * (risk / 100));
  };

  const props = {
    value,
    onValueChange,
    min,
    max,
  };

  return (
    <>
      <CustomSlider {...props} />
      <CustomNumberInput {...props} />
    </>
  );
};

export default CoverageSelector;
