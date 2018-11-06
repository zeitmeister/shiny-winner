import React, {Component} from 'react'
import {
    Form,
} from 'react-bootstrap';


class SearchForm extends Component {
   
    fInput = React.createRef();
    years = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleFormSubmit(this.fInput.current.value, this.years.current.value);
        e.currentTarget.reset();
    }
  
    render() {
        console.log(this.fInput);
        return (
            <Form className="inputForm" onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    placeholder="Programming language" 
                    ref={ this.fInput }
                />
                 <input 
                    type="text"
                    placeholder="When did you start to learn it"
                    ref= { this.years }
                 />
                  <input className="form_button"
                    type="submit"
                    value="Strunt"
                 />
            </Form>
        );
}
}

export default SearchForm