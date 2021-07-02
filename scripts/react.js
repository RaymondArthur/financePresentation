//loading data
fetch('data/presentation.json')
    .then(response => response.json())
    .then(data=>{
        //saving data in presentationData binding
        const presentationData = data;
        console.log(Object.keys(presentationData.slides).length);

        //using a binding to specify the slide number
        //let slideNumber = 1;

        //react components
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
                return(
                    <div className='body'>
                        <p>
                            {this.props.content}
                        </p>
                    </div>
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
                if(this.state.slideNumber == 4)
                    {slideIncrement = 0}
                else
                    {slideIncrement = 1}

                //console.log(this.state.slideNumber);
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
                //console.log(this.props.slideNumber);
                return(
                    
                    <div>
                        <Title title={this.state.title} />
                        <Body content={this.state.content} />
                        {this.state.slideNumber > 1 &&  <Button buttonText='Previous' onClick={this.previousSlide}/>}
                        {this.state.slideNumber < 4 && <Button buttonText='Next' onClick={this.nextSlide}/>}
                    </div>
                );
            }

        }

ReactDOM.render(<Slide className ='slide'/>,document.getElementById('root'));
    })
    .catch(err=>console.log(err));

