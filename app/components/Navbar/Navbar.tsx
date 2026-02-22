'use client';

import { Home, User, Briefcase, Code, FolderGit2 } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Dock, { DockItemData } from './Dock';
import styles from './Navbar.module.css';

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();

    const navItems: DockItemData[] = [
        {
            icon: <Home size={22} color={pathname === '/' ? 'hsl(var(--primary-h), var(--primary-s), var(--primary-l))' : 'currentColor'} />,
            label: 'Home',
            onClick: () => router.push('/')
        },
        {
            icon: <User size={22} color={pathname === '/about' ? 'hsl(var(--primary-h), var(--primary-s), var(--primary-l))' : 'currentColor'} />,
            label: 'About',
            onClick: () => router.push('/about')
        },
        {
            icon: <Briefcase size={22} color={pathname === '/experience' ? 'hsl(var(--primary-h), var(--primary-s), var(--primary-l))' : 'currentColor'} />,
            label: 'Experience',
            onClick: () => router.push('/experience')
        },
        {
            icon: <Code size={22} color={pathname === '/open-source' ? 'hsl(var(--primary-h), var(--primary-s), var(--primary-l))' : 'currentColor'} />,
            label: 'Open Source',
            onClick: () => router.push('/open-source')
        },
        {
            icon: <FolderGit2 size={22} color={pathname === '/projects' ? 'hsl(var(--primary-h), var(--primary-s), var(--primary-l))' : 'currentColor'} />,
            label: 'Projects',
            onClick: () => router.push('/projects')
        },
    ];

    return (
        <nav className={styles.navbarControls}>
            <Dock
                items={navItems}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
            />
        </nav>
    );
}
