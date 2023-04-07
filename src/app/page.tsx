import styles from './page.module.css'
import WelcomeBanner from '@lib/components/WelcomeBanner'

export default function Home() {
  return (
    <main className={styles.main}>
      <WelcomeBanner />
      <div>Soemthing cool here</div>
    </main>
  )
}
