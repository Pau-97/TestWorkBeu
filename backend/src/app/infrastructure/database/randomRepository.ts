import { IRandomRepository } from "../../application/contracts/IRandomRepository";
import { RandomResponse } from "../../domain/responses/random.response";

class RandomRepository implements IRandomRepository {
    constructor(){}
    async getRandom(): Promise<RandomResponse> {
        let randoms = [
            {
                phase: '“Hardware is what makes a machine fast; software is what makes a fast machine slow”',
                author: 'Craig Bruce'
            },
            {
                phase: '“Alzheimer is law of programming: if you read a code you wrote more than two weeks ago, it is like seeing it for the first time”',
                author: 'Dan Hurvitz'
            },
            {
                phase: '“If the code and the comments do not match, they are probably both wrong.”',
                author: 'Norm Schryer'
            },
            {
                phase: '“Technology alone is not enough. We also have to put our hearts”',
                author: 'Jane Goodall'
            },
            {
                phase: '“Do you know what is the problem? Imagine the algorithm and not program it”',
                author: 'Paul Huanca'
            },
            {
                phase: `“It's fine to investigate and solve murder mysteries, but you shouldn't need to do it with code. You should just be able to read it”`,
                author: 'Steve McConnell'
            },
            {
                phase: '“There are only two kinds of programming languages: those that people are always complaining about and those that nobody uses.”',
                author: 'Bjarne Stroustrup'
            },
            {
                phase: '“If the automobile industry had followed the same development as computers, a Rolls-Royce today would cost $100, run a million miles on 3.7 liters, and explode once a year, killing everyone inside at the time.”',
                author: 'Robert X. Cringely'
            },
            {
                phase: '“Wondering when computers will be able to think is like wondering when submarines will be able to swim.”',
                author: 'Edsger W. Dijkstra'
            },
            {
                phase: '“If you think that the users of your programs are idiots, only idiots will use your programs”',
                author: 'Linus Torvalds'
            },
            {
                phase: '“If we want to count lines of code, we should not refer to them as produced lines, but as consumed lines.”',
                author: 'Edsger Dijkstra'
            },
            {
                phase: '“Technology is just a tool. In terms of motivating children and getting them to work together, the teacher is the most important resource”',
                author: 'Bill Gates'
            },
            {
                phase: '“If you think that technology can solve your security problems, it is clear that you neither understand the problems nor understand the technology.”',
                author: 'Bruce Schneier'
            },
            {
                phase: '“Solve the problem first. So write the code”',
                author: 'John Johnson'
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