# Allgemeine Aufgabenstellung
Dieses Mal werdet ihr zu einem der vorgegebenen Projekte zugeordnet und bearbeitet dieses anschließend als Team. Bereitet für die Präsentation eine 10-15-minütige Präsentation vor. Wie ihr euer Projekt präsentiert, ist euch dieses Mal selbst überlassen. Achtet dabei darauf, ungefähr in diesem Zeitlimit zu bleiben. Jede Person der Gruppe MUSS etwas zur Bearbeitung des Projekts beitragen, die Präsentation darf aber dieses Mal von einzelnen Gruppenmitgliedern oder einer Einzelperson durchgeführt werden.

# Aufgabe 2 Supermarkt Standortdaten Sammlung
Du hast von einer Supermarkt-Kette den Auftrag bekommen Standortdaten anderer Supermärkte zu sammeln. Diese Daten sollen als Grundlage für eine spätere Standortanalyse für eine neue Filiale genutzt werden sollen.
Sammle mit den dir bekannten Methoden (API Aufrufe und Webscraping) möglichst viele Standortdaten Deutscher Supermärkte aus dem Internet. Dabei zählt Qualität vor Quantität.
Das heißt sammle lieber viele Daten zu weniger Supermärkten, als dass du sehr viele Supermärkte mit nur spärlichen Informationen hast. Beschränke dich lieber zunächst auf einzelne Orte und sammle dort möglichst alle Supermärkte. Decke nicht direkt ganz Deutschland ab, wenn das bedeutet, dass du dafür in den einzelnen Regionen nicht alle Filialen erwischst.
Ein guter Startpunkt ist folgende [Website](https://www.tiendeo.de/Filialen/brandenburg-an-der-havel/supermarkt):

Der Link liefert Filialen in Brandenburg an der Havel. Wenn man den Mittelteil der URL durch einen anderen Stadtnamen ersetzt, kann man auch in anderen Orten suchen.
Überprüfe immer in der robots.txt, ob du die Daten direkt auslesen darfst.

Interessante Standortdaten umfassen zum Beispiel:
- Filialname
- Besitzer
- Ketten-name
- Stadt
- Stadtteil
- Postleitzahl
- Straße
- Hausnummer
- Adresszusätze

Natürlich könnt ihr auch weitere Informationen einbauen, falls ihr sie findet. Gesammelte Postleitzahlen oder andere Daten könnenz z.B. in Aufrufen auf andere APIs genutzt werden, um auch Längen und Breitengrade oder andere Daten zu den Standorten zu sammeln.
Jegliche Daten sollen beim Speichern in ein einheitliches, tabellarisches Format mit konsistenten Datentypen gebracht werden. Die Art der Speicherung (z.B. CSV, Datenbank etc.) bleibt dir überlassen.
Zusätzlich soll ein möglicher Anwender die Daten schnell abrufen und ansehen können.
Entwickelt gerne eigene Ideen für Zusatzfunktionen. Zum Beispiel könnte man Filter-Funktionen anlegen, um dem Anwender nur Daten über bestimmte Regionen zu geben, oder Zusammenfassungs-Funktionen, welche die Anzahl von Supermärkten in einer Region oder von einer bestimmten Kette anzeigen. Diese Art von Statistiken über die gesammelten Daten können auch sehr gut in der Präsentation gezeigt werden.
Viel Spaß!
