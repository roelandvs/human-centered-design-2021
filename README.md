# Human Centered Design
Voor dit vak ontwerpen we een applicatie specifiek voor 1 persoon. Hierbij is ligt er een focus op testen met de doelgroep en denken aan de Exclusive Design Principes. Elke leerling is ingedeeld bij een testpersoon. Er zijn 4 testpersonen die allemaal een unieke ervaring hebben met het browsen op het internet. Zij hebben namelijk allemaal een fysieke beperking. Het is aan ons als designers/developers om een applicatie te maken die een door hen gekozen probleem verhelpt. 

Ik ben ingedeeld bij Eric. De case waar ik aan werk is om text te kopiëren en plakken door middel van spraak. Eric zijn ledematen zijn vergroeid en daardoor heeft meer moeite met het gebruik van een toetsenbord en een muis. 

# User Scenario
Eric, 48, een interaction desginer met een fysieke beperking, wil graag een deel van een nu.nl artikel kopiëren om door te sturen naar een van zijn klanten. Door zijn fysieke beperking is het erg lastig om tekst met de muis te selecteren en om dit vervolgens te kopiëren en plakken. 

Eric zou zelf graag met spraak de tekst willen selecteren, kopiëren en plakken. Eric heeft al vaker met VUI's gewerkt en vind ze niet allemaal even makkelijk om te gebruiken. Hij heeft zelf interaction design gestudeerd dus hij merkt al snel als de interactie niet goed werkt.

