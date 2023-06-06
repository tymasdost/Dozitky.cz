import './Home.css';
import SlidingMenu from "../Components/SlidingMenu/SlidingMenu";
import Header from '../Components/Header/Header.js'
import Hero from '../Components/Hero/Hero.js'
import ItemList from '../Components/ItemList/ItemList.js'
import Footer from '../Components/Footer/Footer.js'
import Team from '../Components/Team/Team.js'

export default function Home() {
  return (
    <>
      <div className="slide-down">
        <Header />
      </div>
      <SlidingMenu />
      <Hero />
      <div id='sloganCenter'>
        <img id='Slogans' src='https://cdn.discordapp.com/attachments/1105779457358315530/1113809873986134016/Novy_projekt.png' alt='dozitky'></img>
      </div>
      <ItemList id="doporucene" name="doporucene" text="doporučené" typ="podkategorie"/>
      <ItemList id="akce" name="akce" text="akce" typ="podkategorie"/>
      <ItemList id="popularni" name="popularni" text="populární" typ="podkategorie"/>
      <Team/>
      <Footer />
    </>
  );
}
