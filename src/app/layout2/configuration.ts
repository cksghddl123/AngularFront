import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public ApiIP: string = "http://13.125.42.112";
    public ApiPort: string = "3000";
    public Server: string = this.ApiIP+":"+this.ApiPort;
    public ApiUrl: string = "/api/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}