import { Component, OnInit } from "@angular/core";
import { Event } from "../models/event";
import { Assist } from "../models/assist";
import { EventService } from "../services/event.service";
import { AssistService } from "../services/assist.service";
import { resolve } from "url";

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.css"]
})
export class EventsListComponent implements OnInit {
  assist: Assist;
  event: Event;

  eventsArr: Event[] = new Array();
  assistArr: Assist[] = new Array();

  tempAssist: Assist[] = new Array();

  constructor(
    private eventService: EventService,
    private assistService: AssistService
  ) {}

  ngOnInit() {
    this.eventService.getUserEvents().subscribe(events => {
      this.eventsArr = events as Event[];
    });
    this.assistService.getUserAssists().subscribe(assits => {
      this.assistArr = assits as Assist[];
    });
  }

  insertAssist(eventId: number, state: boolean) {
    this.assist = {
      id: 0,
      user: 1,
      event: eventId,
      state: state
    };
    this.assistService
      .addAssist(this.assist)
      .subscribe(assist => this.assistArr.push(assist));
  }

  updateAssist(eventId: number, state: boolean, assistId: number) {
    this.assist = {
      id: assistId,
      user: 1,
      event: eventId,
      state: state
    };
    this.assistService.updateAssist(this.assist).subscribe();
  }

  /*resolveAssistAsync(parsedEvent: Event) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.resolveAssist(parsedEvent));
            }, 1000);
        });
    }

    resolveAssist(parsedEvent: Event): Assist[] {

        this.assistService.getAssist(1, parsedEvent.id).subscribe(assits => {
            this.tempAssist = assits as Assist[];
        });
        return this.tempAssist;
        //this.updateAssist(parsedEvent.id, state, this.tempAssist[0].id);
    }

    async yesAssist(parsedEvent: Event) {
        let result = await this.resolveAssistAsync(parsedEvent);
        this.updateAssist(parsedEvent.id, true, result[0].id);
    }

    async noAssist(parsedEvent: Event) {
        let result = await this.resolveAssistAsync(parsedEvent);
        this.updateAssist(parsedEvent.id, false, result[0].id);
    }*/

  async asyncAssist(parsedEvent: Event, state: boolean) {
    await this.resolveAfter1Second(parsedEvent, state);
  }

  resolveAfter1Second(parsedEvent: Event, state: boolean) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          this.assistService.getAssist(1, parsedEvent.id).subscribe(assits => {
            this.tempAssist = assits as Assist[];
            this.updateAssist(parsedEvent.id, state, this.tempAssist[0].id);
          })
        );
      }, 1000);
    });
  }

  yesAssist(parsedEvent: Event) {
    this.asyncAssist(parsedEvent, true).then(() => {
      console.log("Updated");
    });
  }

  noAssist(parsedEvent: Event) {
    this.asyncAssist(parsedEvent, false).then(() => {
      console.log("Updated");
    });
  }

  checkAssist(parsedEvent: Event): boolean {
    let result: boolean = false;

    this.assistArr.forEach(assist => {
      console.log(assist);
      if (
        assist.event === parsedEvent.id &&
        assist.user === 1 &&
        assist.state
      ) {
        result = true;
        return;
      }
    });

    return result;
  }
}
