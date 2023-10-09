@@ -1,119 +1,347 @@
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
@@ -19,8 +19,9 @@ Hintergrundbilder sollten mit CSS eingebunden werden.


# GLOSSAR: 
## HTML-Elemente
## HTML

### HTML-Elemente 
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
@ -110,10 +111,334 @@ Title: Titel-Element setzt den Titel der Seite fest.
     <title> </title>       


## CSS-Objekte
## CSS

CSS wird in html-Dokumente integriert mit: 
    - External stylesheet: <link rel="stylesheet" href="styles.css"> 
    - Internal stylesheet: <style> CSS-Text </style>
    - Inline styling: <h1 style="color: red"> Heading </h1>

CSS-Cascading 

    Cascade-Rule: Wenn sich CSS-Regeln widersprechen (da z.B. die selectors gleich sind), gilt immer die letzte CSS-rule im code.

    Specifity-Rule: CSS-rules, die sich auf classes beziehen sind spezifischer als rules für allgemeine selectors und werden deshalb bei Konflikt den allgemeinen rules vorgezogen. 
    Hierarchie: identifier > class > element


    Inheritence-Rule: nur bestimmte properties werden auf children-elemente weitervererbt (z.B. Scrhiftgröße.). Relative Maßangaben (50%) nicht. 

CSS-functions: führen einfache Befehle aus 
    p {
        padding: 5px; 
        background-color: black; 
        width: calc(90%-30px);
        transform: rotate(0.8turn);
    }

CSS-Layers sind eine Möglichkeit, komplexe CSS-Style-Projekte zu organisieren. 
    Layer werden mit @Layer definiert. Die Hierarchie kann entweder mit "@Layer Layer1, Layer2, Layer3" festgelegt werden, oder ergibt sich aus er Reihenfolge. 
    Mit @import können stylesheets in Layer importiert werden. 


CSS-Box-Model: definiert, wie sich die Elemente (content, border, margin, padding) einer Box (im "block"-outer-display-modus) verhalten
    Content: Inhalt der Box. 
    Border: Rahmen der Box. 
    Padding: Abstand zwischen Rahmen und Content. 
    Margin: Abstand zwischen Rahmen und den nächsten Elementen. (Wird nicht mehr zur eigentlichen Box gerechnet.)

    standard CSS box model: width- und heigth-Maße beziehen sich auf "content". 
    alternativ CSS box model: widht- und height-Maße beziehen sich auf "content" + "padding" + "border". 
        Wird mit folgendem Code aktiviert: 
            .box {
                box-sizing: border-box; 
            }
        Um das alternativ CSS box model auf das gesamte Dokument anzuwenden: 
            html {
                box-sizing: border-box; 
            }
            *, 
            *::before
            *::after{
                box-sizing: inherit; 
            }

CSS-value-types: legen fest, welche data types oder value types ein property akzeptiert.
    <color>: keywords, hex values, rgb()-functions. Achtung! Der Browser muss die Farben aber auch unterstützen.
        keywords: blue, red, greenyellow,...
        hexaxdecimal codes: genauer Code einer Farbe aus 256x256x256 Kombinationen aus rot, grün, blau
        rgb()-function: rot, grün, blau Code mit drei Dezimalzahlen zwischen 0 und 255
        rgba()-function: rot, grün, blau, alpha Code. Alpha-Wert kontrolliert opacity. (ältere Funktion, funktioniert heute mit rgb auch)
            rgb(23 44 120 /.4)
        hsl()-function: Code einer Farbe bestehend aus hue(base shade), saturation, lightness. 
        hsla()-function: hsl mit alpha-Wert für opacity
    <integer>: ganze Zahl 
    <number>: Dezimalzahl
    <percentage>: Prozent des parent element
    <dimension>: Zahl mit einer bestimmten Einheit. Beinhaltet <length>, <angel>, <time>, <resolution>
        <length>: Zahl mit einer der units:
            Absolute Einheiten:  
                cm 
                m 
                Q: Quadratmillimeter
                in: inch
                pc: picas
                pt: points
                px: pixels (am üblichsten)
            Relative Einheiten: 
                em: font size des Element oder Parent-Element 
                ex: x-height der font size des Element 
                ch: width von "0" in der font size des Elements 
                rem: font size des root Element 
                lh: line height des Element 
                rlh: line height des root Element 
                vw: 1% der viewport width 
                vh: 1% der viewport height 
                vmin: 1% der smaller dimension des viewport 
                vmax: 1% der larger dimension des viewport 
                vb: 1% der Größe des root element in die Richtung der block axis 
                vi: 1% der Größe des root element in die Richtung der inline axis 
                svw, svh; 1% der smaller viewport width und height
                lvw, lvh; 1% der larger viewport width und height 
                dvw, dvh; 1% der dynamic viewport width und height
        <image>: Bild. 
            url() greift auf Bild zu 
            linear-gradient erstellt Fabrverlauf 
        <position>: 2D-Koordinaten für Position 
            top
            bottom
            left
            right
            center

