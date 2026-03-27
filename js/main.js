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

const TYPEWRITER_MAX_DELAY_MS = 7;

function applyTypewriter(element) {
    let content = element.innerHTML;
    let index = 0;
    let clearIndex = 0;

    element.innerHTML = "";

    const step = () => {
        if (content.substring(index, index + 1) === "<") {
            const remaining = content.substring(index);
            const hasInstantSpan = /<span class="instant"/.test(remaining);
            const hasClearSpan = /<span class="clear"/.test(remaining);

            if (hasInstantSpan) {
                index += remaining.indexOf("</span>") + 7;
            } else if (hasClearSpan) {
                clearIndex = index;
                index += remaining.indexOf("</span>") + 7;
            } else {
                while (content.substring(index, index + 1) !== ">") {
                    index++;
                }
            }
        }

        element.innerHTML = content.substring(clearIndex, index++) + (index & 1 ? "_" : "");

        if (index < content.length) {
            setTimeout(step, TYPEWRITER_MAX_DELAY_MS * Math.random());
        }
    };

    step();
}

document.querySelectorAll(".terminal").forEach(applyTypewriter);
