let htmlData = {
    presentationTitle: "Introductory Finance",
    slides: {
        1:{
            title:"Introductory Finance",
            content:`<h2>An introduction to financial instruments</h2>
            <p>By Raymond Arthur</p>
            <p>This talk is available on my github</p>`
            .replace(/(\n)(\s{2,})/g," ")
        },
        2:{
            title:"Overview",
            content:`
            <p>This talk will cover the basics of:</p>
            <ul>
            <li>Time value of money and discounting cash flows</li>
            <li>Bonds/bills</li>
            <li>FX spot/forwards/swaps</li>
            </ul>`
            .replace(/(\n)(\s{2,})/g," ")
        },
        3:{
            title:"Conceptual Question: Time Value of Money",
            content:`
            <p class="question">If you have the choice between receiving $100 today or $100 in a month, which would you choose?
            </p>
            <p class="question">And, more importantly, why?</p>`
            .replace(/(\n)(\s{2,})/g," ")
        },
        4:{
            title:"Conceptual Question: Time Value of Money",
            content:`
            <p class="question">If you have the choice between receiving $100 today or $100 in a month, which would you choose?
            </p>
            <p class="answer"><mark>All else being equal, you should take $100 today</mark></p>
            <p class="question">And, more importantly, why?</p>
            <p class="question"><mark>There is a chance (i.e. "risk") of not receiving our $100 in a month</mark></p>
            <p class="question"><mark>Without being compensated for taking on the credit risk, we prefer $100 today</mark></p>` 
            .replace(/(\n)(\s{2,})/g," ")
        },
        5:{
            title:"Thank you",
            content:`<p>Thank you for your time.</p><p>Contact me if you have any questions and, as always, some good resources are:</p><ul><li>Google</li><li>Wikipedia</li><li>YouTube</li></ul>`
        }
    }
}

// for(let i of Object.keys(htmlData.slides)){
//     console.log(htmlData.slides[i].content.replace(/(\n)(\t)(\r)(\s)(&nbsp;)/,"-"));
// }

const jsonData = JSON.stringify(htmlData);
