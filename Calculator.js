class Calculator{
    constructor(){
        this.$calculatorElement = document.createElement('div');
        this.$calculatorElement.className = "calculator";
        this.$calculatorElement.insertAdjacentHTML("afterbegin", ejs.render(calculatorTemplate));

        this.$calcDisplay = this.$calculatorElement.querySelector('#calcDisplay');

        this.$oneButton = this.$calculatorElement.querySelector('#oneButton');

        this.$calculatorButtons = this.$calculatorElement.querySelector('.mathematicsButtons');

        this.numValue = 0;
        this.renderValue = '';
        this.$calcDisplay.value = this.renderValue;

        this.renderCalcDisplay = (str) => {
            this.$calcDisplay.value = str;
        }

        this.decimalPresent = false;

        this.calculate = (num1, operator, num2) => {
            let total;
            if(operator === "add"){
                total = num1 + num2;
            } else if(operator === "minus"){
                total = num1 - num2;
            } else if(operator === "divide"){
                total = num1 / num2;
            } else if(operator === "multiply"){
                total = num1 * num2;
            }
            return total;
        }

        this.setUpListeners();
    }

    getCalculator(){
        return this.$calculatorElement;
    }




    setUpListeners(){
        this.$calculatorButtons.addEventListener('click', (event) => {
            if(event.target.matches('button')){
                const button = event.target;
                const action = button.dataset.math;

                if(!action){
                    //This is a number key pressed
                    this.renderValue += button.textContent;
                    console.log(this.renderValue);
                    this.renderCalcDisplay(this.renderValue);
                } else {
                    if(action === 'decimal'){
                        if(!this.decimalPresent){
                            this.renderValue += ".";
                            this.renderCalcDisplay(this.renderValue);
                            this.decimalPresent = true;
                        }
                        
                    } else if (action === 'clear'){
                        this.value = 0;
                        this.renderValue = "";
                        this.renderCalcDisplay(this.renderValue);
                        this.decimalPresent = false;
                    } else if (action === "add" || action === "minus" || action === "divide" || action === "multiply") {
                        this.$calculatorElement.dataset.operator = action;
                        this.$calculatorElement.dataset.prevCalculation = this.renderValue;

                        this.renderValue = '';
                        this.renderCalcDisplay(this.renderValue);
                    } else if(action === "equal"){
                        const total = this.calculate(parseInt(this.$calculatorElement.dataset.prevCalculation), this.$calculatorElement.dataset.operator, parseInt(this.renderValue));
                        this.renderCalcDisplay(total);
                        this.$calculatorElement.dataset.prevCalculation = total;
                    }
                }
            }
        })
    }
}