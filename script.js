const lifeFragmentsNaruto = document.getElementById('score-naruto').getElementsByTagName('*');
const lifeFragmentsKakashi = document.getElementById('score-kakashi').getElementsByTagName('*');

const imgNaruto = document.getElementById('fighter-naruto');
const imgKakashi = document.getElementById('fighter-kakashi');

const narutoLifePercentage = document.getElementById('naruto-life');
const kakashiLifePercentage = document.getElementById('kakashi-life');

let lifeNaruto = 10;
let lifeKakashi = 10;

const narutoAttack = () => {
    if (lifeKakashi) {
        if (lifeNaruto) {
            lifeKakashi -= 1;
            kakashiLifePercentage.innerHTML = `${lifeKakashi*10}%`;
            lifeFragmentsKakashi[9 - lifeKakashi].style.backgroundColor = 'red';
        }
    } else if (lifeNaruto) {
        imgKakashi.style.opacity = '0';
        const restart = confirm('Kakashi ha muerto, quieres reiniciar la batalla?');

        if (restart) {
            window.location.reload();
        }

    } else {
        alert("He muerto, soy un fracaso :'(");
    }
}

const kakashiAttack = () => {

    if (lifeNaruto && lifeKakashi) {
        lifeNaruto -= 1;
        narutoLifePercentage.innerHTML = `${lifeNaruto*10}%`;
        lifeFragmentsNaruto[lifeNaruto].style.backgroundColor = 'red';
    } else if (lifeKakashi) {
        imgNaruto.style.opacity = '0';
        const restart = confirm('Naruto ha muerto, quieres reiniciar la batalla?');

        if (restart) {
            window.location.reload();
        }

    } else {
        alert("He muerto, soy un fracaso :'(");
    }

}