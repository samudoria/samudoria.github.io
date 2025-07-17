const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactcontent = document.querySelector("#contact-content");


about.addEventListener("click", () => {
    const aboutBox = new WinBox({
        title: "about me",
        //modal: true,
        width: "400px",
        height: "400px",
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent,
        onfocus: function () {
            this.setBackground("#00aa00");
        },
        onblur: function () {
            this.setBackground("#777");
        },
    });
});

var contactTop = 150;
var contactRight = 50;
var contactBottom = 50;
var contactLeft = 150;
if (window.innerWidth < 1220) {
    var contactTop = 50;
    var contactRight = 50;
    var contactBottom = 50;
    var contactLeft = 50;
}

contact.addEventListener("click", () => {
    const contactBox = new WinBox({
        title: "contact me",
        background: "#00aa00",
        width: "400px",
        height: "400px",
        top: contactTop,
        right: contactRight,
        bottom: contactBottom,
        left: contactLeft,
        mount: contactcontent,
        onfocus: function () {
            this.setBackground("#00aa00");
        },
        onblur: function () {
            this.setBackground("#777");
        },
    });
});


// Typewriter.js
// https://github.com/ronv/Typewriter.js

$.fn.typewriter = function () {
    this.each(function () {
        var c = $(this),
            b = c.html(),
            a = 0,
            d = 0;
        c.html("");
        var e = function () {
            if ("<" == b.substring(a, a + 1)) {
                var f = new RegExp(/<span class="instant"/),
                    g = new RegExp(/<span class="clear"/);
                if (b.substring(a, b.length).match(f))
                    a += b.substring(a, b.length).indexOf("</span>") + 7;
                else if (b.substring(a, b.length).match(g))
                    (d = a),
                        (a += b.substring(a, b.length).indexOf("</span>") + 7);
                else for (; ">" != b.substring(a, a + 1);) a++;
            }
            c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
            a >= b.length || setTimeout(e, 15 * Math.random());
        };
        e();
    });
    return this;
};
$(".terminal").typewriter();
