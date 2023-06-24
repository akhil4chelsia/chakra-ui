
import React,{useState} from 'react';
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionPanel,
    AccordionButton,
    AccordionIcon,
    Grid,
    GridItem,
    Icon,
    Text
} from '@chakra-ui/react';
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import SimpleSidebar from './SideBarSubItems';

export default function SideNav() {

    const { t } = useTranslation();
    const [selected, setSelected] = useState('')

    const LinkItemsDevices = [
        { name: 'Home', icon: FiHome },
        { name: 'Trending', icon: FiTrendingUp },
        { name: 'Explore', icon: FiCompass },
        { name: 'Favourites', icon: FiStar },
        { name: 'Settings', icon: FiSettings },
    ];

    const LinkItemsMessage = [
        { name: 'Inbox', icon: FiHome },
        { name: 'Sent Items', icon: FiTrendingUp },
        { name: 'Importants', icon: FiCompass },
        { name: 'Favourites', icon: FiStar },
        { name: 'Promotions', icon: FiSettings },
    ];

    return (


        <Grid
            h='xl'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(7, 1fr)'
            gap={4}
        >
            <GridItem rowSpan={2} colSpan={1} bg='#393D49' >
                <Accordion allowToggle={true}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' color="white">
                                    <Text fontSize="md"> <Icon
                                        mr="4"
                                        fontSize="16"
                                        _groupHover={{
                                            color: 'white',
                                        }}
                                        as={FiHome}
                                    /> Device</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} bg="#0000004d">

                            <SimpleSidebar selected={selected} onSelect={setSelected} linkItems={LinkItemsDevices}/>

                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' color="white">
                                    <Text fontSize="md">
                                        <Icon
                                            mr="4"
                                            fontSize="16"
                                            _groupHover={{
                                                color: 'white',
                                            }}
                                            as={FiSettings}
                                        /> Message
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} bg="#0000004d">
                            <SimpleSidebar selected={selected} onSelect={setSelected} linkItems={LinkItemsMessage}/>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

            </GridItem>

            <GridItem minHeight="90vh" colSpan={4} bg='white' />
        </Grid>




    );
}
