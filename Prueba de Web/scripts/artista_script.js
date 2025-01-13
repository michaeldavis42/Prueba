const artists = [
    {
        id: 1,
        name: "María González",
        artType: "Pintura",
        imageUrl: "../imagen/artistas/Maria.jpg",
        description: "Especializada en pinturas al óleo con temática naturalista"
    },
    {
        id: 2,
        name: "Carlos Ruiz",
        artType: "Escultura",
        imageUrl: "../imagen/artistas/Carlos.jpg",
        description: "Creador de esculturas contemporáneas en metal y piedra"
    }, 
    {
        id: 3,
        name: "Ana Silva",
        artType: "Orfebrería",
        imageUrl: "../imagen/artistas/Ana.jpg",
        description: "Diseñadora de joyas artesanales en plata y oro"
    },
    {
        id: 4,
        name: "Roberto Pérez",
        artType: "Tejido",
        imageUrl: "../imagen/artistas/Roberto.jpg",
        description: "Especialista en tejidos tradicionales y contemporáneos"
    }
];

function createArtistCard(artist) {
    return `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 shadow">
                <img src="${artist.imageUrl}" width="550" height="300" class="card-img-top artist-image" alt="Obra de ${artist.name}">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary me-2">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                        </svg>
                        <h5 class="card-title mb-0">${artist.name}</h5>
                    </div>
                    <h6 class="text-primary">${artist.artType}</h6>
                    <p class="card-text">${artist.description}</p>
                    <button class="btn btn-primary">Ver obras</button>
                </div>
            </div>
        </div>
    `;
}

function renderArtists(artistsToRender) {
    const grid = document.getElementById('artistsGrid');
    grid.innerHTML = artistsToRender.map(artist => createArtistCard(artist)).join('');
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredArtists = artists.filter(artist => 
        artist.name.toLowerCase().includes(searchTerm) ||
        artist.artType.toLowerCase().includes(searchTerm)
    );
    renderArtists(filteredArtists);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderArtists(artists);
    document.getElementById('searchInput').addEventListener('input', handleSearch);
});