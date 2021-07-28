import React from 'react'
import '../../assets/styles/transp-back.css'

class SearchUsers extends React.Component {
  state = {
    input: '',
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.input !== prevState.input) {
      this.props.filteruser(this.state.input)
    }
  }

  handleSearch = (event) => {
    const { value } = event.target
    this.setState({
      input: value,
    })
  }
  render() {
    return (
      <div className="">
        <input
          type="text"
          className="input searchUsersbackground"
          onChange={this.handleSearch}
          placeholder="Procurar..."
          value={this.state.input}
        />
      </div>
    )
  }
}

export default SearchUsers
