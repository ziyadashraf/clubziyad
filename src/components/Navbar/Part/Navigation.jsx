'use client'
import { useState, useRouter } from 'react';
import styles from '../../../styles/Navbar.module.css';
import Link from 'next/link';

export default function Navigation() {
    const [activeIndex, setActiveIndex] = useState(0); // Set 'Work' as the default active item
    // const router = useRouter();

    const menuItems = [
        { name: 'Studio', path: '/' },
        { name: 'Work', path: '/work' },
        { name: 'Services', path: '/services' }
    ];


    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <nav className={styles.nav}>
            {menuItems.map((item, index) => (
                <Link
                    key={index}
                    className={`${styles.hoverer} ${styles.navigator} ${index === activeIndex ? styles.active : styles.inactive}`}
                    onClick={() => handleClick(index)}
                    href={item.path}
                >
                    <div className={`${index === activeIndex ? styles.btndotstatic : styles.btndotrev}`}></div>
                    <div className={`${index === activeIndex ? '' : styles.inactive} ${styles.linkholder} `}>
                        <span className={styles.tstatic}>
                            {item.name}
                        </span>
                        <span className={styles.tabsolute}>
                            {item.name}
                        </span>
                    </div>
                </Link>
            ))}
        </nav>
    );
}
