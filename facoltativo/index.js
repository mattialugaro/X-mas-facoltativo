const input = document.getElementById("input")
const value = input.value

console.log(value)
const query = 'Nature';
const query2 = 'Animal';
const query3 = value

const fetchPhotos = async (query, query2, query3) => {
    const url = `https://api.pexels.com/v1/search?query=${query}` || `https://api.pexels.com/v1/search?query=${query2}` || `https://api.pexels.com/v1/search?query=${query3}`
    const response = await fetch(url, {
        headers: {
            'Authorization': `CVFlbVIvF968EnplTKyBtNrQJv3UG9c01oh9oSIa9IEsNKO8nEHyk765`,
        },
    });
    
    if (response.ok) {
        const photosData = await response.json();
        const photos = photosData.photos;

        const row = document.getElementById('row');

        photos.forEach((photo) => {
            console.log(photo);
            const col = document.createElement('div');
            col.classList.add('col-md-4');
            col.id = "col"

            const list = document.createElement('div');
            list.classList.add('card', 'mb-4', 'shadow-sm');

            const img = document.createElement('img');
            img.style = "width:100% ; height:225px ; object-fit:cover";
            img.classList.add('bd-placeholder-img', 'card-img-top');
            img.src = photo.src.original;
            img.alt = photo.alt;

            const body = document.createElement('div');
            body.classList.add('card-body');

            const h5 = document.createElement('h5');
            h5.classList.add('card-title');
            h5.innerText = photo.photographer;

            const a = document.createElement('a');
            a.classList.add('card-text', 'text-decoration-none', 'text-success');
            a.href = photo.photographer_url
            a.innerText = 'Pagina artista';

            const flex = document.createElement('div');
            flex.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'mt-3');

            const btn = document.createElement('div');
            btn.classList.add('btn-group');

            const id = document.createElement('a');
            id.classList.add('text-muted');
            id.innerText = photo.id;
            id.href = photo.url;

            const button1 = document.createElement('button');
            button1.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
            button1.type = 'button';
            button1.innerText = 'View';

            const button2 = document.createElement('button');
            button2.classList.add('btn', 'btn-sm', 'btn-outline-warning');
            button2.type = 'button';
            button2.innerText = 'Hide';
            button2.addEventListener('click', () => {
                // Aggiungi la classe d-none alla col
                const col = button2.closest('#col');
                col.classList.add('d-none');
            });


            list.appendChild(img);
            list.appendChild(body);
            body.appendChild(h5);
            body.appendChild(a);
            flex.appendChild(btn);
            flex.appendChild(id);
            btn.appendChild(button1);
            btn.appendChild(button2);
            body.appendChild(flex);
            col.appendChild(list);
            row.appendChild(col);
        });
        
    } else {
        console.error('Error fetching photos:', response.statusText);
    };
};