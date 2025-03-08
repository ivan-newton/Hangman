import React from 'react';


// Use this class to allow the user to enter a letter
// this class needs a function passed as a prop called onSearch to handle the user's request
class SingleLetterSearchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

    handleInputChange = (event) => {
        const value = event.target.value.charAt(0); // Get only the first character
        this.setState({
            inputValue: value}
        );
    };

    handleSearchClick = () => {
      if (this.props.onSearch && this.state.inputValue) {
        this.props.onSearch(this.state.inputValue); // Pass guessed letter
        this.setState({ inputValue: '' }); // Clear input after guessing
      }
    }
    

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          maxLength={1}
        />
        <button onClick={this.handleSearchClick}>Search</button>
      </div>
    );
  }
}

export default SingleLetterSearchbar;