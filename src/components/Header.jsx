import trollface from "../assets/trollface.png"

export default function Header () {
    return (
        <section className="header">
            <img src={trollface} alt="trollface" />
            <h1>Meme Generator</h1>
        </section>
    )
}