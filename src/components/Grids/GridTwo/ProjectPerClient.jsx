'use client'
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from "../../../styles/PPClient.module.css"
// import star from "../../../../../public/greenstar.svg"
import Joanne from "../../../../public/projecpclient.png"

const ProjectPerClient = () => {

    return (

        <div className={styles.container}>
            <Image className={styles.image} src={Joanne} />


        </div>
    )
};


export default ProjectPerClient;
