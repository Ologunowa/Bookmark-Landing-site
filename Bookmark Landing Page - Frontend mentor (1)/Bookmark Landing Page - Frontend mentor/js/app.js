const faqs = document.querySelectorAll(".faq");
const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".contain-content")

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {


        // to remove active class from previous tabs
        tabs.forEach((tab) => tab.classList.remove("active"))

        tab.classList.add("active");

        // to show element accordingly 
        contents.forEach(c => c.classList.remove("active"));
        contents[index].classList.add("active");

    })
})