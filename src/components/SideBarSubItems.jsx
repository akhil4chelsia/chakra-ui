import React from 'react';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
} from 'react-icons/fi';




export default function SimpleSidebar({ children , selected, onSelect, linkItems}) {

    return (
        <Box>
            {linkItems.map((item) => (
                <NavItem key={item.name} item={item} color="white" handleClick={() => {
                    //console.log("clocked",children)
                    onSelect(item.name)
                }} selected={selected}>

                </NavItem>
            ))}
        </Box>
    );
}

const NavItem = ({ selected,handleClick, item, ...rest }) => {
    return (
        <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} >
            <Flex
                align="center"
                pt="1"
                pb="1"
                px={4}
                mx="4"
                role="group"
                cursor="pointer"
                _hover={{
                    //bg: '#e6e6e66e',
                    color: 'green',
                }}
                {...rest}
                onClick={handleClick}
            >
                {/* {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )} */}
                {
                    selected === item.name ? <Text color='green.400' fontSize="sm">{item.name}</Text> : <Text fontSize="sm">{item.name}</Text>
                }

            </Flex>
        </Link>
    );
};


// const MobileNav = ({ onOpen, ...rest }) => {
//     return (
//         <Flex
//             ml={{ base: 0, md: 60 }}
//             px={{ base: 4, md: 24 }}
//             height="20"
//             alignItems="center"
//             bg={useColorModeValue('white', 'gray.900')}
//             borderBottomWidth="1px"
//             borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
//             justifyContent="flex-start"
//             {...rest}>
//             <IconButton
//                 variant="outline"
//                 onClick={onOpen}
//                 aria-label="open menu"
//                 icon={<FiMenu />}
//             />

//             <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
//                 Logo
//             </Text>
//         </Flex>
//     );
// };