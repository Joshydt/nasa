import { h, Component } from 'preact';

export class SearchForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        type: 'image',
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.setType = this.setType.bind(this);

      console.log('props', props);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();

      // Pass query string to parent componenet
      this.props.func(this.state.value, this.state.type);
    }
    
    setType(event) {
        this.setState({
            type: event.target.value ? event.target.value : 'image'
        });
        return;
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            NASA Search:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />

            <div onChange={this.setType}>
                <input type="radio" value="image" name="type" checked/> Images
                <input type="radio" value="audio" name="type"/> Audio
            </div>

        </form>
      );
    }
  }

  