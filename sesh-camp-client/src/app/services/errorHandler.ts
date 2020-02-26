import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ErrorHandler {
  errorCodeList = {
    UNAUTHORIZED: 401
  };

  handleError(err: HttpErrorResponse) {
    if (err.status == this.errorCodeList.UNAUTHORIZED) {
        console.error(err.statusText, err.status);
    }
  }
}
