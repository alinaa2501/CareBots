
document.querySelector('#neemcontactop-button').addEventListener('click', handleCollectAndSave);

// Deze functie kijkt naar de display modus van #message-box, als deze op none staat betekend dat de gebruiker op een klein scherm zit en wordt er een andere functie aangeroepen.
function handleCollectAndSave() {
    mesbx = document.querySelector('#message-box')
    messageStyle = getComputedStyle(mesbx);
    displayMode = messageStyle.display;
    if (displayMode === 'none') {
        // Collect values from input elements
        const naam = document.getElementById('nameinput-mobile').value;
        const nummer = document.getElementById('phoneinput-mobile').value;
        collectAndSavemobile(naam, nummer)
    } else {
        // Collect values from input elements
        const naam = document.getElementById('nameinput').value;
        const email = document.getElementById('emailinput').value;
        const nummer = document.getElementById('phoneinput').value;
        const bericht = document.getElementById('messageinput').value;
        collectAndSaveDesktop(naam, email, nummer, bericht)

    }
}
// Dit is de functie om de informatie uit de form op de contact pagina te halen en dit in een txt bestand te zetten en te downloaden. Dit is voor de desktop versie van de website.

function collectAndSaveDesktop(naam, email, nummer, bericht) { console.log(naam+email+nummer+bericht+"hallo")
    //   Hier maken we van de verzaamelde data uit de form een variabele met een string die de data uit het form bevat.
    const data = `Naam: ${naam}\nEmail: ${email}\nNummer: ${nummer}\nBericht: ${bericht}`;
    filename = "Contact-gegevens.txt"
    saveDataToFile(filename,data)
}
// Dit is de functie om de gegevens uit de form te halen als je op mobiel zit. Omdat er minder velden zichtbaar zijn moet deze anders werken.

function collectAndSavemobile(naam, nummer) {
    //   Hier maken we van de verzaamelde data uit de form een variabele met een string die de data uit het form bevat.
    const data = `Naam: ${naam}\nNummer: ${nummer}`;
    filename = "Contact-gegevens-via-mobiel.txt"
    saveDataToFile(filename,data)
}

function saveDataToFile(fileName, data) {
    // De ontvangen string via data, die een string waarde heeft, plaatsen we nu als ruwe text in een blob
    const blob = new Blob([data], { type: 'text/plain' });
    // Hieronder geven we de link waarde een actie voor het maken van een aker element.
    const link = document.createElement('a');
    // deze passen we alsvolgt aan zodat deze verwijst naar de locatie van de blob
    link.href = URL.createObjectURL(blob);
    // Hieronder geven we het anker element een atribuut download waarmee wordt aangegeven dat de link een download actie zal uitvoeren.
    link.download = filename;
    // Hier voegen we de bovenstaande a element toe aan de body van de website en wordt er op geklikt.
    document.body.appendChild(link);
    link.click();
    // Hier halen we het element weer weg uit de body van de website.
    document.body.removeChild(link);
}