import { useState } from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  HStack,
  Button,
  Stat,
  StatLabel,
  StatNumber,
  useToast,
} from '@chakra-ui/react';
import { IProductDetails } from '../utils/constants';
import { useAppContext } from '../utils/hooks';
import CoverageSelector from './CoverageSelector';

const ProductCard = ({ product }: { product: IProductDetails }) => {
  const { id, productName, minCoverage, maxCoverage, image, risk } = product;
  const [coverage, setCoverage] = useState(minCoverage);
  const [premium, setPremium] = useState(minCoverage * (risk / 100));
  const { addToCart } = useAppContext();
  const toast = useToast();

  const onAddToCartClick = () => {
    toast({
      title: 'Added to cart.',
      status: 'success',
      duration: 1200,
      isClosable: true,
    });
    addToCart({
      id,
      coverage,
      premium,
    });
  };

  return (
    <Center py={8}>
      <Box
        role={'group'}
        p={6}
        maxW={'800px'}
        w={[400, 400, 800]}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Stack direction={['column', 'column', 'row']}>
          <Box rounded={'lg'} pos={'relative'} height={'230px'}>
            <Image
              rounded={'lg'}
              height={230}
              width={{ base: 352, md: 282 }}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={2} align={'center'} pl={{ base: 0, md: 12 }}>
            <Text
              color={'gray.500'}
              fontSize={'sm'}
              textTransform={'uppercase'}
            >
              Insurance
            </Text>
            <Heading
              fontSize={'2xl'}
              fontFamily={'body'}
              fontWeight={500}
              pb={8}
            >
              {productName}
            </Heading>
            <HStack>
              <CoverageSelector
                min={minCoverage}
                max={maxCoverage}
                risk={risk}
                setCoverage={setCoverage}
                setPremium={setPremium}
              />
            </HStack>
            <HStack pt={12} justifyContent={'space-between'}>
              <Stat mr={90}>
                <StatLabel>Total premium</StatLabel>
                <StatNumber>{`€${premium.toFixed(2)}`}</StatNumber>
              </Stat>
              <Button
                colorScheme="teal"
                onClick={onAddToCartClick}
                disabled={premium === 0}
              >
                Add to cart
              </Button>
            </HStack>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default ProductCard;
