import React from 'react'
import PropTypes from  'prop-types'
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

class Library extends React.Component {

    static defaultProps = {
      books: [
        {"title": "Tahoe Tales", "author":"someone", "pages": 1000}
      ]
    }
  
    state = { 
      open : true,
      freeBookmark : true,
      hiring: false,
      data: [],
      loading: false 
      
    }
  
    componentDidMount() {
  
      this.setState({loading: true})
      fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
        .then(data => data.json())
        .then(data => this.setState({data, loading: false}))
    }
  
    componentDidUpdate() {
  
      console.log("the component just update!")
  
    }
    
    /*
    constructor(props) {
      super(props)
      this.state = {
        open: true
      }
      this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
    }
  */
  
    toggleOpenClosed = () => {
      this.setState(prevState => ({
        open: !prevState.open
      }))
    }
  
    render() {
      const { books } = this.props
      return (
        <div>
          {this.state.hiring ? <Hiring /> : <NotHiring />}
          {this.state.loading 
          ? "loading..." 
          : <div>
              {this.state.data.map(product => {
                return (
                  <div key={product.id}>
                      <h3>Library Proiduct of the week!</h3>
                      <h4>{product.name}</h4>
                      <img alt={product.name} src={product.image} heifght={100} />
                    </div>
                )
              })}
            </div>
            }
          <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
          <button onClick={this.toggleOpenClosed}>Change the State</button>
          {books.map(
            (book, i) => 
              <Book key={i}
                    title={book.title} 
                    author={book.author} 
                    pages={book.pages}
                    freeBookmark={this.state.freeBookmark}/>
          )}
        </div>
      )
    }
  
  }

  export default Library