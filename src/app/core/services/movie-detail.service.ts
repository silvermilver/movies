import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConstant } from '../../app.constant';

@Injectable()

export class MovieDetailService {
    constructor(private http: HttpClient) { }

    public getMovieDetail(id: Number) {
        return this.http
            .get(AppConstant.url + 'movies/' + id)
            .map((response: Response) => response);
    }
}
