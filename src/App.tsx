import React from 'react';

import Section from './components/Section/Section';
import styles from './App.module.scss';


const noctuaImageUrl = "https://nft-service.api.ton.cat/img/eonBz2UrbJmcjB5iq-QrXkAEzGdKz7cpBdeFt0K4xhc/f:jpg/rs:fit:320:320:0/aHR0cDovL25mdC5hbmltYWxzcmVkbGlzdC5jb20vbmZ0cy9OaW5veCUyMG1hbGFpdGFlLnBuZw.jpg"
const antImageUrl = "https://nft-service.api.ton.cat/img/4YvD3o8l-Gr9LBHEEJodYBcZ1cjwT-vBS0pbgDTjBpM/f:jpg/rs:fit:320:320:0/aHR0cDovL25mdC5hbmltYWxzcmVkbGlzdC5jb20vbmZ0cy9DcmVtYXRvZ2FzdGVyJTIwYXRpbGFuaWNhLnBuZw.jpg"
const birdImageUrl = "https://nft-service.api.ton.cat/img/4cuAhBjvhnDmx1VIn_yE3l8hvzUU0ZrjVYq90GSwZYs/f:jpg/rs:fit:320:320:0/aHR0cDovL25mdC5hbmltYWxzcmVkbGlzdC5jb20vbmZ0cy9LdXBlb3JuaXMlMjBydWZvY2luY3R1cy5wbmc.jpg"
const images = [noctuaImageUrl, antImageUrl, birdImageUrl]



const sectionsConfig = [
  {
    topHeader: "> Добры Дзень",
    header: "danoctua",
    body: "Daniel M., Python/JS Developer - minimalist - husband - HODLer"
  },
  {
    topHeader: "> Праекты",
    header: "Projects",
    body: "Check my recent projects"
  },
  {
    topHeader: "> Кантакты",
    header: "Contacts",
    body: "You could contact me in any way from below"
  }
]


const App = () => {
  return (
    <div className={styles.App}>
      {
        sectionsConfig.map((sectionConfig, index) => (
          <Section
            key={index}
            topHeader={sectionConfig.topHeader}
            header={sectionConfig.header}
            imageUrl={images[index % images.length]}
            reversed={index % 2}
          >
            {sectionConfig.body}
          </Section>
        ))
      }
      
    </div>
    
  );
}

export default App;
