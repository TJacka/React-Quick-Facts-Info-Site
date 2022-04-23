import React from "react"

export default function Main(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <div className="main__title">Quick React Facts</div>
            <ul className="main__facts">
                <li>Created by: Jordan Walke</li>
                <li>Initial release: 2013</li>
                <li>Github stars: over 100k</li>
                <li>Maintained by: Facebook</li>
                <li>Powers: 1000s of enterprise apps, including mobile apps </li>
            </ul>
        </main>
    )
}