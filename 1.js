// Ersetzen Sie dies mit Ihrem Google API-Schlüssel
const apiKey = 'AIzaSyBIS3y8ziXbHXDvQGAMj_Lht2O-1jzQoS0';

// Ihre Supermärkte-Liste
var supermärkte = [
    { name: 'REWE Emil Möbus', lat: 52.4079121, lng: 12.5464105, address: 'Neuendorfer Str. 76, 14770 Brandenburg a.d. Havel' },
    { name: 'mein real - Brandenburg', lat: 52.39643410000001, lng: 12.5467461, address: 'Wilhelmsdorfer Str. 42A, 14776 Brandenburg a.d. Havel' },
    { name: 'REWE', lat: 52.4106217, lng: 12.5460912, address: 'Vereinsstraße 13, 14770 Brandenburg a.d. Havel' },
    { name: 'REWE', lat: 52.4094194, lng: 12.5403697, address: 'Vereinsstraße 36, 14770 Brandenburg a.d. Havel' },
    { name: 'REWE Center Karen Laute', lat: 52.407365, lng: 12.5476807, address: 'Neuendorfer Str. 77b, 14770 Brandenburg a.d. Havel' },
    { name: 'Lidl', lat: 52.4114094, lng: 12.5485925, address: 'Nicolaipl. 10, 14770 Brandenburg a.d. Havel' },
    { name: 'REWE', lat: 52.417784, lng: 12.5496566, address: 'Willi-Sänger-Straße 17, 14770 Brandenburg a.d. Havel' },
    { name: 'REWE', lat: 52.40383869999999, lng: 12.5293698, address: 'Caasmannstraße 7, 14770 Brandenburg a.d. Havel' },
    { name: 'Lidl', lat: 52.4053506, lng: 12.5489212, address: 'Franz-Ziegler-Straße 28, 14776 Brandenburg a.d. Havel' },
    { name: 'NETTO Marken-Discount', lat: 52.4038864, lng: 12.5585922, address: 'Trauerberg 1B, 14776 Brandenburg a.d. Havel' },
    { name: 'Aldi Nord', lat: 52.40656809999999, lng: 12.5539076, address: 'Am Mühlengraben 22, 14776 Brandenburg a.d. Havel' },
    { name: 'EDEKA Höppner', lat: 52.41894989999999, lng: 12.5606236, address: 'Beetzseeufer 4, 14770 Brandenburg a.d. Havel' },
    { name: 'NETTO Marken-Discount', lat: 52.4108289, lng: 12.5583067, address: 'Hauptstraße 51, 14776 Brandenburg a.d. Havel' },
    { name: 'ALDI Nord', lat: 52.41993069999999, lng: 12.5556374, address: 'Brielower Str. 15b, 14770 Brandenburg a.d. Havel' },
    { name: 'NETTO Marken-Discount', lat: 52.3945963, lng: 12.5412392, address: 'Wilhelmsdorfer Landstraße 41, 14776 Brandenburg a.d. Havel' },
    { name: 'Kaufland', lat: 52.40865290000001, lng: 12.5443531, address: 'Damaschkestraße 31, 14770 Brandenburg a.d. Havel' },
    { name: 'REWE', lat: 52.4079937, lng: 12.5654356, address: 'Sankt-Annen-Straße 23, 14776 Brandenburg an der Havel' },
    { name: 'ALDI Nord', lat: 52.420661, lng: 12.5449203, address: 'Willi-Sänger-Straße 66, 14772 Brandenburg an der Havel' },
    { name: 'Penny', lat: 52.4260551, lng: 12.5037354, address: 'Veilchenweg 2, 14772 Brandenburg an der Havel-Görden' },
    { name: 'Netto', lat: 52.4136505, lng: 12.5058816, address: 'Magdeburger Landstraße 190, 14770 Brandenburg an der Havel' },
    { name: 'Netto', lat: 52.41993739999999, lng: 12.54711, address: 'Willi-Sänger-Straße 46, 14770 Brandenburg an der Havel' },
    { name: 'ALDI Nord', lat: 52.4030075, lng: 12.5691094, address: 'Geschwister-Scholl-Straße 30, 14776 Brandenburg an der Havel' },
    { name: 'Netto', lat: 52.4319158, lng: 12.5298943, address: 'Rosa-Luxemburg-Allee 4A, 14772 Brandenburg an der Havel-Hohenstücken' },
    { name: 'Lidl', lat: 52.4049183, lng: 12.5717734, address: 'Potsdamer Straße 23, 14776 Brandenburg an der Havel' },
    { name: 'Kaufland', lat: 52.4091617, lng: 12.6134946, address: 'An der Bundesstraße 1, 14776 Brandenburg an der Havel-Wust' },
    { name: 'Netto', lat: 52.41868280000001, lng: 12.5519127, address: 'Willi-Sänger-Straße 20, 14776 Brandenburg an der Havel' },
    { name: 'Netto', lat: 52.3874149, lng: 12.401977, address: 'Wusterwitzer Straße 32F, 14774 Brandenburg an der Havel-Kirchmöser' },
    { name: 'REWE', lat: 52.43378999999999, lng: 12.52061, address: 'Tschirchdamm 17, 14772 Brandenburg an der Havel-Hohenstücken' },
    { name: 'Lidl', lat: 52.4139095, lng: 12.5243491, address: 'Friedrich-Franz-Straße 4, 14770 Brandenburg an der Havel' }
];


// Funktion, um Bewertungen für einen bestimmten Supermarkt abzurufen
function getRatings(supermarkt) {
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(supermarkt.name)}&inputtype=textquery&fields=rating&key=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.status === 'OK') {
            const place = data.candidates[0];
            console.log(`${supermarkt.name}: Rating = ${place.rating}`);
        } else {
            console.log(`${supermarkt.name}: Keine Daten gefunden`);
        }
    })
    .catch(error => console.error('Fehler beim Abrufen der Daten:', error));
}

// Bewertungen für alle Supermärkte abrufen
supermärkte.forEach(supermarkt => getRatings(supermarkt));
