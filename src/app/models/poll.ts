export class CustomPoll {

  pollID: number;
  pollQuestion: string;
  pollOption1: string;
  pollOption2: string;
  pollOption3: string;
  pollOption4: string;
  eventID: number;
  entityID: number;

  constructor(question: string, option1: string, option2: string,
               event: number, entity: number, option3?: string, option4?: string){

              this.pollQuestion = question;
              this.pollOption1 = option1;
              this.pollOption2 = option2;
              this.pollOption3 = option3;
              this.pollOption4 = option4;
              this.eventID = event;
              this.entityID = entity;
              }
}
