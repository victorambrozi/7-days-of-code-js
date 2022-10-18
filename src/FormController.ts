export default class Form {
  name: string;
  date: string;

  constructor(name:string, date: string){
    this.name = name;
    this.date = date;
  }

  onSubmit(event: any): void {
    event.preventDefault();
    
    
    
  }
}
