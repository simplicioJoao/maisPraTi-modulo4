import { useState, useEffect } from "react"

function News() {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchNews = async () => {
            setIsLoading(true)

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await response.json()
                setNews(data.slice(0, 5))
            } catch {
                console.log('Algo deu errado')
            }

            setIsLoading(false)
        }

        fetchNews()
        const interval = setInterval(fetchNews, 10000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h1>Últimas Notícias Simuladas</h1>
            {isLoading ? (
                <p>Carregando notícias</p>
            ) : (
                <ul>
                    {
                        news.map((article) => (
                            <li key={article.id}>
                                <p>{article.title}</p>
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    )
}

export default News