import React , {useState} from 'react'
import { Button ,Modal ,Row ,Col, Form} from 'react-bootstrap'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AddDepart(props) {
  
  const [depart_name, seTdepart_name] = useState('')
  
  const handleSubmit = () => {
      

      // const Tosend = {
      //     method : 'post',
      //     url : 'http://192.168.1.50:5000/value',
      //     data : 1,
      //     'Content-Type': 'application/json',
      // }

        // axios.post('http://192.168.1.50:5000/value' , { name : "RRRR"})
        //   .then(res => {
        //       console.log(res)
        //       console.log(res.data)
        //   }).catch((err) => {console.log(err)})

  }

    return (
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className ='closeButton'>
        <Modal.Title id="contained-modal-title-vcenter">
          Adding Department
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
            {/* <Row>
                <Col>
                    <Form onSubmit={() => handleSubmit}>
                        <Form.Group controlId="DepartmentName" >
                           <Form.Label>DepartmentName</Form.Label>
                            
                            <Form.Control value={depart_name} 
                                        type="text"
                                        required 
                                        placeholder="departmentname" 
                                        onChange={(event) => seTdepart_name(event.target.value)}>
                            </Form.Control>
                              
                            
                            <p>#debug : {depart_name}</p>

                        </Form.Group>
                        <Button type="submit">Save</Button>
                    </Form>
                </Col>
            </Row> */}
        

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  
    )
}
