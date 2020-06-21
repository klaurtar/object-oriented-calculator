const CalculatorManager = (function(){
    const CalculatorManager = document.createElement('div');
    CalculatorManager.id = "CalculatorManager";


    function init(){
        document.body.appendChild(CalculatorManager);
    }
    init();

    return {
        createCalculator: () => {
            let calculator = new Calculator();
            let $calculatorElement = calculator.getCalculator();
            CalculatorManager.appendChild($calculatorElement);
            return calculator;
        }
    }
})();