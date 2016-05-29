/*
  We need to somehoe get the state from the Redux code.
  to do this, we need to promote some COMPONENT, into
  a container. This container will be the manager of state.

  The package used to do this is named react-redux, which
  is COMPLETELY separate from both the React package, AND
  the Redux package...

  react-redux is the middleman between our Redux data, AND
  out React view... (The BRIDGE between the two separate libraries).
  We call this the CONTAINER.

  1. Smart Components (Container) == A Component that has a connection to Redux.
  2. Dumb Component == A Component that does NOT have a connection to redux.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux'; // <- the glue between React and Redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  _renderList() {
    return this.props.books.map((book) => {
      return(
        <li
         onClick={() => this.props.selectBook(book)}
         key={book.title}
         className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (

      <ul className="list-group col-sm-4">
        {this._renderList()}
      </ul>

    );
  }
}

function mapStateToProps(state){

  //Whatever is returned here, will show up as props
  // inside of BookList

  return {
    books:state.books // -> This is what connects Redux to the Smart Component.
  };
};


//Anything returned from this function, will end up as props
// on the BookList container.
function mapDispatchToProps(dispatch){

  //WHENEVER selectBook is called, the result should
  // be passed to ALL our reducers.
  //-----------------------------VVVV-----< selectBook is where the magic happens.
  // this.props.selectBook will call this action in the BookList container.
  return bindActionCreators({ selectBook:selectBook }, dispatch);

  //I'm gonna take all these actions (objects), and I'm going to passed
  // it to the reducers.

};


export default connect(mapStateToProps,mapDispatchToProps)(BookList); //This is what wires it together.
