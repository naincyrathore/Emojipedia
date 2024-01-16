function Card(props){
    return (
       <div className="cards">
        <div>
            <div className="card">
                <h2>{props.emoji}</h2>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
       </div>
        
       
    )
}

export default Card;