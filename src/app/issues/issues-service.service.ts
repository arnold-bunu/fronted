import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IssuesServiceService {
public issuesdisplay:{_id:string, id:string, province:string, issue:string, priority:string}[] = [];
public updatedissuesdisplay = new Subject<{_id:string, id:string, province:string, issue:string, priority:string}[]>();


  getissues_service() {
   
    this.http.get<{message:string, issues:any}>('https>//localhost:3000/api/issues')
    .subscribe((theissues)=>
    {
      this.issuesdisplay = theissues.issues
      this.updatedissuesdisplay.next([...this.issuesdisplay]);
    })
  }

  constructor(private http: HttpClient) { }

  addIssue_service(pid:string, pprovince:string, pissue:string, ppriority:string )
  {
    this.http.post<{message:String,issues:any}>('https://localhost3000/api/issues', {id:pid, province:pprovince, issue:pissue, priority:ppriority})
    .subscribe((theissues)=>
    {
      this.issuesdisplay.push(theissues.issues);
      this.updatedissuesdisplay.next([...this.issuesdisplay]);
    })
  }

  getUpdateListener() 
  {
    return this.updatedissuesdisplay.asObservable();
  }

  deleteissues_service(issuesid: string) {
    this.http.delete('https://localhost:3000/api/issues/' + issuesid)
    .subscribe(()=>
    {
      const updatedissuesdelted = this.issuesdisplay.filter(issues=>issues._id!==issuesid);
      this.issuesdisplay = updatedissuesdelted;
      this.updatedissuesdisplay.next([...this.issuesdisplay]);
    })
  }
}


