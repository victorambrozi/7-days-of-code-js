export default class Form {

  constructor() {

  }

  onSubmit(event: any): void {
    const name = document.getElementById("name") as HTMLInputElement;
    const date = document.getElementById("birth-date") as HTMLInputElement;
    event.preventDefault();

    console.log(name.value, date.value)
    
  }
}
