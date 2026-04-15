Promise.all([
    fetch('/mosmetro/templates/header.html').then(r => r.text()),
    fetch('/mosmetro/templates/content-1.html').then(r => r.text()),
    fetch('/mosmetro/templates/calculator.html').then(r => r.text()),
    fetch('/mosmetro/templates/footer.html').then(r => r.text())
]).then(([header, content, calculator, footer]) => {
    document.getElementById('header').innerHTML = header;
    document.getElementById('content').innerHTML = content;
    document.getElementById('calculator').innerHTML = calculator;
    document.getElementById('footer').innerHTML = footer;
    
    console.log('HTML вставлен, загружаем JS...');
    
    // Загружаем content-1.js
    const script1 = document.createElement('script');
    script1.src = '/mosmetro/js/content-1.js';
    document.body.appendChild(script1);
    
    // Загружаем calculator.js
    const script2 = document.createElement('script');
    script2.src = '/mosmetro/js/calculator.js';
    document.body.appendChild(script2);
    
    console.log('Скрипты добавлены');
});