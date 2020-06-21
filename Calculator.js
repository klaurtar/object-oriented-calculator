class Calculator{
    constructor(){
        this.$calculatorElement = document.createElement('div');
        this.$calculatorElement.className = "calculator";
        this.$calculatorElement.insertAdjacentHTML("afterbegin", ejs.render(calculatorTemplate));
    }

    getCalculator(){
        return this.$calculatorElement;
    }
}