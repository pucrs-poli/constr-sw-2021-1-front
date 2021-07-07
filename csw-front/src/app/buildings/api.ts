import { HttpClient } from "@angular/common/http";
import { building } from "./types";

export class api{
 static apiURL = 'http://ec2-3-141-6-156.us-east-2.compute.amazonaws.com/api/';
 static getAllBuilding(http:HttpClient): Promise<building[]> {

    http.get(`${api.apiURL}buildings/all`).subscribe((result: any) => {
      console.log(result);
      return result[0]
    });
    return null
  }

 static save(http:HttpClient, building:{}) {
    http.post(`${ api.apiURL }/buildings`, building)
      .subscribe((result: any) => {
           location.reload();
      });

  }
  static delete(http:HttpClient,id:string){
    http.delete(`${ api.apiURL }/buildings/${id}`)
    .subscribe((result: any) => {
      location.reload();
 });

  }
  static update(http:HttpClient,id:string, building:{}){
    http.put(`${ api.apiURL }/buildings/${id}`,building)
    .subscribe((result: any) => {
      location.reload();
 });
  }

}
