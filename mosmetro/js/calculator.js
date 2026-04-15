(function() {
    console.log('calculator.js загружен, инициализация...');

    let a = ''              // первое число
    let b = ''              // второе число
    let expressionResult = ''  // результат вычисления
    let selectedOperation = null  // выбранная операция
    let memory = 0          // память для M+ и M-
    

    const outputElement = document.getElementById("result")
    const digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    

    if (!outputElement) {
        console.error('Элемент #result не найден!')
        return
    }
    
    console.log('Элементы найдены, инициализируем кнопки...')
    

    function updateDisplay(value) {
        if (outputElement) {
            outputElement.innerHTML = value === '' ? '0' : value
        }
    }
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit
            }
            updateDisplay(a)
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit
                updateDisplay(b)
            }
        }
    }
    
    function calculate() {
        if (a === '' || b === '' || !selectedOperation) return
        
        const numA = parseFloat(a)
        const numB = parseFloat(b)
        
        switch(selectedOperation) { 
            case 'x':
                expressionResult = numA * numB
                break
            case '+':
                expressionResult = numA + numB
                break
            case '-':
                expressionResult = numA - numB
                break
            case '/':
                if (numB === 0) {
                    expressionResult = 'Ошибка'
                } else {
                    expressionResult = numA / numB
                }
                break
            default:
                return
        }
        
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
        updateDisplay(a)
    }
    
    function toggleSign() {
        if (!selectedOperation && a !== '') {
            let num = parseFloat(a)
            num = -num
            a = num.toString()
            updateDisplay(a)
        } else if (selectedOperation && b !== '') {
            let num = parseFloat(b)
            num = -num
            b = num.toString()
            updateDisplay(b)
        }
    }
    
    function percent() {
        if (!selectedOperation && a !== '') {
            let num = parseFloat(a)
            num = num / 100
            a = num.toString()
            updateDisplay(a)
        } else if (selectedOperation && b !== '') {
            let num = parseFloat(b)
            num = num / 100
            b = num.toString()
            updateDisplay(b)
        }
    }
    

    function backspace() {
        if (!selectedOperation && a !== '') {
            a = a.slice(0, -1)
            updateDisplay(a === '' ? '0' : a)
        } else if (selectedOperation && b !== '') {
            b = b.slice(0, -1)
            updateDisplay(b === '' ? '0' : b)
        }
    }
    
    function changeBackgroundColor() {
        const colors = ['#f5f5f5', '#1a1a2e', '#2d2d3d', '#e8f4f8', '#ffe4e1', '#e0ffe0']
        let nextColor = colors[Math.floor(Math.random() * colors.length)]
        document.body.style.backgroundColor = nextColor
    }
    
    function squareRoot() {
        if (!selectedOperation && a !== '') {
            let num = parseFloat(a)
            if (num < 0) {
                a = 'Ошибка'
            } else {
                a = Math.sqrt(num).toString()
            }
            updateDisplay(a)
        } else if (selectedOperation && b !== '') {
            let num = parseFloat(b)
            if (num < 0) {
                b = 'Ошибка'
            } else {
                b = Math.sqrt(num).toString()
            }
            updateDisplay(b)
        }
    }
    
    function square() {
        if (!selectedOperation && a !== '') {
            let num = parseFloat(a)
            a = (num * num).toString()
            updateDisplay(a)
        } else if (selectedOperation && b !== '') {
            let num = parseFloat(b)
            b = (num * num).toString()
            updateDisplay(b)
        }
    }
    
    function factorial() {
        let num
        if (!selectedOperation && a !== '') {
            num = parseInt(a)
            if (num < 0 || isNaN(num)) {
                a = 'Ошибка'
            } else {
                let result = 1
                for (let i = 2; i <= num; i++) {
                    result *= i
                }
                a = result.toString()
            }
            updateDisplay(a)
        } else if (selectedOperation && b !== '') {
            num = parseInt(b)
            if (num < 0 || isNaN(num)) {
                b = 'Ошибка'
            } else {
                let result = 1
                for (let i = 2; i <= num; i++) {
                    result *= i
                }
                b = result.toString()
            }
            updateDisplay(b)
        }
    }
    
    function tripleZero() {
        if (!selectedOperation) {
            a += '000'
            updateDisplay(a)
        } else {
            b += '000'
            updateDisplay(b)
        }
    }
    
    function memoryAdd() {
        let currentValue = parseFloat(outputElement.innerHTML)
        if (!isNaN(currentValue)) {
            memory += currentValue
        }
    }
    
    function memorySubtract() {
        let currentValue = parseFloat(outputElement.innerHTML)
        if (!isNaN(currentValue)) {
            memory -= currentValue
        }
    }
    
    function memoryRecall() {
        if (!selectedOperation) {
            a = memory.toString()
            updateDisplay(a)
        } else {
            b = memory.toString()
            updateDisplay(b)
        }
    }
    
    function reciprocal() {
        if (!selectedOperation && a !== '') {
            let num = parseFloat(a)
            if (num === 0) {
                a = 'Ошибка'
            } else {
                a = (1 / num).toString()
            }
            updateDisplay(a)
        } else if (selectedOperation && b !== '') {
            let num = parseFloat(b)
            if (num === 0) {
                b = 'Ошибка'
            } else {
                b = (1 / num).toString()
            }
            updateDisplay(b)
        }
    }
    
    function changeDisplayColor() {
        const colors = ['#1e2a3a', '#2d2d2d', '#3d2a1e', '#1a3a2e', '#3a1a2e', '#2a1a3a']
        let newColor = colors[Math.floor(Math.random() * colors.length)]
        if (outputElement) {
            outputElement.style.backgroundColor = newColor
        }
    }
    
    function clearAll() {
        a = ''
        b = ''
        selectedOperation = null
        expressionResult = ''
        updateDisplay('0')
    }
    
    
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    })
    
    const btnMult = document.getElementById("btn_op_mult")
    const btnPlus = document.getElementById("btn_op_plus")
    const btnMinus = document.getElementById("btn_op_minus")
    const btnDiv = document.getElementById("btn_op_div")
    
    if (btnMult) btnMult.onclick = function() { if (a !== '') selectedOperation = 'x' }
    if (btnPlus) btnPlus.onclick = function() { if (a !== '') selectedOperation = '+' }
    if (btnMinus) btnMinus.onclick = function() { if (a !== '') selectedOperation = '-' }
    if (btnDiv) btnDiv.onclick = function() { if (a !== '') selectedOperation = '/' }

    const btnEqual = document.getElementById("btn_op_equal")
    if (btnEqual) btnEqual.onclick = calculate

    const btnClear = document.getElementById("btn_op_clear")
    if (btnClear) btnClear.onclick = clearAll

    const btnSign = document.getElementById("btn_op_sign")
    if (btnSign) btnSign.onclick = toggleSign
    
    const btnPercent = document.getElementById("btn_op_percent")
    if (btnPercent) btnPercent.onclick = percent
    
    const btnBackspace = document.getElementById("btn_op_backspace")
    if (btnBackspace) btnBackspace.onclick = backspace
    
    const btnBgColor = document.getElementById("btn_op_bgcolor")
    if (btnBgColor) btnBgColor.onclick = changeBackgroundColor
    
    const btnSqrt = document.getElementById("btn_op_sqrt")
    if (btnSqrt) btnSqrt.onclick = squareRoot
    
    const btnSquare = document.getElementById("btn_op_square")
    if (btnSquare) btnSquare.onclick = square
    
    const btnFactorial = document.getElementById("btn_op_factorial")
    if (btnFactorial) btnFactorial.onclick = factorial
    
    const btnTripleZero = document.getElementById("btn_op_000")
    if (btnTripleZero) btnTripleZero.onclick = tripleZero
    
    const btnMAdd = document.getElementById("btn_op_madd")
    if (btnMAdd) btnMAdd.onclick = memoryAdd
    
    const btnMSub = document.getElementById("btn_op_msub")
    if (btnMSub) btnMSub.onclick = memorySubtract
    
    const btnMR = document.getElementById("btn_op_mr")
    if (btnMR) btnMR.onclick = memoryRecall
    
    const btnReciprocal = document.getElementById("btn_op_reciprocal")
    if (btnReciprocal) btnReciprocal.onclick = reciprocal
    
    const btnDisplayColor = document.getElementById("btn_op_dispcolor")
    if (btnDisplayColor) btnDisplayColor.onclick = changeDisplayColor
    
    console.log('Калькулятор инициализирован')
    updateDisplay('0')
})();