import { useEffect, useState } from "react"

export default function Main() {

    const [meme, setMeme] = useState({
        topText: "One does not simply", 
        bottomText: "Walk into Mordor", 
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [img, setImg] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setImg(data.data.memes))
    }, [])

    function getImg () {
        const random = Math.floor(Math.random() * img.length)
        setMeme((prev) => ({
            ...prev,
            imageUrl: img[random].url
        }))
    }

    function handleChange (e) {
        const { value, name } = e.target
        setMeme((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getImg}>Get a new meme image </button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}