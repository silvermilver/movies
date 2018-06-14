import { Injectable } from '@angular/core';
/**
 *
 * @export
 * @class StorageService
 */
@Injectable()
export class StorageService {
  private storage: any = sessionStorage;

  constructor() { }
  /**
   *
   * @param {String} key
   * @returns {String}
   *
   * @memberOf StorageService
   */
  getItem(key: String): String {
    const item: any = this.storage.getItem(key);
    if (item != null && item !== undefined) {
      return decodeURIComponent(atob(this.storage.getItem(key)));
    } else {
      return 'false';
    }
  }
  /**
 *
 * @param {string} key
 * @memberof StorageService
 */
  removeItem(key: string): void {
    this.storage.removeItem(key);
  }
  /**
   *
   * @memberof StorageService
   */
  clear(): void {
    this.storage.clear();
  }
  /**
   *
   * @param {string} key
   * @param {*} value
   * @memberof StorageService
   */
  setItem(key: string, value: any): void {
    this.storage.setItem(key, btoa(encodeURIComponent(value)));
  }
}
