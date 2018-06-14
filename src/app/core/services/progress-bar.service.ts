import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProgressBarService {
  private progressSubject = new Subject<Boolean>();
  public progressAnnounces$ = this.progressSubject.asObservable();
  /**
   *
   * @param {Boolean} msg
   *
   * @memberOf ProgressBarService
   */
  showProgress(msg: Boolean) {
    this.progressSubject.next(msg);
  }
}
