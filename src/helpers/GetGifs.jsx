/**
 * Esté helpe rnos permite realizar peticiones de imagenes, solamente hace
 * la petición y la información nos la retorna para poderla usar.
 * ESTÉ ES UN HELPER, lo que hace es siempre retonarnos lo que haga de manera
 * sencilla.
 */

export const GetGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=KoFHZh6MH418tlWrWB55Gv0nalFLePlV`;
    const resp = await fetch( url )
    const { data } = await resp.json()

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}

/**
 *    const getGifs = async() => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=KoFHZh6MH418tlWrWB55Gv0nalFLePlV`;
        const resp = await fetch( url )
        const { data } = await resp.json()

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log( gifs )
        setImages( gifs )
    }

 */
