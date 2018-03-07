import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = ['a'];
  
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}