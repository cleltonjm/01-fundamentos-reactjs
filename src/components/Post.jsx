import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/JulioHartwig.png" />
                    <div className={styles.authorInfo}>
                        <strong>Julio Ratomanocu</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de Maio às 08:00h" dateTime="2022-05-11 08:00:13">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}