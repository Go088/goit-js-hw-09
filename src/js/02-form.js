const storageData = "feedback-form-state";

const form = document.querySelector(".feedback-form");

try {
    const initialValue = JSON.parse(localStorage.getItem(storageData));

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

    localStorage.setItem(storageData, JSON.stringify(formObject));
});
 
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { email, message } = event.target.elements;
    
    if (!email.value || !message.value) { return };

    const userData = {
        email: email.value.trim(),
        message: message.value.trim()
    };
    console.log(userData);

    localStorage.removeItem(storageData);
    form.reset();
});
 