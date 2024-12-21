
import Link from "next/link";
import "./card.css";


export default ({meraAd,m})=>{

    return <div className="card" style={{ width: "18rem" }}>
<Link href={"/productdetails/" + meraAd.name}>
    <h3>{m}</h3>

<div style={{textAlign: "center"}} >

  <img src={'/'+meraAd.src} className="card-img-top" alt="Card image loading..." />

  </div>

  <div className="card-body">
    <h5 className="card-title">{meraAd.name}</h5>
    <p className="card-text">
      Price {meraAd.price}
    </p>
    <a href="#" className="btn btn-primary">
   Add to Cart
    </a>
  
  </div>
  </Link>
</div>

}

