import { Box } from '@chakra-ui/react';
import React from 'react';
import SideNav from '../../components/SideNav';
import { useTranslation } from 'react-i18next';

export default function Devices() {

    const { t } = useTranslation();

    return (
        <Box>
            <SideNav />
            {/* <div>
                {t('Devices')}
            </div > */}
        </Box>
    );
}
