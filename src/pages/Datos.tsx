export const getPersonaje = async () => {
    
    let response = await fetch('https://swapi.dev/api/people/');
    
    return response.json();

}

export const getPlaneta = async () => {
    
    let response = await fetch('https://swapi.dev/api/planets/');
    
    return response.json();

}

export const getEspecie = async () => {
    
    let response = await fetch('https://swapi.dev/api/species/');
    
    return response.json();

}

export const getPelicula = async () => {
    
    let response = await fetch('https://swapi.dev/api/films');
    
    return response.json();

}