import React, { useState } from 'react';
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    IconButton,
    HStack,
    Select,
    Image
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from "react-router-dom";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

const Links = [{ name: 'Devices', link: "/devices" }, { name: 'Users', link: "/users" }];

const NavLink = ({ children, link }) => (
    <Box>
        <Link
            to={link}
            as={ReactRouterLink}
            py={6}
            px={8}
            _hover={{
                textDecoration: 'none',
                bg: '#e6e6e66e',

            }}

        >
            {children}
        </Link>
    </Box>
);

export default function MenuBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { t } = useTranslation();
    const [dir, setDir] = useState('rtl')

    const onLangChange = (e) => {
        const dir = e.target.value === "en" ? "ltr" : "rtl"
        setDir(e.target.value)
        document.getElementById("htmldoc")?.setAttribute("dir", dir)
        
    }

    //alert(dir)

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} bgColor="#7AC142">
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Link
                            to="/"
                            as={ReactRouterLink}
                        >
                            <Box>
                                <Image src='' alt='Dan Abramov' />
                            </Box>
                        </Link>

                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (

                                <NavLink key={link.link} link={link.link}>{t(link.name)}</NavLink>

                            ))}
                        </HStack>
                    </HStack>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            {/* <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button> */}

                            <Select size='xs' value={dir} onChange={onLangChange}>
                                <option value='en' >English</option>
                                <option value='ar'>Arabic</option>
                            </Select>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}
                                >
                                    <Avatar
                                        size={'sm'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
