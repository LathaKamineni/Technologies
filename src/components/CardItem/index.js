// Write your code here.

import './index.css'

const CardItem = props => {
  const {eachCard} = props
  const {id, title, description, imgUrl, className} = eachCard
  return (
    <li className={`card ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <img src={imgUrl} alt={title} className="img" />
    </li>
  )
}

export default CardItem
