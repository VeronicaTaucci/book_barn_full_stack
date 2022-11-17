import { Component } from "react";
import {Button,Form} from 'react-bootstrap/';
import '../styles/styles.css';


class Add_book extends Component {

    render(){

        return(
        <div className="addBookForm">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter book name" />
                    {/* <Form.Text className="text-muted">
                    ...
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Book Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter book author" />
                    {/* <Form.Text className="text-muted">
                    ...
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Book Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter book description" />
                    {/* <Form.Text className="text-muted">
                    ...
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Read pages</Form.Label>
                    <Form.Control type="number" className="form-control" min="0"/>
                    {/* <Form.Text className="text-muted">
                    ...
                    </Form.Text> */}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add book
                </Button>
            </Form>
        </div>
        )
    }
}

export default Add_book