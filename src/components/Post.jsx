import {useEffect, useState} from "react"
import {format} from "date-fns-tz"
import {timeAgo} from "../utils/dateUtils.jsx"

import styles from './Post.module.css'

import {Comment} from "./Comment.jsx"

export function Post(props) {
  const timeZone = 'America/Sao_Paulo';
  const formattedDate = format(new Date(props.publishedAt), "yyyy-MM-dd HH:mm:ss", {timeZone})
  
  const [timeText, setTimeText] = useState(timeAgo(props.publishedAt))
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeText(timeAgo(props.publishedAt))
    }, 60000) // updates every minute
    
    return () => clearInterval(interval)
  }, [props.publishedAt])
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src={props.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>{props.role}</span>
          </div>
        </div>
        <time
          title={formattedDate}
          dateTime={formattedDate}
        >
          {timeText}
        </time>
      </header>
      
      <div className={styles.content}>
        <p>{props.content}</p>
        
        {props.link && (
          <p><a
            href={props.link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.link.text}
          </a></p>
        )}
        
        <p>{props.hashtags && props.hashtags.map((hashtag, idx) => (
          <a className={styles.hashtags} href="#" key={idx}>{hashtag}</a>
        ))}</p>
      </div>
      
      <form className={styles.commentForm}>
        <textarea
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}

// Default Exports vs. Named Exports