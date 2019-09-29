// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {environment} from '../environments/environment';
// import {GitUser} from './git-user';
// import {SearchUserComponent} from './search-user/search-user.component';
// import {Observable} from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class MyServiceService {
//   user: GitUser[] = [];
//   _URL = 'https://api.github.com/users/';
//   token = "?access_token=e8d69983bba3ae132ca4cf6f36bba724aefac099";

//   constructor(private http: HttpClient) {
//   }

//   searchMyUser(searchTerm: string) {

//     interface data {
//       login: string;
//       avatar_url: string;
//       following: string;
//       followers: string;
//       public_repos: string;
//       location:string;
//       company:string;
//       bio:string;
     
//     }

//     return new Promise((resolve, reject) => {
//       this.user = [];

//       this.http.get<data>(this._URL + searchTerm + this.token).toPromise().then(
//         (results) => {
          
//           this.user.push(results);
//           resolve();
//         },
//         (error) => {
//           reject();
//         }
//       );
//     });
//   }
// }
