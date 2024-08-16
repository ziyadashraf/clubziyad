import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from "../../../styles/CardStack.module.css"
import Image from 'next/image';

let interval;

const CardStack = ({ items, offset = 0, scaleFactor = 0.06 }) => {
    const [cards, setCards] = useState(items);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        startFlipping();

        return () => clearInterval(interval);
    }, []);

    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards) => {
                const newArray = [...prevCards];
                newArray.unshift(newArray.pop());
                return newArray;
            });
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 5000);
    };

    return (
        <div className={styles.container + " relative "}>
            {cards.map((card, index) => (
                <motion.div
                    key={card.id}
                    className={styles.container + " absolute dark:bg-black bg-white  p-4   flex flex-col justify-between " + styles.paddingcontainer}
                    style={{
                        transformOrigin: 'top center',
                        borderRadius: '1em'
                    }}
                    initial={{ opacity: index === currentIndex ? 0 : 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="font-normal text-neutral-700 dark:text-neutral-200">
                        <Image src={card.logo} width={75} />
                    </div>
                    <div className={styles.quote}>
                        <p>
                            "{card.content}"
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default CardStack;