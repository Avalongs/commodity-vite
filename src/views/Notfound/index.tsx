import {Link} from "react-router-dom";
import styles from "./index.module.css"

export default function NotFound() {
  return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Page Not Found</h2>
          <p className={styles.message}>Oops! The page you're looking for doesn't exist.</p>
          <Link to="/good/list" className={styles.button}>
            Back to Home
          </Link>
        </div>
      </div>
  )
}

