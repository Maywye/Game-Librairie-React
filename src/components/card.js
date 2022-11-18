import '../styles/Card.css'

const Card = ({title, txt, img, status}) => {



    return (
        <>
            <div className="card">
                <div className="card-header">
                    <img src={img} alt={title}/>
                </div>
                <div className="card-body">
                    <h3 style={{color: (status) ? 'green' : 'red'}}>{title}</h3>
                    <p>{txt}</p>
                </div>
            </div>
        </>
    )
}
export default Card;