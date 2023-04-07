'use client'

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { ScreenSizeMobile } from '@lib/constants/GeneralConstants'
import styles from './WelcomeBanner.module.css'
import { AiOutlineDown } from 'react-icons/ai';

type Props = {}

const WelcomeBanner = (props: Props) => {
	const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
	
	useEffect(() => {
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }

    handleResize(); // set initial screen size on component mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

	const isDesktop = screenSize.width > ScreenSizeMobile; // adjust breakpoint as needed
  const bannerHeight = isDesktop ? '600px' : '100vh';

	return (
		<div className={styles.mainContainer} style={{ height: bannerHeight}}>
      <Image
        src="/assets/header.jpg"
        alt="Welcome banner"
				fill
				style={{objectFit: 'cover', objectPosition: '47% 0%'}}
      />
      <div className={styles.bannerOverlay}>
        <h1>DURGA BHAWAN MANDIR</h1>
        <p>Discover the ancient wisdom of hinduism</p>
      </div>
    </div>
	)
}

export default WelcomeBanner