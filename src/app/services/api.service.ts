import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions: any = {
    headers: {
      'Accept': 'application/json',
    }
  };

  constructor(
    private httpNative: HTTP,
    private httpClient: HttpClient,
    private platform: Platform
  ) { }

  async get(url: string, params = {}, headers = {}) {
    this.httpOptions.headers = { ...this.httpOptions.headers, ...headers };

    if (this.platform.is('capacitor')) {
      await this.platform.ready();

      this.httpNative.setServerTrustMode('nocheck');
      this.httpNative.setDataSerializer('json');

      const request = await this.httpNative.get(url, params, this.httpOptions.headers);

      return JSON.parse(request.data || '{}');
    }

    this.httpOptions.params = params;
    return this.httpClient.get(url, this.httpOptions).toPromise();
  }

  async post(url: string, params = {}, headers = {}) {
    this.httpOptions.headers = { ...this.httpOptions.headers, ...headers };

    if (this.platform.is('capacitor')) {
      await this.platform.ready();

      this.httpNative.setServerTrustMode('nocheck');
      this.httpNative.setDataSerializer('json');

      const request = await this.httpNative.post(url, params, this.httpOptions.headers);

      return JSON.parse(request.data);
    }

    return this.httpClient.post(url, params, this.httpOptions).toPromise();
  }

  async put(url: string, params = {}, headers = {}) {
    this.httpOptions.headers = { ...this.httpOptions.headers, ...headers };

    if (this.platform.is('capacitor')) {
      await this.platform.ready();

      this.httpNative.setServerTrustMode('nocheck');
      this.httpNative.setDataSerializer('json');

      const request = await this.httpNative.put(url, params, this.httpOptions.headers);

      return JSON.parse(request.data);
    }

    return this.httpClient.put(url, params, this.httpOptions).toPromise();
  }

  async delete(url: string, params = {}, headers = {}) {
    this.httpOptions.headers = { ...this.httpOptions.headers, ...headers };

    if (this.platform.is('capacitor')) {
      await this.platform.ready();

      this.httpNative.setServerTrustMode('nocheck');
      this.httpNative.setDataSerializer('json');

      const request = await this.httpNative.delete(url, params, this.httpOptions.headers);

      return JSON.parse(request.data);
    }

    this.httpOptions.params = params;
    return this.httpClient.delete(url, this.httpOptions).toPromise();
  }

}
