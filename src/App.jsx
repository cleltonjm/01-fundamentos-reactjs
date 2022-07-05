import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Post } from './Post';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post 
            author="Clelton José Mielke" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores doloribus fugiat at laboriosam odio, dolorum provident nihil expedita doloremque dolor distinctio cum recusandae! Quos reprehenderit voluptatibus impedit exercitationem sunt vero?" 
          />
          <Post 
            author="Diego Fernandes"
            content="Um novo post muito legal!"
          />
        </main>
      </div>
    </>
  )
}

