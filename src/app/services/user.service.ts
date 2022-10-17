import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
saveUrl=environment.baseUrl

url="http://localhost:3000/restaurents"
rooturl="http://localhost:3000"

  constructor( private http:HttpClient) { }
 

  getUser():Observable<any>{
    return this.http.get(`${this.saveUrl}`)
  }
  saveUser(data:any):Observable<any>{
return this.http.post<any>(`${this.saveUrl}`,data)
  }

getList():Observable<any>{
return this.http.get(`${this.url}`)
}
adResto(data:any):Observable<any>{
return this.http.post<any>(`${this.url}`,data)
}
deleteResto(id: any):Observable<any>{
  return this.http.delete<any>(`${this.url}/${id}`)
  }
  getCurrentResto(id:any){
    return this.http.get<any>(`${this.url}/${id}`)
  }
  updateResto(id:any,data:any){
    return this.http.put<any>(`${this.url}/${id}`,data)
  } 
  RegisterUser(data:any){
    return this.http.post<any>(`${this.rooturl}/user`,data)
  }
}
