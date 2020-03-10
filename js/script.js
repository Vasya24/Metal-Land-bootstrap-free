window.onload = function() {
    let card = document.getElementById('card1');
    card.onmouseover = (event) => {
        card.style.boxShadow = '0 15px 15px -10px rgba(255,0,0, 0.5)';
        card.style.cursor = 'pointer';
        card.style.width = '300px';
        card.style.height = '200px';
        document.getElementById('pic-1').style.marginLeft = '0';
        document.getElementById('pic-1').style.marginRight = '0';
    }
}