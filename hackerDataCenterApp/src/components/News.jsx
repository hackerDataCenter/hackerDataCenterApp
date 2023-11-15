import React, { useState, useEffect } from 'react'

export const News = () => {
  const [newsData, setNewsData] = useState([])
  const api = '799188ffc9ed4e9796582691645257c5'

  useEffect(() => {}, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=de&apiKey=${api}`)
        const data = await res.json()
        console.log(data)
        setNewsData(data.articles)
      } catch (error) {
        console.error(error)
      }
    };

    fetchData()
  }, [])

  return (
    <div>
      <h1>Top News</h1>
      <ul>
        {newsData.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p>Author: {article.author}</p>
            <p>Herausgegeben von: {article.publishedAt}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  )
}
