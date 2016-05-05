
import {Injectable} from 'angular2/core';


@Injectable()
export class Shared {
  name: string;
  constructor() {
    console.log("Shared()");
    this.name = "Shared";    
   
  }
}