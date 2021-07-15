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

class SlideMenuButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
                <div className='slideMenuButton'>
                    <Button  buttonText='Toggle Slide Quick-Menu' onClick={this.props.toggleSlideMenu} />
                </div>                
            );
    }
}

class SlideMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let slideMenuList = [];
        for(let i = 1; i <= Object.keys(presentationData.slides).length; i++)
         {
             slideMenuList.push(<div key={i.toString()} className="slideMenuTile" >
                 <Slide 
                    tileId = {this.props.slideKeys[i-1]} 
                    title={presentationData.slides[i].title} 
                    content={presentationData.slides[i].content }
                    quickSelectSlide={this.props.quickSelectSlide}
                />
             </div>);
        }
        
        return(
            this.props.toggleState == true ?
                <div className="slideMenuColumns">
                    {slideMenuList}
                </div>
            :
            null
            );
    }
}

class Slide extends React.Component{
    constructor(props){
        super(props);
        this.getSlideTileId = this.getSlideTileId.bind(this);
    }

    getSlideTileId(e){
        this.props.quickSelectSlide(this.props.tileId);
        window.scrollTo(0,0);
    }

    render(){
        return(
            this.props.slideMenu == false ?
                <div className ='slide'>
                    <ProgressBar slideNumber = {this.props.slideNumber} totalSlides = {Object.keys(presentationData.slides).length} />
                    <Title title={this.props.title} />
                    <Body content={this.props.content} />
                    <div className = 'buttons'>
                        {this.props.slideNumber > 1 &&  <Button buttonText='Previous' onClick={this.props.previousSlide}/>}
                        {this.props.slideNumber < Object.keys(presentationData.slides).length && <Button buttonText='Next' onClick={this.props.nextSlide}/>}
                    </div>
                    <SlideProgress slideNumber = {this.props.slideNumber} totalSlides = {Object.keys(presentationData.slides).length} />
                </div>
                :
                <div className ='slideMenuTile' onClick={this.getSlideTileId} tileid ={this.props.tileId}>
                    <Title tileId ={this.props.tileId} title={this.props.title} />
                    <Body tileId ={this.props.tileId} content={this.props.content}/>
                </div>
                
        );
    }
}

class ReactApp extends React.Component {
    constructor(props){
        super(props);
        this.state={    
            showSlideMenu:false,
            slideNumber:'',
            title:'',
            content:'',
            slideKeys:''
        }
        this.nextSlide=this.nextSlide.bind(this);
        this.previousSlide=this.previousSlide.bind(this);
        this.toggleSlideMenu = this.toggleSlideMenu.bind(this);
        this.quickSelectSlide = this.quickSelectSlide.bind(this);
    }

    componentDidMount(){
        let slideKeysList = [];
        for(let j = 1; j<= Object.keys(presentationData.slides).length;j++){
            slideKeysList.push(j);
        }
        this.setState ({
            slideNumber: 1,
            title:presentationData.slides[1].title,
            content:presentationData.slides[1].content,
            slideKeys:slideKeysList
        })
    }

    toggleSlideMenu(e){
        this.setState({showSlideMenu:!this.state.showSlideMenu});
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
    
    quickSelectSlide(num){
        this.setState({
        slideNumber:num,
            title:presentationData.slides[num].title,
            content:presentationData.slides[num].content
        })
    }


    render(){
        return(
            <div>
                <Slide 
                    slideNumber = {this.state.slideNumber}
                    slideMenu={false} title={this.state.title}
                    content={this.state.content}
                    nextSlide={this.nextSlide}
                    previousSlide={this.previousSlide}
                />
                <SlideMenuButton toggleSlideMenu={this.toggleSlideMenu} toggleState={this.state.showSlideMenu}/>
                <SlideMenu 
                    slideKeys={this.state.slideKeys}
                    toggleState={this.state.showSlideMenu}
                    slideMenu= {true} 
                    quickSelectSlide={this.quickSelectSlide}
                />
            </div>
        );
    }
}

ReactDOM.render(<ReactApp />,document.getElementById('root'));



