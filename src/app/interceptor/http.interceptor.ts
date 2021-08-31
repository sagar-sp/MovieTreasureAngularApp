import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";

export class HttpUrl implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler){
        // debugger
        if(req.url.includes("localhost")){
            const Reqclone = req.clone({
                url : req.url
            })
            return next.handle(Reqclone);
        }
        else{
            const cloneReq = req.clone({
                url : `${environment.BASE_URL}${req.url}`,
                setParams : {
                    api_key: `${environment.API_KEY}`
                } 
            })
            return next.handle(cloneReq);
        }
    }
}