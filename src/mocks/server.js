import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

let handlers = [
    http.get('https://api.chucknorris.io/jokes/random', () => {
        return HttpResponse.json({ value: 'ha ha ha' }, { status: 200 });
    }),
    http.get('http://localhost:3000/heroes', () => {
        return HttpResponse.json(
            [
                { id: 1, name: 'hero 1' },
                { id: 2, name: 'hero 2' },
            ],
            { status: 200 },
        );
    }),
    // http.post("...",()=>)
];

export let server = setupServer(...handlers);
