import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  public getInspections(){
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoie1wiVXNlcklEXCI6MSxcIkNvbXBhbnlJRFwiOjEsXCJFbWFpbFwiOlwibXJhdmljaGFuZHJhbkByaWVrZXJpbmMuY29tXCIsXCJOYW1lXCI6XCJNYW5vaiBSLlwiLFwiUm9sZUlkXCI6NSxcIlJvbGVcIjpcIkpvYlN1cGVydmlzb3JcIn0iLCJleHAiOjE3MTUzNTc5MjUsImlzcyI6IkFkYW1BUEkiLCJhdWQiOiJodHRwOi8vYWRhbS1kZXYucmlla2Vyc29sdXRpb25zLmNvbSJ9.1EXdbk-cRWbid6N43vZh6r8wgsYI21JF4hWLbTmPXnw";
    const apiUrl = "http://adam-dev-service.riekersolutions.com/api/Inspection/35/GetAllJobInspections/";
    const headers= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token
    });
    return this.http.get<any>(apiUrl, {headers: headers});
  }
}
