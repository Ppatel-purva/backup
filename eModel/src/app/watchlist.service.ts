import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WatchlistService

{
  constructor(private ht: HttpClient) { }

  get() { return this.ht.get("http://localhost:3000/container"); }


   
  }