import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/rmmarquini.png" alt="" />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Marquini</strong>
              <time title="2021-10-01 15:00:00" dateTime="2021-10-01 15:00:00">há 1 minuto</time>
            </div>
            <button title={`Deletar comentário`}>
              <Trash size={20} />
            </button>
          </header>
          <p>Conteúdo do comentário</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}