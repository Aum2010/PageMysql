import React , {useState , useEffect} from 'react'
import axios from 'axios'
import {Table , Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddDepart from './AddDepart'



export default function Departments() {
    const [dataValue, setDataValue] = useState([])
    const [modalShow, setModalShow] = useState(false);
    
    useEffect(() => {
        axios.get('http://192.168.1.50:5000/value').then((res) => {
            const {data} = res
        setDataValue(data)
            
        })
        
    }, [])

    // const postTo = () => {
    //     axios({
    //         method : 'post',
    //         url: 'http://192.168.1.50:5000/value',
    //         data : {
    //           title : 'New Todo'
    //         }
    //       }).then(res => {
    //               console.log(res)
    //               console.log(res.data)
    //           }).catch((err) => {console.log(err)})
    // } forTest

    return (
        <div>
            <br></br>
            <h1  className="text-center">Departments Page</h1>
            {/* <h1>{JSON.stringify(dataValue)}</h1> */}
            {/* <ul>

                {dataValue.map((item) => (<li>{item.id} {item.timestamp} {item.value}</li>))}

            </ul> */}
            <br></br>
            <Table>
                <thead className='thead-light'>
                    <tr>
                        <th>ID</th>
                        <th>timestamp</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                        {dataValue.map((item) => <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.timestamp}</td>
                            <td>{item.value}</td>
                        </tr>)}
                </tbody>
            </Table>
            
            <br></br>
            <div className="text-center">

                <Button variant="dark" onClick={() => setModalShow(true)}>
            Launch vertically centered modal
                </Button>

            </div>

            <br></br>
            
                {/* <Button onClick={() => postTo()}>Test</Button>  ForTest*/}
            

                    <AddDepart
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />

           

        </div>
    )
}
