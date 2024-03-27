// const musica = document.querySelector("#musica")
// const pelicula = document.querySelector("#peliculas")
// const serie = document.querySelector("#series")

const iffeDOM = (() => {
    function funcionPrivada(url, id) {
        document.querySelector(`#${id}`).setAttribute("src", url)
    }
    return {
        funcionPublica(url, id) {
            funcionPrivada(url, id)
        }
    }
})()

// iffeDOM.funcionPublica("https://www.youtube.com/watch?v=T8JdWs3jtcs&list=RDT8JdWs3jtcs&start_radio=1", "musica")
// iffeDOM.funcionPublica("https://www.tokyvideo.com/es/video/trailer-vose-requiem-el-exorcismo-de-micaela", "pelicula")
// iffeDOM.funcionPublica("https://www.youtube.com/watch?v=i1eJMig5Ik4", "serie")


class Multimedia{
    #url;
    constructor(url){
        this.#url = url
    }
    get url(){
        return this.#url
    }
    
    set url(value) {
        this.#url = value
    }
    setInicio(tiempoEnSegundos){
        this.#url += `?&t=${tiempoEnSegundos}?enablejsapi=1`;
        return `Se ha establecido el tiempo de inicio en ${tiempoEnSegundos} segundos.`;
    }
}


class Reproductor extends Multimedia{
    _id;
    constructor(url, id){
        super(url)
        this._id = id
    }
    
    playMultimedia(){
        iffeDOM.funcionPublica(this.url, this._id)
    }
    setInicio(tiempoEnSegundos){
        this.url += `?&t=${tiempoEnSegundos}?enablejsapi=1`;
        return `Se ha establecido el tiempo de inicio en ${tiempoEnSegundos} segundos.`;
    }
}

//instancias

const musica1 = new Reproductor ("https://www.youtube.com/embed/T8JdWs3jtcs?si=L2bbL3vxaKQYqL46", "musica")
const pelicula1 = new Reproductor("https://www.youtube.com/embed/ABSvppyQGdE?si=zCcpZKfUayfqxeTd", "peliculas")
const series1 = new Reproductor("https://www.youtube.com/embed/KMx4iFcozK0?si=1IwwA3fjRT4NN910", "series")


musica1.setInicio(100)
pelicula1.setInicio(50)
series1.setInicio(160)

musica1.playMultimedia()
pelicula1.playMultimedia()
series1.playMultimedia()

