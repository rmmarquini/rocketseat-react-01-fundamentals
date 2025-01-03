import {Post} from './Post'
import './global.css'
import styles from './App.module.css'
import {Header} from "./components/Header.jsx";
import {Sidebar} from "./components/Sidebar.jsx";

export function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rafael Mardegan"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <Post
            author="John Doe"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
        </main>
      </div>
    </>
  )
}
