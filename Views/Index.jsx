const React = require('react')

const Index extends React.Component {
    render() {
        const bottles = this.props.bottles
        return (
            <div>
                <h1>Index of Beers</h1>
                <nav>
                    <a href="/bottles/new">Go to the New Page</a>
                </nav>
                <ul>
                {
                    bottles.map(bottle, i) => {
                        return (
                            <li><a href={`/bottles/${i}`}>{bottle.name}</a></li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }

}

module.exports = Index; 