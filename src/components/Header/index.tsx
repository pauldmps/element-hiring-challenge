import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  Badge,
} from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from '../Cart';
import { useAppContext } from '../utils/hooks';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartData } = useAppContext();

  return (
    <Box bg={'teal.500'} px={4} boxShadow={'2xl'}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Box color={'white'} fontSize={'2xl'}>
            Element
          </Box>
        </HStack>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
              onClick={onOpen}
            >
              <Avatar
                size={'md'}
                bg={'white'}
                color={'teal'}
                icon={<FaShoppingCart />}
              >
                <Box position={'absolute'} top={7} right={1}>
                  {cartData.length > 0 && (
                    <Badge colorScheme={'red'}>{cartData.length}</Badge>
                  )}
                </Box>
              </Avatar>
            </MenuButton>
            <Cart isOpen={isOpen} onClose={onClose} />
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
