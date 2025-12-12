import styles from './page.module.css'
import { blogPosts } from './blogData'

export default function Blog() {
  return (
    <div className={styles.blog}>
      <div className="container">
        <h1>The Grumpy Boys Blog</h1>
        
        <div className={styles.posts}>
          {blogPosts.map((post, index) => (
            <article key={index} className={styles.post}>
              <h2>{post.title}</h2>
              <div className={styles.videoContainer}>
                <iframe
                  width="560"
                  height="315"
                  src={post.videoUrl}
                  title={post.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.video}
                ></iframe>
              </div>
              {post.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

