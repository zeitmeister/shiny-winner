import React, {Component} from 'react'
import {
    Form,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap';


class SearchForm extends Component {
   
    handleSubmit = (e) => {
        e.preventDefault();
        alert(this.name.value);
    }
  
    render() {
        const { value1 } = this.props;
        return (
            <Form inline onSubmit={this.handleSubmit}>
                <FormGroup controlId="formInlineEmail">
                    <FormControl input="text" placeholder="enter something..." value={value1}inputRef={ (input) => this.name = input}/>
                </FormGroup>
                {' '}
                <Button type="submit" >
            search
                </Button>
            </Form>
        );
}
}

export default SearchForm