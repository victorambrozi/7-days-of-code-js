import  Form  from "./FormController";

const formElement = document.querySelector(".js-form");

const form = new Form("nome", "data");

formElement?.addEventListener("submit", (event) => form.onSubmit(event))
