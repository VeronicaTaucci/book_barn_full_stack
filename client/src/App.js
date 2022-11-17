import { Component } from "react";
import AddBook from "./components/AddBook";
class App extends Component {
  constructor(){
    super()
    this.state={
      books:[]
    }
  }
componentDidMount(){
  fetch('http://localhost:8080/')
  .then(result=> result.json())
  .then(booksData=>{
    this.setState({
      books: booksData
    })
  })
}
    render(){
      let bookItems = 'No books'
      if(this.state.books.length > 0){
        bookItems = this.state.books.length.map(book=>{
          return <li>{book}</li>
        })
      }
        return(
            <>
            {bookItems}
            <AddBook/>
            </>
        )
    }
}

export default App