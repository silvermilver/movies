import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProgressBarService } from '../../core/services/progress-bar.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnDestroy {

  public isShown: Boolean = false;
  private progressRequest: Subscription;
  /**
   * Creates an instance of ProgressBarComponent.
   * @param {ProgressBarService} progressService
   *
   * @memberOf ProgressBarComponent
   */
  constructor(private progressService: ProgressBarService) { }

  ngOnInit() {
    this.progressRequest = this.progressService.progressAnnounces$.subscribe(
      message => {
        this.isShown = message;
      }
    );
  }

  ngOnDestroy(): void {
    this.progressRequest.unsubscribe();
  }

}
