import "./header.css"

export default function Header() {
    return (
        <nav className="navbar">
          <link to="/">Home</link>
            <link to="/quemsomos">quemsomos</link>
            <link to="/frutas"></link>
            <link to="/produtos"></link>
        </nav>
    )
}