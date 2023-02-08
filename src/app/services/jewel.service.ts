import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Jewel } from '../models/jewel';
import { Page } from '../models/Page';

@Injectable({
  providedIn: 'root'
})
export class JewelService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Page<Jewel>> {
    return this.http.get<Page<Jewel>>(`${API_CONFIG.baseUrl}/jewels`);
  }
}
