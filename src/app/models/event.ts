export class EntityEvent {
      eventID: number;
      eventName: string;
      eventTime: string;
      eventDescription: string;

      constructor (id: number, name: string, time: string, description: string){

        this.eventID = id;
        this.eventName = name;
        this.eventTime = time;
        this.eventDescription = description;

      }
}
