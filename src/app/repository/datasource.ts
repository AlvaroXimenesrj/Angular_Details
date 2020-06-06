// angular
import { Observable, throwError } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Product } from '../model/product.model';
// models

@Injectable()

// pag 606

export class SimpleDataSource {
        constructor(private http: HttpClient) { }
        private taskUrl: string = 'http://localhost:5200/product';
        
        getAll(complenentUrl: string): Observable<Object[]> {
                return this.sendTaskRequest<Object[]>("GET", this.taskUrl+complenentUrl);
        }

        get(complenentUrl: string, id: number): Observable<Object> {
                return this.sendTaskRequest<Object>("GET", `${this.taskUrl+complenentUrl}/${id}`);
        }

        getAll2(url: string, params?: any): Observable<Response> {
                let options = { };
                //this.setHeaders(options);
                
                return this.http.get(this.taskUrl+url, options)
                    .pipe(
                        // retry(3), // retry a failed request up to 3 times
                        tap((res: Response) => {
                            return res;
                        }),
                        
                    );
            }

        save(product: Object): Observable<Object>{
                return this.sendTaskRequest<Object>("POST", this.taskUrl, product);
        }

        delete(complenentUrl: string, id: number): Observable<Object>{
                return this.sendTaskRequest<Object>("DELETE", `${this.taskUrl+complenentUrl}/${id}`)
        }
        
        private sendTaskRequest<T>(verb: string, url: string, body?: Product)
                : Observable<T> {

                        let myHeaders = new HttpHeaders();
                        myHeaders = myHeaders.set("Application-Names", ["Prototype", "API"]);
                
                        return this.http.request<T>(verb, url, {
                            body: body,
                            headers: myHeaders
                        });
                        // ).pipe(catchError((error: Response) =>
                        // throwError(`Network Error: ${error.statusText} (${error.status})`)));
        }
}