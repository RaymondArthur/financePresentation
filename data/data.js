let htmlData = {
    presentationTitle: "Introductory Finance",
    slides: {
        1:{
            title:"Introductory Finance: Fixed Income",
            content:`<h2>An introduction to finance and fixed income instruments</h2>
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
                <li>Fixed income (bonds/bills)</li>
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
        11:{
            title:"Bonds/Bills",
            content:`
            <p>A <em>bond</em> is simply a loan</p>
            <p>Bond issuers typically:</p>
            <ul>
                <li>Borrow an amount for a specified period of time</li>
                <li>Make periodic interest payments</li>
                <li>Pay back the amount borrowed at the end</li>
            </ul>
            <p>This is essentially the same structure as an interest-only mortgage</p>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        12:{
            title:"Bonds/Bills - Basic Elements",
            content:`
            <p>Three basic elements of a bond:</p>
            <ul>
                <li><strong>Face value</strong>: the amount being borrowed (i.e. the <em>principal</em>)</li>
                <li><strong>Coupons (fixed, floating, or indexed)</strong>: the periodic repayments on the bond</li>
                <li><strong>Maturity date</strong>: the date on which the repayments are completed</li>
            </ul>
            <h2>Bills</h2>
            <p>A <em>bill</em> is essentially a bond with no coupon payments.</p>
            <p>The interest is factored in to the initial borrowed amount</p>
            <p>E.g. borrow $9m up front, pay back $10m in 10 years, total interest is $1m</p>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        13:{
            title:"Bonds/Bills - Cash Flow Profile",
            content:`
            <p>The cash flows of a fixed interest bond vs bill</p>
            <img src='images/bondCashProfile.svg' class='multipleImages'/>
            <img src='images/billCashProfile.svg' class='multipleImages'/>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        14:{
            title:"Bonds/Bills - Valuation",
            content:`
            <h2>Present Value of a bond</h2>
            <p>PV<sub>bond</sub> = CF<sub>1</sub>/(1+r) + CF<sub>2</sub>/(1+r)<sup>2</sup>+ ... + (CF<sub>n</sub>+FV)/(1+r)<sup>n</sup></p>
            <h2>Present Value of a bill</h2>
            <p>PV<sub>bill</sub> = FV/(1+r)<sup>n</sup></p>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        15:{
            title:"Bonds/Bills - Valuation & Interest Rates",
            content:`
            <p>Using a bill as a stylised example...</p>
            <p>PV<sub>bill</sub> = FV/(1+r)<sup>n</sup></p>
            <p class='question'>What happens to the bill's Present Value when the interest rate r changes?</p>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        16:{
            title:"Bonds/Bills - Valuation & Interest Rates",
            content:`
            <p>Using a bill as a stylised example...</p>
            <p>PV<sub>bill</sub> = FV/(1+r)<sup>n</sup></p>
            <p class='question'>What happens to the bill's Present Value when the interest rate r changes?</p>
            <p class='question'><mark>If interest rate goes up, PV goes down</mark></p>
            <p class='answer'><mark>If interest rate goes down, PV goes up</mark></p>
            <p>The same is true for bonds</p>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        17:{
            title:"Bonds/Bills - Valuation & Interest Rates",
            content:`
            <p>Bond $10m face value, 10% coupon rate:</p>
            <img src='images/bondPVVersusInterestRates.svg' class='singleImage'>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        18:{
            title:"Bonds/Bills - Duration & Interest Rate Risk",
            content:`
            <p><strong>Duration</strong> describes the relationship between market value and interest rates</p>
            <p class='answer'><mark>Duration is the first derivative of the PV calculation</mark></p>
            <p>i.e. dPV/dr = duration</p>
            <p>Google the mathematics if interested...</p>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        19:{
            title:"Bonds/Bills - Duration & Interest Rate Risk",
            content:`
            <p>Duration formula:</p>
            <p class='answer'><mark>Modified Duration = (Sum(PV<sub>CFi</sub> x T)) / PV) / (1 + ytm)</mark></p>
            <p>From the formula</p>
            <ul>
                <li>Longer dated cash flows increase duration</li>
                <li>Shorter dated cash flows decrease duration</li>
            </ul>
            <p>
                Controlling duration is one way that the RBA manages interest rate risk on the foreign reserves portfolio.
            </p>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        20:{
            title:"Bonds/Bills - Duration & Interest Rate Risk",
            content:`
            <p>Put another way:</p>
            <ul>
                <li>Increasing duration increases the impact of interest rates changes on portfolio value</li>
                <li>Decreasing duration decreases the impact of interest rates changes on portfolio value</li>
            </ul>
            <p>So:</p>
            <ul>
                <li>Worried about rising interest rates? Lower the duration of the portfolio</li>
                <li>This generally hasn't been a problem since the GFC...</li>
            </ul>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        20:{
            title:"Bonds/Bills - Duration & Interest Rate Risk",
            content:`
            <p>Putting it all together:</p>
            <ul>
                <li>A key worry of bond traders is rising interest rates. Why?</li>        
                <li>If interest rates go up, bond values go down</li>    
                <li>What can bond traders do? Lower the duration of the portfolio</li>
                <li>Lower duration = lower change in portfolio value if interest rates rise. But...</li>
                <li>This generally hasn't been a problem since the GFC</li>
            </ul>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        21:{
            title:"Thank you",
            content:`<p>Thank you for your time.</p><p>Contact me if you have any questions and, as always, some good resources are:</p><ul><li>Google</li><li>Wikipedia</li><li>YouTube</li></ul>`
        }
    }
}

const jsonData = JSON.stringify(htmlData);
