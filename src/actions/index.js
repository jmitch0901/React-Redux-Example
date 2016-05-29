export function selectBook(book){

  // selectBook is an ACTION CREATOR which needs
  // to return an ACTION (AKA: and object with a 'type' property)


  //This action should contain a TYPE and a PAYLOAD.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
};
