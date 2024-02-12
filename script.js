// Récupérer l'élément span
var span = document.getElementById('animation1');

// Fonction pour faire apparaître/disparaître le texte
function toggleText() {
    // Si le texte est visible, le cacher ; sinon, le rendre visible
    if (span.style.visibility === 'visible') {
        span.style.visibility = 'hidden';
    } else {
        span.style.visibility = 'visible';
    }
}
// Appeler la fonction toggleText() toutes les 2 secondes
setInterval(toggleText, 2000);


