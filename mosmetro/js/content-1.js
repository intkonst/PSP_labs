(function() {
    console.log('content-1.js загружен, инициализация...');
    
    const themeBtn = document.getElementById('themeSwitcherBtn')
    let isDark = false
    
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            if (isDark) {
                document.body.style.backgroundColor = '#f5f5f5'
                document.body.style.color = '#111'
                isDark = false
            } else {
                document.body.style.backgroundColor = '#1a1a2e'
                document.body.style.color = '#eee'
                isDark = true
            }
        })
        console.log('Кнопка смены темы настроена')
    } else {
        console.warn('Кнопка #themeSwitcherBtn не найдена')
    }
    
    const selectEl = document.getElementById('topicSelect')
    if (selectEl) {
        selectEl.addEventListener('change', (e) => {
            console.log(`Выбран раздел: ${e.target.options[e.target.selectedIndex].text}`)
        })
        console.log('Выпадающий список настроен')
    } else {
        console.warn('Элемент #topicSelect не найден')
    }
    

    const tabs = document.querySelectorAll('.tab')
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                tabs.forEach(t => t.classList.remove('active'))
                this.classList.add('active')
            })
        })
        console.log(`Настроено ${tabs.length} вкладок`)
    }
    
    const details = document.querySelectorAll('.collapsible')
    if (details.length > 0) {
        details.forEach(detail => {
            detail.addEventListener('toggle', function() {
                if (this.open) {
                    this.style.transition = 'all 0.2s ease'
                }
            })
        })
        console.log(`Настроено ${details.length} сворачивающихся блоков`)
    }

    const calcBgBtn = document.getElementById('calcBgBtn')
    if (calcBgBtn) {
        calcBgBtn.addEventListener('click', () => {
            const calculator = document.querySelector('calculator')
            if (calculator) {
                const colors = ['#fff', '#f0f0f0', '#e0e0e0', '#d4d4d4']
                let newColor = colors[Math.floor(Math.random() * colors.length)]
                calculator.style.backgroundColor = newColor
            }
        })
        console.log('Кнопка смены фона калькулятора настроена')
    }
    
    console.log('Content-1 полностью инициализирован!')
})();