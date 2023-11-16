import React, { useState, useEffect } from 'react'
import styles from "./newsModal.module.css"

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
    <div className={styles.container}>
        <h1 className={styles.h1}>Top News</h1>{newsData.map((article, index) => (
            <div key={index} className={styles.newsContainer}>
                <h3 className={styles.h3}>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={styles.readmore}>
                <i className="fa-solid fa-angles-right"></i> <span className={styles.span}>Read more</span>
                </a>
                <p className={styles.author}>Quelle: {article.author}</p>
            </div>
        ))}
    </div>
  )
}
