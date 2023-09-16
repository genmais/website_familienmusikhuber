# website_familienmusikhuber
Samuel' und Elias' project to build a website for the Familienmusik Huber. 

# ToDo 
- Informationsarchitektur (Gliederung und Aufbau der Website)
- Sitemap zeichnen (wie genau linken die einzelnen Subseiten zueinander?)

# Informationsarchitektur

## Seitenübergreifende Elemente 
- Header
- Footer

## Unterseiten

# Notizen 
- Falls im html-Dokument Fehler sind, kann ein Scan durch W3C (Markup Validation Service) helfen. 
Hintergrundbilder sollten mit CSS eingebunden werden. 


# GLOSSAR: 
## HTML-Elemente

Anchor: Macht ein Element/Wort zu einem Link 
    <a href="" title="" target=""> </a>
        href: "hypertext reference": URL
            URLs können Weblinks oder auch Dateinpfade sein.
            Es ist auch möglich, an bestimmte Stellen eines Dokuments zu verweisen, siehe ID.  
        title: Titel des Links 
        target: öffnet mit "_blank" einen neuen Tab
        download: wenn ein Link direkt einen download startet, setzt dieses attribut einen Filenamen fest. 
Body: Body-Element umfasst alles, was auf der Website sichtbar ist. 
    <body> </body>
Div: Strukturierungselement (nicht semantisch). Einfaches Blockelement. Sollte immer mit einem Klassenattribut versehen werden. Sollte nur verwendet werden, wenn kein anderes (semantisches) Element geeignet ist.
    <div> </div>
Doctype: steht in jedem html Dokument an erster Stelle 
    <!doctype html>
Emphasis: Hervorheben von Text. Das dieses Element auch einen semantischen Wert hat, wird es von Screenreadern entsprechend umgesetzt. 
    <em> </em>
Figure: Element, um ein Bild mit Bildunterschrift einzubetten. 
    <figure src="" alt="">
    <figcaption> </figcaption>
Footer: Struktrierungselement. Fußzeile einer Website. 
    <footer> </footer>
Head: Container für alles, was in das Dokument inkludiert werden soll, aber nicht auf der Website sichtbar ist (Metadaten). Browser verwenden Informationen aus Head um die Seite korrekt zu rendern. 
    <head> </head>
Header: Strukturierungselement. Ganz oben auf der Website. 
    <header> </header>
Heading: Überschriften-Element 
    <h1> </h1>
Html: "root element". Beinhaltet den gesamten html-Text des Dokuments
    <html> </html>
Horizontal rule: Strukturierungselement. Fügt horizontale Linie ein, um Inhalte zu trennen. 
    <hr />
ID: ID kann als Attribut für jedes Element verwendet werden. Mit <a href=Dateipfad#Beschreibung> ist es dann möglich, genau diese Stelle zu verlinken. 
    <h2 ID="Beschreibung">Beschreibung</h2>
Image: Element, um ein Bild einzubetten. "Replaced element", da Größe und Inhalt des Elements von einer externen Quelle festgelegt werden. Maße sollten festgelegt werden, um sicherzustellen, dass das Bild auf der Website genau den Platz einnimmt, der vorgesehen ist. Falls das Bild nicht schnell genug geladen wird, bleibt die entsprechende Lücke für das Bild frei.
    <img 
        src="URL des Bildes" 
        alt="Bildbeschreibung (alternative text)"
        width="längeinpixxeln"
        height="höheinpixeln"   
    >
Link: Link-Element erlaubt, css-files in html-Dokument einzubinden. Zwei Attribute beschreiben, welches file. 
    <link rel="stylesheet" href="filepath.css"/>
Line break: Strukturierungselement. Zeilenumbruch. 
    <br />
List: List-Element erstellt eine Liste. Es gibt geordnete und ungeordnete Listen. 
    <ul> 
        <li> </li>
        <li> </li>
        ...
    </ul> 
    <ol>
        <li> </li>
        <li> </li>
        ... 
    </ol>
Main: Hauptteil der Website 
    <main> </main>
Meta: Meta-Element erlaubt, Metadaten zu inkludieren, für die es nicht ein eigenes html-Element gibt. 
    <meta ...>
    <meta name="" content=""> Viele Meta-Elemente beinhalten name- und content-attribute. 
        author: Attribut des meta-Elements, um den Autor der Seite zu benennen.
            <meta name="author" content="Name des Autors">
        Charset: Attribut des <meta> Elements. Setzt die verfügbaren Textzeichen fest. 
            <meta charset=utf-8>
        description: Attribut des meta-Elements, um die Seite zu beschreiben. Mächtige keywords in der description erhöhen die Sichtbarkeit der Seite.
            <meta name="description" content="Beschreibung der Seite">
Navigation bar: Strukturierungselement. Navigationsleiste. 
    <nav> </nav>
Paragraph: Paragraph-Element gliedert Text in einem Absatz 
    <p> </p>
Quote: Quote-Element dient dazu, Zitate zu kennzeichnen. Blockquote fasste in Zitat in einem block zusammen. 
    <q> </q>
    <blockquote> </blockquote>
Section: Strukturierungselement. Gruppiert verschiedene Element in zu einer Einheit. 
    <section> </section>
Script: Script-Element erlaubt, javascript-files in das html-Dokument einzubinden. Zwei Attribute beschreiben, welches file. 
    <script scr="filepath.js" defer></script> 
        Das script-Element ist kein void-Element und deshalb ist der closing-tag notwendig. 
        "Defer" führt dazu, dass das script-file erst geladen wird, wenn das html-file gelesen ist. Es können sonst Fehler entstehen, wenn das script-file auf html-Elemente zugreifen will, die noch nicht gelesen und damit noch unbekannt sind. 
Span: Strukturierungselement (nicht semantisch) Span-Element erlaubt Text oder andere Elemente zu gliedern, ohne ein anderes Element (wie h, p) zu verwenden. Diese Elemente haben immer auch eine semantische Bedeutung, die manchmal nicht erwünscht ist. 
    <span> </span>
Strong: Starkes Hervorheben des Textes. Mit semantischer Information (siehe emphasis). 
    <strong> </strong>
Time: Daten und Uhrzeiten sollten mit dem time-Element verknüpft sein, um dem Computer zu ermöglichen, die Daten zu lesen. 
    <time datetime="2000-07-03">7. März 2000</time>
Title: Titel-Element setzt den Titel der Seite fest. 
     <title> </title>       


## CSS-Objekte

background-
    -image: Legt ein Hintergrundbild für ein bestimmtes HTML-Objekt (hier p) an. 
        p {
            background-image: url(image.jpg)
        }
