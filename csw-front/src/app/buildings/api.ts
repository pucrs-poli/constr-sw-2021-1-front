export default class api{
  static apiURL = 'http://ec2-3-141-6-156.us-east-2.compute.amazonaws.com/api/';

  static getAllBuilding(){
    this.http.get(`${ this.apiURL }buildings/all`)
       .subscribe((result: any) => {
         console.log(result)
       });
  }
}




