(function(){
    const $calculatorButton = document.querySelector('#calculator');

    function setUpListeners(){
        $calculatorButton.addEventListener("click", () => {
            let calculator = CalculatorManager.createCalculator();
            
        })
    }
   
    function init() {
        setUpListeners();
    }
    init();
 
})();