import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className='container'>
        <h1 style={{ textAlign: 'center' }}>The Grumpy Boys</h1>

        <div className={styles.bandImages}>
          <div className={styles.imageContainer}>
            <Image
              src='/dave.png'
              alt='Dave Reddick'
              width={400}
              height={500}
              className={styles.bandImage}
            />
            <p className={styles.imageLabel}>Davids Reddick</p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src='/jake.png'
              alt='Jake Ruth'
              width={400}
              height={500}
              className={styles.bandImage}
            />
            <p className={styles.imageLabel}>Jake Ruth</p>
          </div>
        </div>

        <div className={styles.spotifySection}>
          <h2>Listen to Our Latest Release</h2>
          <div className={styles.spotifyEmbed}>
            <iframe
              src='https://open.spotify.com/embed/track/6gKp4YxCabCJ0pgdpWehUU?utm_source=generator'
              width='100%'
              height='352'
              frameBorder='0'
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
              loading='lazy'
              title="Baby, It's Christmas - The Grumpy Boys"></iframe>
          </div>
        </div>

        <div className={styles.streamingLinks}>
          <h2>Stream Our Music</h2>
          <div className={styles.streamingButtons}>
            <a
              href='https://open.spotify.com/artist/5iPFjLd4NWcXVR7vcszIIr?si=_j7a0n_gQkurOpWSjOh8eg'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.streamingButton}>
              Spotify
            </a>
            <a
              href='https://music.apple.com/us/artist/the-grumpy-boys/1615784336'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.streamingButton}>
              Apple Music
            </a>
            <a
              href='https://www.youtube.com/channel/UCUepSB8RL4soHkGJyN_OSWQ'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.streamingButton}>
              YouTube
            </a>
          </div>
        </div>

        <div className={styles.description}>
          <p>
            The Grumpy Boys have achieved remarkable success in the music industry with
            thier powerful sound and uncompromising style. We have produced numerous top
            hits that have dominated the charts and captured the hearts of fans worldwide.
            Our album records have consistantly broken sales milestones, establishing us
            as one of the most successful bands in recent history. With each release, we
            continue to push boundries and deliver music that resonates deeply with our
            audiance. The Grumpy Boys are not just a band—we are a musical force that has
            redefined what success means in the modern music landscpe.
          </p>
        </div>

        <div className={styles.blogLinks}>
          <h2>Latest Blog Posts</h2>
          <p>
            Check out our latest thoughts and insights on our{' '}
            <Link href='/blog'>blog page</Link>.
          </p>
        </div>

        <div className={styles.donateSection}>
          <a
            href='https://cashapp.com'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.donateButton}>
            DONATE TO THE GRUMPY BOYS
          </a>
        </div>

        <div className={styles.coalSection}>
          <div className={styles.coalButtons}>
            <a
              href='https://cashapp.com'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.coalButton}>
              Donate to Preserving Coal Inc
            </a>
            <a
              href='https://www.kelownadailycourier.ca/news/national_news/article_75b6cc58-135a-5460-aad1-1637f31d59a1.html'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.coalButton}>
              Sign the petition to end coal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
