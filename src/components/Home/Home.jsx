import { Card } from '../ui'
import './Home.css'
import dress from "../../assets/EveningDress.png";
import sport from "../../assets/sportDress.png";

function Home() {
  return (
    <div className="homePage">
      <div className="banner">
        <h1>
          Fashion <br />
          sale
        </h1>
        <button>Check</button>
      </div>
      <div className="saleBlock">
        <div className="aboutSale">
          <h1 className="saleTitle">Sale</h1>
          <p className="saleCaption">Super summer sale</p>
          <button className="btn viewBtn">View all</button>
        </div>
        <main>
          <div className="cardList">
            <Card
              image={dress}
              sale="20"
              title="Evening"
              caption="Dorothy Perkins"
              price="12"
            />
            <Card
              isNew={true}
              image={dress}
              title="Evening Dress"
              caption="Dorothy Perkins"
              price="12"
            />
            <Card
              image={dress}
              title="Evening Dress"
              caption="Dorothy Perkins"
              price="12"
            />
            <Card
              image={dress}
              title="Evening Dress"
              caption="Dorothy Perkins"
              price="12"
            />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home