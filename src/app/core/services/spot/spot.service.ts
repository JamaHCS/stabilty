import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';

const SCRIPT_PATH = 'https://dmxnt20059mx.mx.wal-mart.com:8077/js/SPOT.js';
declare let spotapi: any;
declare let window: any;

export interface IModalSettings {
  url?: string;
  title?: string;
  text?: string;
  type: string;
  height: string;
  width: string;
}

@Injectable({
  providedIn: 'root',
})
export class SpotService {
  scriptLoaded: boolean;
  errorLoad: boolean;
  time: number = 0;
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.scriptLoaded = false;
    this.errorLoad = false;
  }

  public init(renderer: Renderer2) {
    if (!this.scriptLoaded) {
      const script = renderer.createElement('script');
      script.type = 'text/javascript';
      script.src = SCRIPT_PATH;
      renderer.appendChild(this.document.body, script);

      script.onload = () => {
        console.log('------------SPOT.js loaded---------');
        this.scriptLoaded = true;
        spotapi.modalResult = function (value: any) {
          alert('Msg recibido: ' + JSON.stringify(value));
        };
      };

      script.onerror = () => {
        console.log('Load SPOT.js failed');
        this.errorLoad = true;
      };
    }
  }

  public openModal = (height: string, width: string, url: string) =>
    spotapi.openModal({
      url: url,
      height: height,
      width: width,
      type: 'modal',
    });

  public showConfirm = (height: string, width: string, text: string) => {
    this.execFunction(() => {
      spotapi.openModal({
        text: text,
        height: height,
        width: width,
        type: 'confirm',
      });
    }, 'showConfirm');
  };

  public startLoading = (msg: string) => {
    this.execFunction(() => {
      spotapi.startLoading(msg);
    }, 'startLoading');
  };

  public stopLoading = () => {
    this.execFunction(() => {
      spotapi.stopLoading();
    }, 'stopLoading');
  };

  public openSnackbar = (type: string, msg: string) => {
    this.execFunction(() => {
      spotapi.openSnackbar(type, msg);
    }, 'openSnackbar');
  };

  public getHostInfo = () => {
    var result = this.execFunction(() => {
      return spotapi.getUserInfo();
    }, 'getHostInfo');

    return result;
  };

  public pushNotification = (id: string, callBack: any) => {
    this.execFunction(() => {
      spotapi.addCallBack(id, callBack);
    }, 'addCallBack');
  };

  private execFunction = (callback: any, name: string) => {
    let result: any;
    if (this.scriptLoaded) {
      result = callback();
      return result;
    } else {
      var interval = setInterval(() => {
        console.log(`Interval number ${interval} - name[${name}]`);
        if (this.scriptLoaded) {
          result = callback();
          clearInterval(interval);
          return result;
        }

        if (this.errorLoad) {
          clearInterval(interval);
        }
      }, 1000);
    }
  };
}
