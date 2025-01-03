import './global.css'
import styles from './App.module.css'

import { Header } from "./components/Header.jsx"
import { Sidebar } from "./components/Sidebar.jsx"
import { Post } from './components/Post.jsx'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rafael Mardegan"
            role="Software Engineer"
            avatar="https://github.com/rmmarquini.png"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            link={{href: "https://www.linkedin.com/in/rmmarquini/", text: "Acesse meu perfil no LinkedIn"}}
            hashtags={["#react", "#frontend", "#webdev"]}
            publishedAt={new Date("2025-01-03 08:15:35").toISOString()}
          />
          
          <Post
            author="John Doe"
            role="Frontend Developer"
            avatar="https://github.com/diego3g.png"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            link=""
            hashtags={["#react", "#frontend"]}
            publishedAt={new Date("2025-01-02 16:44:12").toISOString()}
          />
        </main>
      </div>
    </>
  )
}
