//storing the data from data.js in a const binding as a JSON object
const presentationData = JSON.parse(jsonData);        

//react components
class ProgressBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const style ={
            width: this.props.slideNumber / this.props.totalSlides * 100 +'%',
            backgroundColor: 'pink',
            height: '20px',
            margin: '0px'
        }; 
        console.log();
        return (
            <div style = {style}>
             
            </div> 
        );
    }
}

class Title extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='title'>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class Body extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const markupData = this.props.content;

        function htmlMarkup(data){
            return {__html: `${data}`}
        }

        return(
            <div className='body'
                dangerouslySetInnerHTML={htmlMarkup(markupData)}                    
            />
        );
    }
}

class Button extends React.Component{
    render(){
        return(
            <button onClick={this.props.onClick}>{this.props.buttonText}</button>
        );
    }
}

class SlideProgress extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "slideProgress">
                <p>Slide {this.props.slideNumber} of {this.props.totalSlides}</p>
            </div>
        );
    }
}

class Slide extends React.Component{
    constructor(props){
        super(props);
        this.state={
            slideNumber:'',
            title:'',
            content:''
        }
        this.nextSlide=this.nextSlide.bind(this);
        this.previousSlide=this.previousSlide.bind(this);
    }

    componentDidMount(){
        this.setState ({
            slideNumber: 1,
            title:presentationData.slides[1].title,
            content:presentationData.slides[1].content
        })
    }

    nextSlide(e){
        let slideIncrement;
        //Note that Object.keys(presentationData.slides).length effectively returns the number of slides in the json object
        //We don't want to let the slideNumber be greater than the  the number of keys in the presentationData object
        if(this.state.slideNumber == Object.keys(presentationData.slides).length)
            {slideIncrement = 0}
        else
            {slideIncrement = 1}

        this.setState (
            (state) =>
            (
                {
                slideNumber: state.slideNumber + slideIncrement,
                title:presentationData.slides[state.slideNumber + slideIncrement].title,
                content:presentationData.slides[state.slideNumber + slideIncrement].content
                }
            )
        )
    }

    previousSlide(e){
        let slideIncrement;
        if(this.state.slideNumber == 1)
            {slideIncrement = 0}
        else
            {slideIncrement = 1}
            
        this.setState (
            (state) =>
            ({
                slideNumber: state.slideNumber - slideIncrement,
                title:presentationData.slides[state.slideNumber - slideIncrement].title,
                content:presentationData.slides[state.slideNumber - slideIncrement].content
            })
        )
    }

    render(){
        return(
            
            <div>
                <ProgressBar slideNumber = {this.state.slideNumber} totalSlides = {Object.keys(presentationData.slides).length} />
                <Title title={this.state.title} />
                <Body content={this.state.content} />
                <div className = 'buttons'>
                        {this.state.slideNumber > 1 &&  <Button buttonText='Previous' onClick={this.previousSlide}/>}
                        {this.state.slideNumber < Object.keys(presentationData.slides).length && <Button buttonText='Next' onClick={this.nextSlide}/>}
                </div>
                <SlideProgress slideNumber = {this.state.slideNumber} totalSlides = {Object.keys(presentationData.slides).length} />
            </div>
        );
    }
}

ReactDOM.render(<Slide className ='slide'/>,document.getElementById('root'));



