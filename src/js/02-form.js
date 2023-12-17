const storageKey = "feedback-form-state";

const form = document.querySelector(".feedback-form");

try {
    const initialValue = JSON.parse(localStorage.getItem(storageKey));

    Array.from(form.elements).forEach(element => {
        const storageValue = initialValue[element.name];
        if (storageValue) {
            element.value = storageValue;
        }
     });

} catch (error){
    console.log("PARSE LOCAL STORAGE ERROR");
}

form.addEventListener("input", () => {
    const formData = new FormData(form);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value.trim();
    });

    localStorage.setItem(storageKey, JSON.stringify(formObject));
});
 
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { email, message } = event.currentTarget.elements;
    email = email.value.trim();
    message = message.value.trim();
    
    if (!email || !message) { return };

    const result = {
        email,
        message
    };

    console.log(result);

    localStorage.removeItem(storageKey);
    form.reset();

});
 