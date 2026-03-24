

const Card = ({image , para1 , h3 , para2}) => {
  return (
    <>
        <div className="card">
        <div className="img">
            <img src={image} alt="" />
        </div>
            <div className="info">
                <p>{para1}</p>
                <h3>{h3}</h3>
                <p>{para2}</p>
            </div>
        </div>
    </>
  )
}

export default Card