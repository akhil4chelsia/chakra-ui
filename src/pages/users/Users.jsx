import React from 'react';
import SideNav from '../../components/SideNav';
import { useTranslation } from 'react-i18next';

export default function Users() {

    const { t } = useTranslation();

    return (
        <div>
            <SideNav />
            {/* {t('Users')} */}
        </div >
    );
}
