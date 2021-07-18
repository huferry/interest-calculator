# Compound Interest Calculator

This module helps to calculate the compound interest.

```java
const builder = require('interest-calculator')

const calculator = builder()
        .withInitialValue(100000)      // set the initial value to 100,000
        .withMonthlyInterestRate(0.05) // set the interest rate to 5%/month
        .withMonthlyInvestment(0.0)    // no monthly investment
        .build()

const month12 = calculator.getState(12)

consoloe.log(month12)
// { 
//    monthIndex: 12, 
//    initialValue: 100000, 
//    currentValue: 179585.63260000004, 
//    monthInterest: 8551.6968
//  }

const toMonth12 = calculator.getStates(12)
// will return the state from the 0th to the 12th months.
```