import {AppError} from "./app-error";

export class NotFoundError extends AppError {
  constructor(public originalError?: Response) {
    super(originalError);
  }
}
