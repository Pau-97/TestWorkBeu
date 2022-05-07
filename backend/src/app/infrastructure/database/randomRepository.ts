import { IRandomRepository } from "../../application/contracts/IRandomRepository";
import { RandomResponse } from "../../domain/responses/random.response";

class RandomRepository implements IRandomRepository {
    constructor(){}
    async getRandom(): Promise<RandomResponse> {
        let randoms = [
            {
                phase: '“El hardware es lo que hace a una máquina rápida; el software es lo que hace que una máquina rápida se vuelva lenta” ',
                author: 'Craig Bruce'
            },
            {
                phase: '“Ley de Alzheimer de la programación: si lees un código que escribiste hace más de dos semanas es como si lo vieras por primera vez”',
                author: 'Dan Hurvitz'
            },
            {
                phase: '“Si el código y los comentarios no coinciden, posiblemente ambos sean erróneos”',
                author: 'Norm Schryer'
            },
            {
                phase: '“La tecnología por sí sola no basta. También tenemos que poner el corazón”',
                author: 'Jane Goodall'
            },
            {
                phase: '“Sabes cuál es el problema? Imaginarte el algoritmo y no programarlo”',
                author: 'Paul Huanca'
            },
            {
                phase: '“Está bien investigar y resolver misteriosos asesinatos, pero no deberías necesitar hacerlo con el código. Simplemente deberías poder leerlo”',
                author: 'Steve McConnell'
            },
            {
                phase: '“Los Servicios Web son como el sexo entre los adolescentes. Todos hablan de hacerlo, pero aquellos que realmente lo hacen, lo hacen muy mal”',
                author: 'Michelle Bustamante'
            },
            {
                phase: '“Un mal PROGRAMADOR puede crear fácilmente dos nuevos empleos al año”',
                author: 'David Parnas'
            },
            {
                phase: '“El software es un gas: se expande hasta llenar su contenedor”',
                author: 'Nathan Myhrvold'
            },
            {
                phase: '“Si piensas que los usuarios de tus programas son idiotas, sólo los idiotas usarán tus programas”',
                author: 'Linus Torvalds'
            },
            {
                phase: '“Si queremos contar líneas de código, no deberíamos referirnos a ellas como líneas producidas, sino como líneas consumidas”',
                author: 'Edsger Dijkstra'
            },
            {
                phase: '“La tecnología es sólo una herramienta. En términos de motivar a los niños y lograr que trabajen juntos, el profesor es el recurso más importante”',
                author: 'Bill Gates'
            },
            {
                phase: '“Si piensas que la tecnología puede solucionar tus problemas de seguridad, está claro que ni entiendes los problemas ni entiendes la tecnología”',
                author: 'Bruce Schneier'
            }
        ]
        return {
            status: true,
            phase: randoms[Math.floor(Math.random() * randoms.length)].phase,
            author: randoms[Math.floor(Math.random() * randoms.length)].author,
        }
    }
}

export const randomRepository = new RandomRepository();