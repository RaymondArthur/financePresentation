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
            <p class="question">Why?</p>`
            .replace(/(\n)(\s{2,})/g," ")
        },
        4:{
            title:"Conceptual Question: Time Value of Money",
            content:`
            <p class="question">If you have the choice between receiving $100 today or $100 in a month, which would you choose?
            </p>
            <p class="answer"><mark>All else being equal, you should take $100 today</mark></p>
            <p class="question">Why?</p>
            <p class="question"><mark>You could take your $100 today and invest it for one month</mark></p>
            <p class="question"><mark>All else being equal, your one-month investment would return more than $100</mark></p>` 
            .replace(/(\n)(\s{2,})/g," ")
        },
        5:{
            title:"Time Value of Money",
            content:`<p>The logic behind the answer:</p>
            <p class="answer"> A dollar today is worth more than a dollar in the future, because a dollar today can be invested for a positive return</p>
            <p class="question"><mark>This concept is known as the "Time Value of Money"</mark></p>`
            .replace(/(\n)(\s{2,})/g," ")
        },
        6:{
            title:"Conceptual Question: Discounting Cash Flows",
            content:`
            <p class="question">If you invested your $100 for one month at an interest rate of 10% per month, how much would your $100 be worth in a month's time?
            </p>`
            .replace(/(\n)(\s{2,})/g," ")
        },
        7:{
            title:"Conceptual Question: Discounting Cash Flows",
            content:`
            <p class="question">If you invested your $100 for one month at an interest rate of 10% per month, how much would your $100 be worth in a month's time?
            </p>
            <p>$100 initial investment + $10 interest = $110 at end of month</p>`
            .replace(/(\n)(\s{2,})/g," ")
        },
        8:{
            title:"Conceptual Question: Discounting Cash Flows",
            content:`
            <p>Another way to express this calculation:</p>
            <p>$100 today + $10 interest = $110 in the future</p>
            <p>$100 x (1 + 10/100) = $110</p>
            <p>$100 x (1 + 10%) = $110</p>
            <p class="answer">Present Value x (1 + interest rate) = Future Value</p>`
            .replace(/(\n)(\s{2,})/g," ")
        },
        9:{
            title:"Foundation of Finance: Discounting Cash Flows",
            content:`
            <p>Rearranging gives the fundamental concept of finance:</p>
            <p class="answer"><mark>Present Value = Future Cash Flow / (1 + interest rate)<sup>n</sup></mark></p>
            <p>Where:</p>
            <ul>
                <li><em>n</em> is the number of compounding periods</li>
                <li>The interest rate refers to the interest rate <em>per compounding period</em></li>
            </ul>
                `
            .replace(/(\n)(\s{2,})/g," ")
        },
        10:{
            title:"Foundation of Finance: Discounted Cash Flows",
            content:`
            <p class="answer"><mark>Present Value = Future Cash Flow / (1 + interest rate)<sup>n</sup></mark></p>
            <p>Finding the present value of a future cash flow is the foundation of finance</p>
            <ul>
                <li>Bonds/Bills: discount future coupon payments (if applicable) and principal</li>
                <li>FX: discount future FX flows </li>
                <li>Equities: discount net value of expected future profits</li>
                <li>Derivatives (e.g. options/futures/forwards): can involve more complicated valuations involving probability of cash flow occurring</li>
            </ul>`
            .replace(/(\n)(\s{2,})/g," ")
        },
        
        /*
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
            title:"Time Value of Money",
            content:`<p class="answer">The logic behind the answer: A dollar today is worth more than a dollar in the future</p>
            <p class="question"><mark>This concept is known as the "Time Value of Money"</mark></p>`
        },
        6:{
            title:"Risk and Compensation",
            content:`<ul>
            <li>If our choice is $100 today vs $100 in the future, always elect to receive $100 <em>today</em></li>
            <li>We have no incentive to receive our money in the future</li>
            <li><em>Risk</em> generally refers to the likelihood of not getting our money back</li>
            </ul>`
        },
        7:{
            title:"Risk and Compensation",
            content:`
            <ul><li>We would need appropriate <em>compensation</em> to make a future payment acceptable</li></ul>
            <p class ="answer"><mark>Basic principle of finance: we do not like unnecessary risk. To accept taking risk, we expect compensation</mark></p>
            <ul><li>Charging interest is one way of being compensated</li></ul>`
        },
        8:{
            title:"Conceptual Question: Risk and Compensation",
            content:`<p class="question">You lent $100 to someone. Would you prefer to:</p>
            <ul>
                <li>Get your $100 back today; or</li>
                <li>Get $110 in a month?</li>
            </ul>` 
        },
        9:{
            title:"Conceptual Question: Risk and Compensation",
            content:`<p class="question">You lent $100 to someone. Would you prefer to:</p>
            <ul>
                <li>Get your $100 back today; or</li>
                <li>Get $110 in a month?</li>
            </ul>
            <p class="answer"><mark>Your preference will depend on your "risk tolerance"</mark></p>
            <ul>
                <li>This time, you are receiving 10% interest as compensation for the risk of not getting your money back in a month's time</li>
                <li>Some of you will still prefer to get your $100 back today</li>
                <li>But, some of you will happily take on the credit risk in exchange for the 10% interest</li>
            </ul>` 

        },*/
        11:{
            title:"Thank you",
            content:`<p>Thank you for your time.</p><p>Contact me if you have any questions and, as always, some good resources are:</p><ul><li>Google</li><li>Wikipedia</li><li>YouTube</li></ul>`
        }
    }
}

// for(let i of Object.keys(htmlData.slides)){
//     console.log(htmlData.slides[i].content.replace(/(\n)(\t)(\r)(\s)(&nbsp;)/,"-"));
// }

const jsonData = JSON.stringify(htmlData);
