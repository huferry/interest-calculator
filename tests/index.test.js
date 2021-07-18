const calculatorBuilder = require('./../js/index')

describe('calculator', () => {

    test('getState with default values, after 1 month returns default state', () => {
        // arrange
        const calculator = calculatorBuilder()
            .build()

        // act
        const actual = calculator.getState(1)

        // assert
        expect(actual).toStrictEqual({
            monthIndex: 1,
            initialValue: 0.0,
            currentValue: 0.0,
            monthInterest: 0.0
        })
    })

    test('getState with monthly interest 10%, after 1 month returns 10% of initial value', () => {
        // arrange
        const calculator = calculatorBuilder()
            .withInitialValue(100)
            .withMonthlyInterestRate(0.1)
            .build()

        // act
        const actual = calculator.getState(1)

        // assert
        expect(actual).toStrictEqual({
            monthIndex: 1,
            initialValue: 100.0,
            currentValue: 110.0,
            monthInterest: 10.0
        })
    })

    test('getState with monthly investment, after 1 month returns 10% of initial value', () => {
        // arrange
        const calculator = calculatorBuilder()
            .withInitialValue(10000)
            .withMonthlyInterestRate(0.005)
            .withMonthlyInvestment(500)
            .build()

        // act
        const actual = calculator.getState(10)

        // assert
        expect(actual).toStrictEqual({
            monthIndex: 10,
            initialValue: 10000.0,
            currentValue: 15625.4146,
            monthInterest: 75.2508
        })
    })


    test('getStates with monthly interest 10% for 3 months', () => {
        // arrange
        const calculator = calculatorBuilder()
            .withInitialValue(100)
            .withMonthlyInterestRate(0.1)
            .build()

        // act
        const actual = calculator.getStates(3)

        // assert
        expect(actual).toStrictEqual([{
            monthIndex: 0,
            initialValue: 100.0,
            currentValue: 100.0,
            monthInterest: 0.0
        }, {
            monthIndex: 1,
            initialValue: 100.0,
            currentValue: 110.0,
            monthInterest: 10.0
        }, {
            monthIndex: 2,
            initialValue: 100.0,
            currentValue: 121.0,
            monthInterest: 11.0
        }, {
            monthIndex: 3,
            initialValue: 100.0,
            currentValue: 133.1,
            monthInterest: 12.1
        }])
    })

})