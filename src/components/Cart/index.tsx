import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Stat,
  Box,
  StatLabel,
  StatNumber,
  HStack,
  VStack,
  IconButton,
  StatHelpText,
  Divider,
  Tooltip,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import { useAppContext } from '../utils/hooks';
import { IStateItems } from '../utils/reducer';

const Cart = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { cartData, totalPremium, removeFromCart } = useAppContext();

  const CartItem = ({ item }: { item: IStateItems }) => (
    <Box mt={8}>
      <HStack>
        <VStack>
          <Stat>
            <StatLabel>{`Product: ${item.productName}`}</StatLabel>
            <StatNumber>{`Premium: €${item.premium?.toFixed(2)}`}</StatNumber>
            <StatHelpText>{`Coverage amount: €${item.coverage}`}</StatHelpText>
          </Stat>
        </VStack>
        <Box position={'absolute'} right={4}>
          <Tooltip label="Remove item">
            <IconButton
              aria-label="remove from cart"
              icon={<FaTrash />}
              colorScheme={'red'}
              onClick={() => removeFromCart(item)}
            />
          </Tooltip>
        </Box>
      </HStack>
      <Divider />
    </Box>
  );

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Cart</DrawerHeader>
        <DrawerBody>
          {cartData.map((item) => (
            <CartItem item={item} />
          ))}
        </DrawerBody>
        <DrawerFooter>
          <Stat>
            <StatLabel>Total premium</StatLabel>
            <StatNumber>{`€${totalPremium.toFixed(2)}`}</StatNumber>
          </Stat>
          <Button disabled={!totalPremium} colorScheme="teal">
            Checkout
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
