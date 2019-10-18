$(document).ready(function () {
    var source = $("#companyStory").html();
    var source2 = $(".post").html();

    var template = Handlebars.compile(source);
    var template2 = Handlebars.compile(source2);

    var context = {
        company: "<span>unternehmen</span>",
        companySince: "<span>Seid 1994 für Sie da...</span>"
    }

    var context2 = {
        comments: [{
            jahr: {
                icon: "cbp_tmicon-phone",
                jahr: "<span>1994</span>",
                gruendung: "<h2>Gründung</h2>",
                text1: "Laut der Gewerbeanmeldung gelten wir als erstes Transportunternehmen in Neu-Ulm. Gestartet sind wir mit einem LKW &amp; einer Person im Raum Ulm/Neu-Ulm. Mit stetigen Wachstum entwickelten wir uns zu einem professionellen &amp; starken Partner mit Sitz in der Region Alb-Donau-Kreis.",
                text2: "</br> Geschäftsführerin: Tülin Sönmez Lastkraftfahrer: Duran Sönmez"

            },
            jahr: {
                icon: "cbp_tmicon-screen",
                styleClass: "col-white",
                jahr: "<span>2006</span>",
                gruendung: "<h2>Geschäftsleitung</h2>",
                text1: "Laut der Gewerbeanmeldung gelten wir als erstes Transportunternehmen in Neu-Ulm. Gestartet sind wir mit einem LKW &amp; einer Person im Raum Ulm/Neu-Ulm. Mit stetigen Wachstum entwickelten wir uns zu einem professionellen &amp; starken Partner mit Sitz in der Region Alb-Donau-Kreis.",
                text2: "</br> Geschäftsführerin: Tülin Sönmez Lastkraftfahrer: Duran Sönmez"

            },
            jahr: {
                icon: "cbp_tmicon-mail",
                jahr: "<span>2015</span>",
                gruendung: "<h2>Wachstum &amp; Infrastruktur</h2>",
                text1: "Laut der Gewerbeanmeldung gelten wir als erstes Transportunternehmen in Neu-Ulm. Gestartet sind wir mit einem LKW &amp; einer Person im Raum Ulm/Neu-Ulm. Mit stetigen Wachstum entwickelten wir uns zu einem professionellen &amp; starken Partner mit Sitz in der Region Alb-Donau-Kreis.",
                text2: "</br> Geschäftsführerin: Tülin Sönmez Lastkraftfahrer: Duran Sönmez"

            },
            jahr: {
                icon: "cbp_tmicon-phone\"",
                styleClass: "col-white",
                jahr: "<span>2016</span>",
                gruendung: "<h2>Ausbildungsbetrieb</h2>",
                text1: "Laut der Gewerbeanmeldung gelten wir als erstes Transportunternehmen in Neu-Ulm. Gestartet sind wir mit einem LKW &amp; einer Person im Raum Ulm/Neu-Ulm. Mit stetigen Wachstum entwickelten wir uns zu einem professionellen &amp; starken Partner mit Sitz in der Region Alb-Donau-Kreis.",
                text2: "</br> Geschäftsführerin: Tülin Sönmez Lastkraftfahrer: Duran Sönmez"

            },
            jahr: {
                icon: "cbp_tmicon-earth",
                jahr: "<span>2018</span>",
                gruendung: "<h2>LOGISTIK</h2>",
                text1: "Laut der Gewerbeanmeldung gelten wir als erstes Transportunternehmen in Neu-Ulm. Gestartet sind wir mit einem LKW &amp; einer Person im Raum Ulm/Neu-Ulm. Mit stetigen Wachstum entwickelten wir uns zu einem professionellen &amp; starken Partner mit Sitz in der Region Alb-Donau-Kreis.",
                text2: "</br> Geschäftsführerin: Tülin Sönmez Lastkraftfahrer: Duran Sönmez"

            },
            jahr: {
                icon: "cbp_tmicon-earth",
                styleClass: "col-white",
                jahr: "<span>2019</span>",
                gruendung: "<h2>REIFENSERVICE</h2>",
                text1: "Laut der Gewerbeanmeldung gelten wir als erstes Transportunternehmen in Neu-Ulm. Gestartet sind wir mit einem LKW &amp; einer Person im Raum Ulm/Neu-Ulm. Mit stetigen Wachstum entwickelten wir uns zu einem professionellen &amp; starken Partner mit Sitz in der Region Alb-Donau-Kreis.",
                text2: "</br> Geschäftsführerin: Tülin Sönmez Lastkraftfahrer: Duran Sönmez"

            }
        }]
    }


    var el_html = template(context);

    $("#renderHere").html(el_html);

    Handlebars.registerHelper('timeline', function (who) {
        return {icon: who.jahr};
    })

    var html = template2(context2);
    $(".post").html(html);


})
