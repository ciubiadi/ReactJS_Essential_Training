import React from 'react'
import { render } from 'react-dom'
import Library from './Library'


let bookList = [
  {"title": "Title 1", "author": "Author 1", "pages": 270},
  {"title": "Title 2", "author": "Author 2", "pages": 123},
  {"title": "Title 3", "author": "Author 3", "pages": 312},
]
 
 /*
class FaboriteColorForm extends React.Component {
  state = { value: ''}

  newColor = e => 
    this.setState({ value: e.target.value })

  submit = e => {
    console.log(`New Color: ${this.state.value}`)
    e.preventDefault()
  }
  
  render() {
    return (
      <form onSubmit={this.submit}>
        <label>Favborite Color:
          <input 
              type="color" 
              onChange={this.newColor} />
        </label>
        <button>Submit</button>
      </form>
    )
  }
} */




render(
  <Library books={bookList}/>,
 // <FaboriteColorForm />,
  document.getElementById('root')
)