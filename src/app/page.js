import Image from 'next/image'
import styles from './page.module.css'
import HeroSection from './components/HeroSection'


export default function Home() {
  return (
    <main >
      <HeroSection title="this is main page" imageUrl='/team.JPG'></HeroSection>

    </main>
  )
}
