window.onload = () => {
    let crds = [card1, card2, card3, card4, card5];
    for (let i = 0; i < crds.length; i++) {
        crds[i].onmouseover = () => {
            crds[i].style.boxShadow = '20px 20px 20px -20px rgba(255,0,0, 0.9)';
            crds[i].style.cursor = 'pointer';
            crds[i].style.height = '300px';
        };
        crds[i].onmouseout = () => {
            crds[i].style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
            crds[i].style.height = '200px';
        }
    }

}