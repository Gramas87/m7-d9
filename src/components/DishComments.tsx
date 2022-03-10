import ListGroup from 'react-bootstrap/ListGroup'

import Pasta from "../types/IPastaObject"



interface PastaProps{
  selectedDish: Pasta | undefined
}



const DishComments = (props: PastaProps) => (
  <ListGroup>
    {props.selectedDish ? (
      props.selectedDish.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
)

export default DishComments
