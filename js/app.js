const konten = [
  {
    name: "Girokonto",
    kontostand: 1000,
    typ: "Zahlungsmittel"
  },

  {
    name: "Kreditkarte",
    kontostand: 1500,
    typ: "Zahlungsmittel"
  },

  {
    name: "Bargeld",
    kontostand: 50,
    typ: "Zahlungsmittel"
  },
  
  {
    name: "Sparkonto",
    kontostand: 15000,
    typ: "Sparen"
  },

  {
    name: "Sparen Bargeld",
    kontostand: 70.95,
    typ: "Sparen"
  }
];

const kontenBereich = document.getElementById("kontenListe");

konten.forEach(function(konto) {

    const kontoKarte = document.createElement("div");

    kontoKarte.className = "konto";

    kontoKarte.innerHTML = `
        <h3>${konto.name}</h3>
        <p>${konto.kontostand} €</p>
    `;

    kontenBereich.appendChild(kontoKarte);

});
  

