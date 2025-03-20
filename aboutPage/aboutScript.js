const content = [
    { title: "All About Us For The Repairing Of Your Car", text: "Do not fuse your mind by looking at the service providers separately. We are a one-stop solution for clients and businesses." },
    { title: "Electrical Repair", text: "We handle all kinds of electrical repairs, from faulty wiring to battery issues." },
    { title: "Bodywork and Paint", text: "Our expert technicians restore your car’s appearance with high-quality bodywork and painting services." },
    { title: "Vetted Repairman", text: "Only certified and highly trained repairmen handle your vehicle, ensuring top-tier service." }
];

function changeContent(index) {
    document.getElementById("content-box").innerHTML = `<h2>${content[index].title}</h2><p>${content[index].text}</p>`;
    document.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll("button")[index].classList.add("active");
}