# Eind applicatie
![Screenshot 2021-04-28 at 20 58 23](https://user-images.githubusercontent.com/59770136/116458091-7f3f8f80-a864-11eb-8f60-eb75ce05d219.png)
[Link naar live site](https://hcd-speech-copy.netlify.app/)

Het uiteindelijke resultaat is een spraak gebasseerde applicatie die gestard wordt met een knop die constant in je scherm staat. Met deze applicatie spreek je eerst het begin van de tekst die je wil selecteren, en vervolgens spreek je het einde van de tekst die je wil selecteren. Dan wordt de tekst die daar tussen staat compleet geselecteerd, en met het woord "kopieer" wordt de geselecteerde tekst naar het cliopboard gekopieerd. 

Er zijn een aantal opdrachten die je kunt uitspreken om handelingen uit te voeren:
- `"kopieer"`: kopieert de geselecteerde tekst naar je clipboard
- `"annulleer opdracht"`: stopt de app compleet
- `"opdracht overnieuw"`: begint het selecteren opnieuw
- `"plak opdracht"`: plakt hetgene wat in je clipboard staat

## User Feedback
Aangezien Eric een interaction designer is is er een focus gelegd op de feedback in de applicatie. Dit zijn een aantal punten waar feedback aan de user gegeven wordt.
- In de balk onderaan staat er uitgeschreven wat je kunt doen
- Elke woord dat je spreekt komt in de balk staan
- De woorden die je spreekt worden real time geselecteerd op de pagina
- Zodra je combinatie van woorden uniek is wordt de achtergrond groen
- De knop om spraakherkenning te acitvere veranderd van vorm wanneer hij geklikt is
- Er staat een 'pulse' in de balk om aan te geven dat de app naar je woorden luisterd

## Wat zou ik nog willen toevoegen
Er zijn een aantal ideeën die ik nog had, maar niet in het prototype kon verwerken aangezien daar nog te weinig tijd voor over was.

### Shortcut script
Ik had nog het idee om een pagina toe te voegen waarbij je zelf 'spraak opdrachten' kunt toe voegen en hier een waarde aan kunt geven. Bijvoorbeeld leek het Eric handig om hier adresgevens van vrienden in te stoppen zodat hij die niet telkens hoeft te kopiëren. Je zou dus aan de woorden `kopieer Hendrik adres` het adres van Hendik kunnen toevoegen. Je zou dus alleen nog "kopieer Hendrik adres" tegen de app te zeggen, en dan wordt dit gelijk gekopieerd naar je clipboard. 

Ik zou ook willen dat als de app merkt dat je een bepaalde tekst vaak kopieerd dat hij aan je vraagt: "Zou je deze tekst willen toevoegen aan de Short cuts".

### Meer nonsense
Tijdens de laatste iteratie kreeg ik eindelijk inspitatie om meer nonsense toe te voegen. Ik had hier meerderen ideeën over, maar het is me helaas niet gelukt om het meeste in het prototype naar voren te brengen. Eric houdt namelijk van games en comic books. Het leek me daardoor leuk om in de applicatie stripboek elementen te stoppen. Deze tonen de states waarin de applicatie zich bevind:

**Listening State:** (App luisterd naar gebruiker)  
<img width="582" alt="Screenshot 2021-04-29 at 10 41 18" src="https://user-images.githubusercontent.com/59770136/116524288-80f66b00-a8d7-11eb-8352-c69c20725fa6.png">

**Error State:**  
<img width="582" alt="Screenshot 2021-04-29 at 10 45 40" src="https://user-images.githubusercontent.com/59770136/116524795-10038300-a8d8-11eb-970e-d90534ad2a42.png">

**Loading State:**  
<img width="581" alt="Screenshot 2021-04-29 at 10 34 25" src="https://user-images.githubusercontent.com/59770136/116524260-78059980-a8d7-11eb-90dd-bb32f3590482.png">

**Button Normaal:**   
<img width="130" alt="Screenshot 2021-04-29 at 10 40 36" src="https://user-images.githubusercontent.com/59770136/116524280-7f2ca780-a8d7-11eb-9e78-2dd3a367a1de.png">

**Button Geklikt:**   
<img width="183" alt="Screenshot 2021-04-29 at 10 39 43" src="https://user-images.githubusercontent.com/59770136/116524275-7cca4d80-a8d7-11eb-91a3-7af0cfa39f3c.png">


# Exclusive Design Principles
Ik vond de principes van exclusive design vaak lastig om bij Eric toe te passen. Eric is namelijk een interaction designer. De feedback die hij geeft is daardoor vaak niet met alleen hem in gedachte, maar met bruikbaarheid voor iedereen in gedachte. Om dingen die speciaal voor hem zijn had ik dus meer moeite, maar uiteindelijk is het bij de derde iteratie wel taylor made voor Eric geworden.

## Study Situation
Door het testen met Eric heb ik steeds beter geleerd wat Eric wel en niet kan, en wat hij wel en niet wil. Ik denk dat Study Situation het beste terug komt door de combinatie van klikken en spraak in de applicatie. De applicatie is namelijk niet compleet gebaseerd op spraak. Je start hem met een klik om een button, aangezien Eric dit duidelijker vond dan spraak, en hij is ook comfortabel genoeg om deze knop makkelijk te bereiken en klikken.

## Ignore Conventions
Hetgene waarin Ignore Conventions het meeste terug komt is de button die constant in je scherm staat. Deze is speciaal voor Eric constant zichtbaar aangezien Eric liever niet z'n muis te veel beweegt. Voor een normale gebruiker is het vervelend om constant een button in je scherm te hebben. 

## Prioritise Identity
Ik vind dit een lastig begrip aangezien het resultaat van Prioritise Identity en Study Sitaution mij erg vergelijkbaar lijkt. Het lijkt mij dat je door Prioritise Identity (het testen en samenwerken met de doelgroep) een beter begrip krijgt van de unieke situatie waarin je doelgroep zich bevind (Study Situation). 

Als ik toch moet aangeven hoe Priotise Identity terug te vinden is in de app zou ik zeggen dat bijvoorbeeld de button niet alleen constant in je scherm staat, maar ook te verslepen rond je hele scherm, zodat Eric zelf kan bepalen waar je de button wil hebben staan in je scherm. En altijd de mogelijkheid heeft om hem te verplaatsen als hij in de weg staat. Dit inzicht zou ik nooit zeld bedacht hebben zonder te testen met Eric.

## Add Nonsense
Ik vroeg Eric tijdens een test of hij misschien een idee had over hoe de ervaring van de app leuker kon worden. Als antwoord daarop kreeg ik: Ik wil niet dat de ervaring leuk is, maar gewoon snel. Hierdoor had ik in het begin moeite met add nonsense tot ik bedacht dat het snel en leuk niet los van elkaar stond. Een leukere ervaring hoeft niet in de weg te staan van de snelheid of comfort van gebruik.

Als nonsense heb ik daarom bij de laatste iteratie een stripboek thema toegevoegd aan de applicatie. Dit is onder het kopje meer nonsense ook terug te vinden. 

# Conclusie / Leerdoelen
## Testen Algemeen
### Wat ga ik anders doen
## Exclusive Design