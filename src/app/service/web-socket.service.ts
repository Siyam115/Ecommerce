import { Injectable, OnDestroy } from '@angular/core';
import { Tasks } from './model/task';
import { CompatClient, Stomp, StompSubscription } from '@stomp/stompjs';
export type ListenerCallBack = (tasks: Tasks[]) => void;
@Injectable({
  providedIn: 'root'
})
export class WebSocketService implements OnDestroy {

  private connection: CompatClient | undefined = undefined;
  private subscription: StompSubscription | undefined;


  constructor() {
    this.connection = Stomp.client('ws://localhost:8080/websocket');
    this.connection.connect({}, () => { });
  }

  public send(task: Tasks): void {
    if (this.connection && this.connection.connected) {
      this.connection.send('/dashboard/add_new_task', {}, JSON.stringify(task));
    }
  }

  public listen(fun: ListenerCallBack): void {
    if (this.connection) {
      this.connection.connect({}, () => {
        this.subscription = this.connection!.subscribe('/tasks/added_task', message => {
          const tasks: Tasks[] = JSON.parse(message.body); // Parsing the response as an array of tasks
          fun(tasks); // Passing the task list to the callback
        });
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
