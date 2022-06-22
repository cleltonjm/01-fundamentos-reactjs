import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <>
      <Header />
      <Post 
        author="Clelton José Mielke" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores doloribus fugiat at laboriosam odio, dolorum provident nihil expedita doloremque dolor distinctio cum recusandae! Quos reprehenderit voluptatibus impedit exercitationem sunt vero?" 
      />
      <Post 
        author="Diego Fernandes"
        content="Um novo post muito legal!"
      />
    </>
  )
}

