import { h, Component } from 'preact';

export default class SearchForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      console.log('props', props);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();

      // Pass query string to parent componenet
      this.props.func(this.state.value);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            NASA Search:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  