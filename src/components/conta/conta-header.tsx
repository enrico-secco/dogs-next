"use client";

import React from 'react';
import FeedIcon from '@/icons/feed-icon';
import EstatisticasIcon from '@/icons/estatisticas-icon';
import AdicionarIcon from '@/icons/adicionar-icon';
import SairIcon from '@/icons/sair-icon';
import styles from './conta-header.module.css';
import { usePathname } from 'next/navigation';
import useMedia from '@/hooks/use-media';
import Link from 'next/link';
import logout from '@/actions/logout';
import { useUser } from '@/context/user-context';

const contaUrl = '/conta';
const estatisticasUrl = 'conta/estatisticas';
const postarUrl = '/conta/postar';

function getTitle(pathname: string) {
    switch (pathname) {
        case estatisticasUrl:
            return 'Estatísticas';
        case postarUrl:
            return 'Poste Sua Foto';
        default:
            return 'Minha Conta';
    }
}

export default function ContaHeader() {
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const { setUser } = useUser();


    const pathname = usePathname();
    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    async function handleLogout() {
        await logout();
        setUser(null);
    }

    return (
        <header className={styles.header}>
            <h1 className='title'>{getTitle(pathname)}</h1>
            {mobile && (
                <button
                    aria-label="Menu"
                    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive
                        }`}
                    onClick={() => setMobileMenu(!mobileMenu)}
                ></button>
            )}

            <nav
                className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive
                    }`}
            >
                <Link href={contaUrl} className={pathname === contaUrl ? 'active' : ''}>
                    <FeedIcon />
                    {mobile && 'Minhas Fotos'}
                </Link>
                <Link href={estatisticasUrl} className={pathname === estatisticasUrl ? 'active' : ''}>
                    <EstatisticasIcon />
                    {mobile && 'Estatísticas'}
                </Link>
                <Link href={postarUrl} className={pathname === postarUrl ? 'active' : ''}>
                    <AdicionarIcon />
                    {mobile && 'Adicionar Foto'}
                </Link>
                <button onClick={handleLogout}>
                    <SairIcon />
                    {mobile && 'Sair'}
                </button>
            </nav>
        </header>
    );
};