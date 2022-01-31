import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Tooltip,
  SliderThumb,
  SliderMark,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IInputProps } from './interfaces';

const CustomSlider: React.FC<IInputProps> = ({ value, onValueChange, min, max }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <VStack align={'left'}>
      <Text fontSize={'sm'}>Select coverage (EUR)</Text>
      <Slider
        display={{ base: 'none', md: 'flex' }}
        id="slider"
        width={200}
        mr={12}
        min={min}
        max={max}
        colorScheme="teal"
        value={value}
        onChange={(v) => onValueChange(Number(v))}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={0} mt="1" ml="-2.5" fontSize="sm">
          {min}
        </SliderMark>
        <SliderMark value={max} mt="2" ml="-2.5" fontSize="sm">
          {max}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${value}`}
        >
          <SliderThumb bg={'teal'} />
        </Tooltip>
      </Slider>
    </VStack>
  );
};

export default CustomSlider;
