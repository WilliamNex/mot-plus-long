"use strict";

document.addEventListener('DOMContentLoaded', function () {
    function afficherMotPlusLong() {
        // Récupérer la citation
        let citationElement = document.getElementById("citation");
        let phrase = citationElement.textContent.trim();

        // Nettoyer la phrase et diviser en mots
        let cleanedPhrase = phrase.replace(/[^a-zA-ZÀ-ÿ\s]/g, " ");
        let words = cleanedPhrase.split(/\s+/);

        // Trouver le mot le plus long
        let motPlusLong = words.reduce((a, b) => (b.length > a.length ? b : a), "");

        // Afficher le résultat
        let resultatElement = document.getElementById("mot-plus-long");
        resultatElement.textContent = `Le mot le plus long du paragraphe est "${motPlusLong}" avec une longueur de "${motPlusLong.length}" lettres`;
    }

    // Rendre la fonction disponible globalement
    window.afficherMotPlusLong = afficherMotPlusLong;
});