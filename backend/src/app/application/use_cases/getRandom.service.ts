import { RandomResponse } from "../../domain/responses/random.response";
import { randomRepository } from "../../infrastructure/database/randomRepository";

export class GetRandomService {

    constructor(
        private repository = randomRepository
    ) {
    }
    async getRandom(): Promise<RandomResponse> {
        return await this.repository.getRandom();

    }
}


export const getRandomService = new GetRandomService();