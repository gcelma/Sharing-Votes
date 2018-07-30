export class EntityEvent {
      entityID: string;
      eventID: string;
      eventName: string;
      eventTime: string;
      eventDescription: string;

      constructor (EntityID: string, EventID: string, name: string, time: string, description: string){

        this.entityID = EntityID;
        this.eventID = EventID;
        this.eventName = name;
        this.eventTime = time;
        this.eventDescription = description;

      }
}
