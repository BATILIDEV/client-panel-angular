import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private tokenService:TokenService) {}
//interceptor est un mecanisme qui permet de changer le header de n'importe quelle requete d'angular.
//dans notre cas le backend a besoin de retourner le backend vers lui pour avoir l'autorisation de faire le get
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request=request.clone({
      setHeaders:{
        Authorization: `Bearer ${this.tokenService.getToken()}`
      }

    })
    return next.handle(request);
  }
}
