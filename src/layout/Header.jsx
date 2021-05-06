function Header() {
    return <nav className="purple darken-4">
        <div className="nav-wrapper">
            <a href="#" className="brand-logo right">React Movies</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="!#">GitHub Repo</a></li>
            </ul>
        </div>
    </nav>
}

export { Header }