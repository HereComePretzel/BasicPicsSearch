import React from 'react'

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            spans: 0
        })

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        //listens for changes 
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        //retrieves properties of elements from the DOM
        const height = this.imageRef.current.clientHeight;
        //CSS has set max height to 150, this will determine how many spans are necesssary to accomodate the image.
        const spans = Math.ceil(height / 10 + 1);
        this.setState({
            spans
        })
    }

    render() {

        const { description, urls } = this.props.image

        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef}
                    src={urls.regular} 
                    alt={description}
                />
            </div>
        )
    }
}

export default ImageCard