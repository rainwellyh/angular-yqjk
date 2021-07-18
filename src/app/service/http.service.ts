import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  get(apiUrl: string) {
    return new Promise((resolve, reject) => {
      axios.get(apiUrl)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    })

  }
  post(apiUrl: string, params: any) {
    return new Promise((resolve, reject) => {
      axios.post(apiUrl, params)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    })
  }
}
