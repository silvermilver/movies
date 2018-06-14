import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map, startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-movies-header',
  templateUrl: './movies-header.component.html',
  styleUrls: ['./movies-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MoviesHeaderComponent implements OnInit {
  private _titleList: Array<String> = [];
  private _genreList: Array<String> = [];

  @Output() searchCriteria = new EventEmitter<Object>();

  @Input()
  set titleList(titleList: Array<String>) {
    this._titleList = titleList;
  }
  get titleList(): Array<String> { return this._titleList; }

  @Input()
  set genreList(genreList: Array<String>) {
    this._genreList = genreList;
  }
  get genreList(): Array<String> { return this._genreList; }

  public frmControl: FormControl = new FormControl();
  public filteredData: Observable<String[]>;
  public searchPlaceholder: String = 'Title';
  public searchableText: String = '';

  private isSearchByTitle: Boolean = true;

  constructor() { }

  ngOnInit() {
    this.searchableText = '';
    this.handlerForValueChange();
  }

  handlerForValueChange() {
    this.filteredData = this.frmControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        startWith(''),
        map(val => this.filter(val))
      );
  }

  filter(val: String): String[] {
    if (this.searchPlaceholder === 'Title') {
      return this.titleList.filter(option =>
        option.toLowerCase().includes(val.toLowerCase()));
    } else {
      return this.genreList.filter(option =>
        option.toLowerCase().includes(val.toLowerCase()));
    }
  }

  onSearchCriteriaChange() {
    this.isSearchByTitle = !this.isSearchByTitle;
    this.searchPlaceholder = (this.isSearchByTitle) ? 'Title' : 'Genre';
    this.handlerForValueChange();
  }

  onSearchMovie() {
    const key = this.searchPlaceholder.toLowerCase();
    const sObj = {};
    sObj['' + key] = this.searchableText;
    this.searchCriteria.emit(sObj);
  }

}
