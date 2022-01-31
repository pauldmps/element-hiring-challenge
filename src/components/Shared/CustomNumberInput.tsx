import {
  Box,
  InputGroup,
  InputRightAddon,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IInputProps } from './interfaces';

const CustomNumberInput: React.FC<IInputProps> = ({
  value,
  onValueChange,
  min,
  max,
}) => {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return (
    <Box mt={12}>
      <InputGroup>
        <NumberInput
          ml={8}
          min={min}
          max={max}
          value={internalValue}
          onChange={(v) => setInternalValue(Number(v))}
          onBlur={() => onValueChange(Number(internalValue))}
        >
          <NumberInputField
            w={24}
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
          />
        </NumberInput>
        <InputRightAddon children="EUR" />
      </InputGroup>
    </Box>
  );
};

export default CustomNumberInput;
