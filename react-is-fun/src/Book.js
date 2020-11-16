import React from 'react'

export const Book = ({title, author, pages, freeBookmark}) => {
    return (
      <section>
        <h2>{title}</h2>
        <p>by : {author}</p>
        <p>Pages : {pages}</p>
        <p>Free Bookmark : {freeBookmark ? 'yes!' : 'no'}</p>
      </section>
  
    )
  }