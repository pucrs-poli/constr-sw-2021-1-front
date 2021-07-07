import { HttpClient } from '@angular/common/http';
import { building, room } from './types';

export class api {
  static apiURL = 'http://ec2-3-141-6-156.us-east-2.compute.amazonaws.com/api/';

  //BUILDINGS
  static buildings: building[];

  static getAllBuilding(http: HttpClient) {
    http.get(`${api.apiURL}buildings/all`).subscribe((result: any) => {
      //   console.log(result);
      this.buildings = result;
    });
  }

  static saveBuilding(http: HttpClient, building: {}) {
    http.post(`${api.apiURL}/buildings`, building).subscribe((result: any) => {
      location.reload();
    });
  }
  static deleteBuilding(http: HttpClient, id: string) {
    http.delete(`${api.apiURL}/buildings/${id}`).subscribe((result: any) => {
      location.reload();
    });
  }
  static updateBuilding(http: HttpClient, id: string, building: {}) {
    http
      .put(`${api.apiURL}/buildings/${id}`, building)
      .subscribe((result: any) => {
        location.reload();
      });
  }

  //ROOMS
  static rooms: room[];

  static getAllRooms(http: HttpClient) {
    http.get(`${api.apiURL}rooms/all`).subscribe((result: any) => {
      console.log(result);
      this.rooms = result;
    });
  }

  static saveRoom(http: HttpClient, room: {}) {
    http.post(`${api.apiURL}rooms`, room).subscribe((result: any) => {
      location.reload();
    });
  }
  static deleteRoom(http: HttpClient, id: string) {
    http.delete(`${api.apiURL}rooms/${id}`).subscribe((result: any) => {});
  }
  static updateRoom(http: HttpClient, id: string, room: {}) {
    http.put(`${api.apiURL}rooms/${id}`, room).subscribe((result: any) => {
      location.reload();
    });
  }
}
