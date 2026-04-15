// Вставляем компоненты в index.html
Promise.all([
    fetch('/mosmetro/templates/header.html').then(r => r.text()),
    fetch('/mosmetro/templates/content-1.html').then(r => r.text()),
    fetch('/mosmetro/templates/calculator.html').then(r => r.text()),
    fetch('/mosmetro/templates/footer.html').then(r => r.text())

]).then(([header, content, calculator, footer]) => {
    document.getElementById('header').innerHTML = header; // допишет header.html в div с id "header"
    document.getElementById('content').innerHTML = content; // допишет content-1.html в div с id "content"
    document.getElementById('calculator').innerHTML = calculator; // допишет calculator.html в div с id "calculator"
    document.getElementById('footer').innerHTML = footer; // допишет footer.html в div с id "footer"
});
