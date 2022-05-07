import { RandomResponse } from "../../domain/responses/random.response";
export interface IRandomRepository {
    getRandom(): Promise<RandomResponse>
}