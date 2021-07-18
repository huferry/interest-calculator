function calculatorBuilder() {

    const builder = {
        initialValue: 0.0,
        interestRate: 0.0,
        monthlyInvestment: 0.0
    }

    return {
        withInitialValue: function(initialValue: number) {
            builder.initialValue = initialValue
            return this
        },

        withMonthlyInterestRate: function(interestRate: number) {
            builder.interestRate = interestRate
            return this
        },

        withMonthlyInvestment: function(monthlyInvestment: number) {
            builder.monthlyInvestment = monthlyInvestment
            return this
        },

        build: function () {
            const getState = (months: number) => getStates(months).reverse()[0]

            function getStates(months: number) {
                let currentState = {
                    monthIndex: 0,
                    initialValue: builder.initialValue,
                    currentValue: builder.initialValue,
                    monthInterest: 0.0
                }

                const result = [ {...currentState} ]

                for(let month = 1; month <= months; month++) {
                    const monthInterest = Math.round(currentState.currentValue * builder.interestRate * 10000) / 10000
                    currentState = { 
                        ...currentState, 
                        monthIndex: month,
                        currentValue: currentState.currentValue + monthInterest + builder.monthlyInvestment,
                        monthInterest
                    }
                    result.push({...currentState})
                }

                return result
            }

            return { getState, getStates }
        }
    }

}

module.exports = calculatorBuilder;