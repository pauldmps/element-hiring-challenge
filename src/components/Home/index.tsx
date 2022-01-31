import { Box, Center, Wrap } from '@chakra-ui/react';

import ProductCard from './ProductCard';
import { productDetails } from '../utils/constants';

const Home = () => {
  return (
    <Box p={4}>
      <Center>
        <Wrap>
          {productDetails.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Wrap>
      </Center>
    </Box>
  );
};

export default Home;
