import styles from './page.module.css'
import WelcomeBanner from '@lib/components/WelcomeBanner'

export default function Home() {
  return (
    <main className={styles.main}>
      <WelcomeBanner />
      <div>Something cool here</div>
    </main>
  )
}
