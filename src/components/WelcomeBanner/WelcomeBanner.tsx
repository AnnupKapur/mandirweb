'use client'

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { ScreenSizeMobile } from '@lib/constants/GeneralConstants'
import styles from './WelcomeBanner.module.css'
import { AiOutlineDown } from 'react-icons/ai';
import { NewsFeedItem } from '@lib/types/NewsFeedItem'
import { 
  getDocs,
  getFirestore, 
  collection,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore'
import firebase_app from '../../../firebase'

type Props = {}

const WelcomeBanner = (props: Props) => {
	const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [objLatestNews, setobjLatestNews] = useState<NewsFeedItem>();

  const funcGetLatestNewsItem = async () => {
    const collectionRef = collection(getFirestore(firebase_app), 'home_news_feed');
    const q = query(collectionRef, where('isShow', '==', true), orderBy('createdAt', 'desc'), limit(1));

    (await getDocs(q)).forEach((newsDoc) => {
      setobjLatestNews(newsDoc.data() as NewsFeedItem);
    })
  }
	
	useEffect(() => {
    funcGetLatestNewsItem();
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
				style={{objectFit: 'cover', objectPosition: '47.75% 0%'}}
      />
      {/* <div className={styles.bannerOverlay}>
        <h1>DURGA BHAWAN MANDIR</h1>
        <p>
          A sacred space to connect with the divine
        </p>
      </div> */}
      {objLatestNews && (
        <div
          className={styles.newsContainer}
          style={{
            textDecoration: objLatestNews.link ? 'underline' : '',
            backgroundColor: objLatestNews.bgCol ? objLatestNews.bgCol : '',
            color: objLatestNews.textCol ? objLatestNews.textCol : '',
          }}
          onClick={()=>{
            if(objLatestNews.link){
              window.open(objLatestNews.link, "_blank")
            }
          }}
        >
          This is a news message
        </div>
      )}
    </div>
	)
}

export default WelcomeBanner