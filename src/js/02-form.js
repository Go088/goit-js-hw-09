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
    const { email, message } = event.target.elements;
    
    if (!email.value || !message.value) { return };

    const userData = {
        email: email.value,
        message: message.value
    };
    console.log(userData);
    
    localStorage.removeItem(storageKey);
    form.reset();
});
 