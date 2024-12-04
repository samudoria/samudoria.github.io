const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const pubblications = document.querySelector("#pubs");
const aboutContent = document.querySelector("#about-content");
const contactcontent = document.querySelector("#contact-content");
const pubscontent = document.querySelector("#pubs-content");


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

contact.addEventListener("click", () => {
    const contactBox = new WinBox({
        title: "contact me",
        background: "#00aa00",
        width: "400px",
        height: "400px",
        top: 150,
        right: 50,
        bottom: 50,
        left: 250,
        mount: contactcontent,
        onfocus: function () {
            this.setBackground("#00aa00");
        },
        onblur: function () {
            this.setBackground("#777");
        },
    });
});

pubblications.addEventListener("click", () => {
    const contactBox = new WinBox({
        title: "pubblications",
        background: "#00aa00",
        width: "800px",
        height: "400px",
        top: 500,
        right: 50,
        bottom: 75,
        left: 500,
        mount: pubscontent,
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
                else for (; ">" != b.substring(a, a + 1); ) a++;
            }
            c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
            a >= b.length || setTimeout(e, 15 * Math.random());
        };
        e();
    });
    return this;
};
$(".terminal").typewriter();