CSS-Debugging: Am Besten, man versucht das Problem zuerst in den Dev-Tools (am Besten Firefox) zu lösen. Eventuell kann ein CSS Validator helfen (w3 CSS Validator)

 


    

    


### CSS-rules
CSS-rules bestehen aus 
    selector {
        property: content;     (=declaration)
    }

@rules: Instruktionen an CSS
    import: Importieren eines anderen CSS-Dokuments
        @import "dateiname.css"; 
    

### CSS-selectors 

- universal selector: "*" 

- class-selector: ".classname {}"

- descendant combinator: "selector descendant_selector {}"

- adjacent sibling combinator: "selector + nextselector {}"

- state/pseudo-class: "selector:state {}"
    a_general_link:
        :link: Link 
        :visited: bereits besuchter link 
        :hover: Link, der mit dem Mauszeiger berührt wird 
        :focus: Link, der fokussiert wird (z.B. mit Tabulator Funktion)
        active: Link, auf den geklickt wird 

- pseudo-elements: "selector::element {}"

- id: "#selector {}"

- attribute-selector: "selector[attribute] {}"  

Mehrere selectors können auf eine rule angewendet werden. Sie müssen mit Komma getrennt werden. 

- combinators: 
    - ">" alle Elemente, die direkte children der übergeordnete Objekte sind
    - "+" alle Elemente, die direkte siblings (Nachbarn) der Objekte des ersten selectors sind
    - "~" alle Elemente, die siblings (Nachbarn) der OBjekte des ersten selectors sind 


### CSS-properties

all: spricht alle aktiven properties eines selectors an (z.B. um sie zu deaktivieren)
    .main_heading {
        all: unset;
    }

background-
    -attachment: Kontrolliert das Scrollverhalten des Hintergrundbildes 
        scroll: 
        fixed: 
        local: 
    -image: Legt ein Hintergrundbild für ein bestimmtes HTML-Objekt (hier p) an. 
        p {
            background-image: url(image.jpg)
        }
    -position:
        (x,y): positiniert ein Bild nach Koordinaten 
        top: positioniert ein Bild oben in einer Box 
        center: positioniert ein Bild in der Mitte der Box 
    -repeat: 
        repeat: wiederholt ein Bild, falls es kleiner ist als die Box. 
        no-repeat: wieerholt ein Bild nicht, falls es kleiner ist als die Box.
    -size: legt fest, wie groß ein Hintergrundbild sein soll 
        cover: Bild füllt die gesamte Box aus. 
        contain: Bild ist so groß, dass es komplett in die Box passt. 


border: 
    selector {
        border-top-width: ;
        border-top-style: ; 
        border-top-color: ;
        border-right-width: ; 
        ...
    }

color: ändert die Farbe aller Elemente im Vordergrund eines Elementes 

display: ändert den outer-display-type eines CSS-Elements 
    block: Boxen sind Blöcke, die einfach gestapelt werden. Alle Elemente des CSS-Box-Models sind aktiv. 
    inline: Boxen sind Elemente, die in einer Zeile aneinandergereiht werden. width und height werden nicht beachtet. 
    inline-block: Boxen sind Elemente, die in einer Zeile aneinandergereiht werden. Auch width und height werden beachtet. 
        selector {
            display: inline-block
        }
    flex: Das Flexbox-System in CSS erlaubt, Elemente in einer  Dimension anzuordnen. 
    grid: Das Grid-System in CSS erlaubt, Elemente in zwei Dimensionen anzuordnen. 

Grid --> zugehörige properties
    column-gap: Abstand zwischen Spalten 
    gap: shorthand für column-gap und row-gap
    grid-template-columns: Anzahl und Breite der Spalten. 
        Breite kann mit jeder Maßeinheit angegeben werden. "fr" für fraction beschreibt, das Maßverhältnis zwischen den griditems 
            grid-templet-columns: 2fr 1fr 1fr; 
    grid-template-rows: Anzahl und Höhe der Zeilen. 
    grid-column: Festlegen, welche der Spalten-zellen im grid das Element einnehmen soll 
    grid-row: Festlegen, welche der Zellen Reihen-zellen im grid das Elemente innehmen soll 
    row-gap: Abstand zwischen Reihen 

