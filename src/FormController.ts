export class Form {
  name: string;
  date: string;

  constructor(name:string, date: string){
    this.name = name;
    this.date = date;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log("previniu...")
  }
}
