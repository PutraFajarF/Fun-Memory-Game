import './SingleCard.css'

const SingleCard = ({card: {src}} ) => {
  return(
    <div className="card">
      <div>
        <img className="front" src={src} alt="card front" />
        <img className="back" src="/img/cover.png" alt="cover" />
      </div>
    </div>
  )
}

export default SingleCard;