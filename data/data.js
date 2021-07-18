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
            <div class="qanda">
                <div class="question">
                    <p>If you have the choice between receiving $100 today or $100 in a month, which would you choose?</p>
                </div>
            </div>
            <div class="qanda">    
                <div class="question">
                    <p>Why?</p>
                </div>
            </div>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        4:{
            title:"Conceptual Question: Time Value of Money",
            content:`
            <div class="qanda">
                <div class= "question">
                    <p>If you have the choice between receiving $100 today or $100 in a month, which would you choose?
                    </p>
                </div>
                <div class="answer">
                    <p>All else being equal, you should take $100 today</p>
                </div>
            </div>
            <div class= "qanda">
                <div class="question">
                    <p class="question">Why?</p>
                </div>
                <div class="answer">    
                    <p class="answer">You could take your $100 today and invest it for one month</p>
                    <p class="answer">All else being equal, your one-month investment would return more than $100</p>
                </div>
            </div>` 
            .replace(/(\n)(\s{2,})/g," ")
        },
        5:{
            title:"Time Value of Money",
            content:`
            <div class="keyconcept">
                <p class="answer">A dollar today is worth more than a dollar in the future, because a dollar today can be invested for a positive return</p>
            </div>`
            .replace(/(\n)(\s{2,})/g," ")
        },
        6:{
            title:"Conceptual Question: Discounting Cash Flows",
            content:`
            <div class="qanda">
                <div class="question">
                    <p>If you invested your $100 for one month at an interest rate of 10% per month, how much would your $100 be worth in a month's time?
                    </p>
                </div>
            </div>`
            .replace(/(\n)(\s{2,})/g," ")
        },
        7:{
            title:"Conceptual Question: Discounting Cash Flows",
            content:`
            <div class="qanda">
                <div class="question">
                    <p class="question">If you invested your $100 for one month at an interest rate of 10% per month, how much would your $100 be worth in a month's time?
                    </p>
                </div>
                <div class="answer">
                    <p>$100 initial investment + $10 interest = $110 at end of month</p>
                </div>
            </div>`
            .replace(/(\n)(\s{2,})/g," ")
        },
        8:{
            title:"Conceptual Question: Discounting Cash Flows",
            content:`
            <p>Another way to express this calculation:</p>
            <div class="keyconcept">
                <p>$100 today + $10 interest = $110 in the future</p>
                <p>$100 x (1 + 10/100) = $110</p>
                <p>$100 x (1 + 10%) = $110</p>
                <p>Present Value x (1 + interest rate) = Future Value</p>
            </div>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        9:{
            title:"Foundation of Finance: Discounting Cash Flows",
            content:`
            <p>Rearranging gives the fundamental concept of finance:</p>
            <div class="keyconcept">
                <p>Present Value = Future Cash Flow / (1 + interest rate)<sup>n</sup></p>
            </div>
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
            <div class="keyconcept">
                <p>Present Value = Future Cash Flow / (1 + interest rate)<sup>n</sup></p>
            </div>
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
            <div class="keyconcept">
                <p>A <em>bill</em> is essentially a bond with no coupon payments.</p>
            </div>
            <p>The interest is factored in to the initial borrowed amount</p>
            <p>E.g. borrow $9m up front, pay back $10m in 10 years, total interest is $1m</p>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        13:{
            title:"Bonds/Bills - Cash Flow Profile",
            content:`
            <p>The cash flows of a fixed interest bond vs bill:</p>
            <div class="grid-container">
                <img src='images/bondCashProfile.svg' class="grid-item "/>
                <img src='images/billCashProfile.svg' class="grid-item "/>
            </div>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        14:{
            title:"Bonds/Bills - Valuation",
            content:`
            <h2>Present Value of a bond</h2>
            <div class="equation">
                <img class="equation" src="https://latex.codecogs.com/svg.latex?
                    \\LARGE&space;
                    PV_{bond}=\\frac{CF_{1}}{(1&plus;r)^{1}}&plus;\\frac{CF_{2}}{(1&plus;r)^{2}}&plus;...&plus;\\frac{CF_{n}}{(1&plus;r)^{n}}" title="BondPV" 
                />
            </div>
            <div class="equation">
                <img class="equation" src="https://latex.codecogs.com/svg.latex?
                    \\LARGE&space;
                    PV_{bond}=\\sum_{i=1}^{n}{\\frac{CF_{i}}{(1+r)^{i}}" title="BondPV" 
                />
            </div>    
            <h2>Present Value of a bill</h2>
            <div class="equation">
                <img class="equation" src="https://latex.codecogs.com/svg.latex?
                \\LARGE&space;
                PV_{bill}=\\frac{CF}{(1&plus;r)^{n}}" title="BillPV"
            />
            </div>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        15:{
            title:"Bonds/Bills - Valuation & Interest Rates",
            content:`
            <p>Using a bill as a stylised example...</p>
            <div class="equation">
                <img class="equation" src="https://latex.codecogs.com/svg.latex?
                \\LARGE&space;
                PV_{bill}=\\frac{CF}{(1&plus;r)^{n}}" title="BillPV"
            />
            </div>
            <div class="qanda">
                <div class="question">
                    <p>What happens to the bill's Present Value when the interest rate <em>r</em> changes?</p>
                </div>
            </div>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        16:{
            title:"Bonds/Bills - Valuation & Interest Rates",
            content:`
            <p>Using a bill as a stylised example...</p>
            <div class="equation">
                <img class="equation" src="https://latex.codecogs.com/svg.latex?
                \\LARGE&space;
                PV_{bill}=\\frac{CF}{(1&plus;r)^{n}}" title="BillPV"
            />
            </div>
            <div class="qanda">
                <div class="question">
                    <p>What happens to the bill's Present Value when the interest rate <em>r</em> changes?</p>
                </div>
                <div class="answer">
                    <p>If interest rate goes up, PV goes down</p>
                    <p>If interest rate goes down, PV goes up</p>
                </div>
            </div>
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
            <div class="keyconcept">
                <p>Duration is the first derivative of the PV calculation</p>
                <p>i.e. dPV/dr = duration</p>
            </div>
            <img src='images/DurationVsActualPV.svg' class='singleImage'>
            <p>See appendix if interested in the mathematics...</p>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        19:{
            title:"Bonds/Bills - Duration & Interest Rate Risk",
            content:`
            <p>Usable/practical duration formula:</p>
            <div class="keyconcept">
                <div class="equation">
                    <img class="equation" src="https://latex.codecogs.com/svg.latex?
                    \\LARGE&space;
                        ModD=                       
                            \\frac{
                                \\sum_{i=1}^{n}{
                                        iPV_{CF_{i}}
                                    }
                            }
                            {
                                PV_{B}
                            }/(1+y_{tm})"
                            title="BillPV"
                    />
                </div>
            </div>
            <p>Where:</p>
            <ul>
                <li>
                    <em>i</em> = time period <em>i</em>
                </li>    
                <li>
                    <em>PV<sub>CF<sub>i</sub></sub></em> = PV of Cash Flow <em>i</em>
                </li>
                <li>
                    <em>PV<sub>B</sub></em> = PV of bond (or bill)
                </li>
                <li>
                    <em>y<sub>tm</sub></em> = yield to maturity
                </li>
            </ul>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        20:{
            title:"Bonds/Bills - Duration & Interest Rate Risk",
            content:`
            <p>Usable/practical duration formula:</p>
            <div class="keyconcept">
                <div class="equation">
                    <img class="equation" src="https://latex.codecogs.com/svg.latex?
                    \\LARGE&space;
                        ModD=                       
                            \\frac{
                                \\sum_{i=1}^{n}{
                                        iPV_{CF_{i}}
                                    }
                            }
                            {
                                PV_{B}
                            }/(1+y_{tm})"
                            title="BillPV"
                    />
                </div>
            </div>
            <p>From the formula</p>
            <ul>
                <li>Longer dated cash flows increase duration</li>
                <li>Shorter dated cash flows decrease duration</li>
            </ul>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        21:{
            title:"Bonds/Bills - Duration & Interest Rate Risk",
            content:`
            <p>Put another way:</p>
            <ul>
                <li>Increasing duration also increases the portfolio's sensitivity to changes in interest rates</li>
                <li>Decreasing duration also decreases the portfolio's sensitivity to changes in interest rates</li>
            </ul>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        22:{
            title:"Bonds/Bills - Duration & Interest Rate Risk",
            content:`
            <p>Putting it all together:</p>
            <ul>
                <li>A key worry of bond traders and portfolio managers is rising interest rates. Why?</li>        
                <li>If interest rates go up, bond values go down</li>    
                <li>What can bond traders do? Lower the duration of the portfolio</li>
                <li>Lower duration = lower change in portfolio value if interest rates rise. But...</li>
                <li>This generally hasn't been a problem since the GFC</li>
            </ul>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        23:{
            title:"Thank you",
            content:`<p>Thank you for your time.</p>
            <p>Contact me if you have any questions and, as always, some good resources are:</p>
            <ul><li>Google</li><li>Wikipedia</li><li>YouTube</li></ul>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        24:{
            title:"Appendix: Deriving Duration",
            content:`
            <div class="equation">
                    <img class="appendixEquation" src="https://latex.codecogs.com/gif.latex?
                        \\small&space;
                        PV&space;=&space;
                        \\sum_{i=0}^{n}\\frac{CF_i}{(1&plus;r)^i}&space;
                        \\newline&space;\\newline&space;=&space;\\frac{CF_1}{(1&plus;r)^1}&plus;\\frac{CF_2}{(1&plus;r)^2}&plus;...&plus;\\frac{CF_n}{(1&plus;r)^n}&space;
                        \\newline&space;\\newline&space;Duration&space;=\\frac{\\partial&space;PV}{\\partial&space;r}
                        \\newline&space;\\newline&space;\\therefore&space;\\frac{\\partial&space;PV}{\\partial&space;r}&space;=&space;\\frac{\\partial}{\\partial&space;r}\\frac{CF_1}{(1&plus;r)^1}&plus;\\frac{\\partial}{\\partial&space;r}\\frac{CF_2}{(1&plus;r)^2}&plus;...&plus;\\frac{\\partial}{\\partial&space;r}\\frac{CF_n}{(1&plus;r)^n}&space;
                        \\newline&space;\\newline&space;\\therefore&space;\\frac{\\partial&space;PV}{\\partial&space;r}&space;=&space;\\frac{-CF_1}{(1&plus;r)^2}-\\frac{2CF_2}{(1&plus;r)^3}-...-\\frac{nCF_n}{(1&plus;r)^{n&plus;1}}&space;
                        \\newline&space;\\newline&space;\\therefore&space;\\frac{\\partial&space;PV}{\\partial&space;r}&space;=&space;\\sum_{i=0}^{n}\\frac{-iCF_i}{(1&plus;r)^{i&plus;1}}&space;
                        \\newline&space;\\newline&space;\\therefore&space;\\frac{\\partial&space;PV}{\\partial&space;r}&space;=&space;\\frac{-1}{(1&plus;r)}\\sum_{i=0}^{n}\\frac{iCF_i}{(1&plus;r)^{i}}&space;
                        \\newline&space;\\newline&space;\\therefore&space;\\frac{\\partial&space;PV}{\\partial&space;r}&space;=&space;\\frac{-1}{(1&plus;r)}\\sum_{i=0}^{n}iPV_{CF_i}" 
                        title="durationDerivation"
                    />
            </div>
            `
            .replace(/(\n)(\s{2,})/g," ")
        },
        25:{
            title:"Appendix: Modified Duration",
            content:`
            <div class="equation">
                <img class="appendixEquation"
                    src="https://latex.codecogs.com/gif.latex?
                    \\small&space;
                    \\newline&space;\\frac{\\partial&space;PV}{\\partial&space;r}&space;=&space;\\frac{-1}{(1&plus;r)}\\sum_{i=0}^{n}iPV_{CF_i}&space;=&space;Duration&space;
                    \\newline&space;\\newline&space;\\newline&space;\\therefore&space;\\frac{\\Delta&space;PV}{\\Delta&space;r}&space;=&space;Duration&space;
                    \\newline&space;\\newline&space;\\therefore&space;\\Delta&space;PV&space;=&space;Duration\\Delta&space;r&space;
                    \\newline&space;\\newline&space;\\therefore&space;\\frac{\\Delta&space;PV}{PV_B}&space;=&space;\\frac{Duration\\Delta&space;r&space;}{PV_B}&space;=&space;ModD&space;
                    \\newline&space;\\newline&space;where&space;\\phantom{b}&space;ModD=&space;\\phantom{b}&space;Modified&space;\\phantom{b}&space;Duration&space;\\phantom{b}&space;
                    \\newline&space;and&space;\\phantom{b}&space;PV_B=PV&space;\\phantom{b}&space;of&space;\\phantom{b}&space;the&space;\\phantom{b}&space;Bond&space;\\phantom{b}&space;or&space;\\phantom{b}&space;Bill" 
                    title="ModDuration" />
            </div>
            <p>"Modified Duration" is the definition of duration <em>in practice</em>.</p>
            <p>This is important because, in practice, we have to use discrete approximations to estimate a continuous function such as a bond's duration.</p>
                `
            .replace(/(\n)(\s{2,})/g," ")
        }
    }
}

const jsonData = JSON.stringify(htmlData);
