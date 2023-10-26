import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService:AuthService,private router:Router){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
        return this.authService.isAuthenicate()
        .then(
            (authenicate:boolean)=>{
                if(authenicate){
                    return true;
                }
                else{
                    this.router.navigate(['/']);
                    return false;
                }
            }
        );
    }

}