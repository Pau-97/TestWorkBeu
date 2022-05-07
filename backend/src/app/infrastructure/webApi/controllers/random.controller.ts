import { Request, Response } from "express";
import HttpStatusCode from "../../shared/httpStatusCode";
import { getRandomService } from "../../../application/use_cases/getRandom.service";
import { RandomResponse } from "../../../domain/responses/random.response";
import { logCustom } from "../../shared/logCustom";


export class RandomController {

  async getRandom(req: Request, res: Response) {
    try {
      logCustom(req.query);
      let response = await getRandomService.getRandom();
      if (response) {
        return res.status(HttpStatusCode.OK).json({
          status: true,
          author: response.author,
          phase: response.phase,
        } as RandomResponse)
      } else {
        return res.status(HttpStatusCode.BAD_REQUEST).json(
          {
            status: false,
            author: '',
            phase: '',
          } as RandomResponse
        )
      }

    } catch (error) {
      logCustom(error);

      return res.status(error.status || HttpStatusCode.INTERNAL_SERVER_ERROR).send({
        errorCode: error.errorCode || "serviceNotAvailable",
        errorMessage: error.message || "Internal Server Error",
        errors: ""
      });
    }
  }

}

export const randomController = new RandomController();