Flexbox --> zugehörige properties  
    align-items: Anordnung der flex-items auf der Achse, die senkrecht zur flow-Richtung ist (meist vertikal)
    inline-flex: parent element (flex container) ist inline, children (flex-items) sind flex
    flex: shorthand für growth, shrink und basis
        flex: 1 200px; --> alle Items gleich groß, mindestens aber 200px. 
    flex-basis: Mindestgröße eines fles items 
    flex-direction: Richtung, in die die flex-items angeordnet sind
    flex-flow: shorthand für direction und wrap
    flex-growth: Größenverhältnis der flex items untereinander
    flex-wrap: Flexitems können auch mehrere Reihen beanspruchen
    justify-content: Anordnung der flex-items auf der Hauptachse. 
        flex-start: bündig zu Beginn der Hauptachse 
        flex-end: bündig zu Ende der Hauptachse 
        center: zentriert 
        space-around: gleichmäßige Aufteilung mit Abstand an beiden Enden der Hauptachse 
        space-between: gleichmäßige Aufteilung ohne Abstand an beiden Enden der Hauptachse 
    order: erlaubt die Reihenfolge der flexitems manuell festzulegen


float: Element liegt links oder rechts von anderen Boxen 
    left: Element liegt links von den anderen Boxen 
    right: 
    none: Element verhält sich normal
    

Font Styling 
    font-family: setzt die  Schriftartfamilie fest.
        serif: Schriftarten mit kleinen Schnörkeln
        sans-serif: Schriftarten ohne Schnörkel 
        monospace: jeder Buchstabe ist gleich breit 
        cursive: Imitation von Handschriften 
        fantasy: dekorative Schriftarten

        font stacks: Auflistung mehrerer Schriftarten in der rule "font-family". Falls die bevorzugte SChriftart nicht zur Verfügung steht, wird die nächtst Schriftarten verwendet 
            selector{
                font-family: "Trebuchet MS", Verdana, sans-serif; 
            }
        web safe font: Schriftart, di fast alle Endgeräte unterstützen 

    font-size: SChriftgröße. Wird am besten in rem oder noch besser angegeben.

    font-style: 
        normal: normal 
        italic: kursiv

    font-weight: 
        normal: normal 
        bold: fett
        lighter: eine Stufe weniger fett
        bolder: eine Stufe fetter 
        100 - 900: genaue Kontrolle der Fettness
    
    text-decoration: 
        none: nichts
        underline: unterstrichen 
        overline: überstrichen 
        line-through: durchgestrichen

    text-shadow: Hinzufügen von Schattierungen

    text-transform: verändert den Text
        normal: keine Veränderung
        uppercase: Blockschrift
        lowercase: alles klein geschrieben 
        capitalize: jedes Wort beginnt mit Großbuchstaben 
        full-width: jedes Zeichen ist gleich breit (ähnlich wie monospace)

list-
    -style-type: ändert die Formatierung einer liste 
        none: setzt die Standardformatierung zurück 

margin: "margin collapsing" in vertikaler Richtung wird bei zwei angrenzenden margins nur die größere aktiv. 
    selector {
        margin-top: ;
        margin-right: ;
        margin-bottom: ;
        margin-left: ;
    }

object-fit: Bilder und andere "replaced elements" wie Videos können in eine Box eingepasst werden 
    contain: Bild passt genau in die Box 
    cover: Bild füllt die Box aus
    fill: Bild füllt Box aus, Seitenverhältnisse werden aber nicht beibehalten 


opacity: Transparenz 
    .selector {
        opacity = [number between 0 and 1]
    }

overflow: legt fest, wie vorgegangen wird, wenn der Inhalt einer Box größer ist als die Box selbst. 
    visible: Inhalt überschreitet die Boxgrenzen. default. 
    invisible: Inhalt wird unsichtbar.
    scroll: Box wird scrollbar.  


padding: 
    selector {
        padding-top: ; 
        padding-right: ; 
        padding-bottom: ; 
        padding-left: ;
    }

Text Layout: 
    letter-spacing: Abstand zwischen den Buchstaben. In px. 
    
    line-height: Zeilenabstand. Wert ist Zahl ohne Einheit, die als Multiplikator der SChriftgröße verwendet wird. 
        line-height: x;
    
    text-align: 
        left: 
        right: 
        center: 
        justify: Blocksatz 
    
    word-spacing: Abstand zwischen den Wörter. In px. 
    