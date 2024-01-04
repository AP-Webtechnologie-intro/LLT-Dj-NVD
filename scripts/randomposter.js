// Plaats deze code in jouwscript.js

document.addEventListener('DOMContentLoaded', function() {
    const apiEndpoint = 'https://api.movieposterdb.com/v1/random/movies';
    const apiKey = '141|DNVz38PQFyd0lePp4vytFqr4tqv1AmoqBYNNnRpi';

    fetch(apiEndpoint, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
        },
    })
    .then(response => response.json())
    .then(data => {
        // Verwerk de ontvangen data hier
        const movieData = data && data.data && data.data[0];

        if (movieData) {
            // Haal relevante informatie op
            const title = movieData.original_title;
            const year = movieData.year;
            const genre = movieData.genre;
            const summary = movieData.summary;
            const posterUrl = movieData.poster && movieData.poster.file_location;

            // Voeg de filmposter en andere informatie toe aan de HTML
            const posterContainer = document.getElementById('PosterContainer');
            const movieInfoContainer = document.getElementById('MovieInfoContainer');

            if (posterUrl) {
                posterContainer.innerHTML = `<img class="img-fluid" src="${posterUrl}" alt="${title} Poster">`;
            }

            if (title && year && genre && summary) {
                movieInfoContainer.innerHTML = `
                    <h3>${title} (${year})</h3>
                    <p><strong>Genre:</strong> ${genre}</p>
                    <p><strong>Samenvatting:</strong> ${summary}</p>
                `;
            }
        }
    })
    .catch(error => console.error('Fout bij het ophalen van gegevens:', error));
});
