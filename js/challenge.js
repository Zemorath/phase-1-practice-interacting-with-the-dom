function _toConsumableArray(a) {
    if (Array.isArray(a)) {
        for (var b = 0, c = Array(a.length); b < a.length; b++)
            c[b] = a[b];
        return c
    }
    return Array.from(a)
}

var playing = !0;
var counting = function() {
    return setInterval(function() {
        var timer = document.getElementById("counter");
        var counter = parseInt(timer.innerText);
        timer.innerText = counter + 1;
    }, 1000);
};
var interval = counting();

var pause = document.getElementById("pause");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var heart = document.getElementById("heart");
var form = document.getElementsByTagName('form')[0];

pause.addEventListener("click", function() {
    playing ? (playing = !1, clearInterval(interval), 
    this.innerText = "resume") : (playing = !0, interval = counting(),
    this.innerText = "pause")
});

plus.addEventListener("click", function(){
    var timer = document.getElementById("counter");
    var counter = parseInt(timer.innerText);
    timer.innerText = counter + 1;
});

minus.addEventListener("click", function(){
    var timer = document.getElementById("counter");
    var counter = parseInt(timer.innerText);
    timer.innerText = counter - 1;
});

heart.addEventListener("click", function() {
    var timer = document.getElementById("counter");
    var counter = parseInt(timer.innerText);
    var likes = document.querySelector(".likes");
    var comment = void 0;

    if ([].concat(_toConsumableArray(likes.children)).map(function(timer) {
        return parseInt(timer.dataset.num)
    }).includes(counter)) {
        comment = document.querySelector('[data-num="' + counter + '"]');
        var e = parseInt(comment.children[0].innerText);
        comment.innerHTML = counter + " has been liked <span>" + (e + 1) + "</span> times"
    } else {
        (comment = document.createElement("li")).setAttribute("data-num", counter);
        comment.innerHTML = counter + " has been liked <span>1</span> time";
        likes.appendChild(comment);
    }
});

form.addEventListener("submit", function(a) {
    a.preventDefault();
    var b = this.children[0]
    var c = b.value;
    b.value = "";
    var d = document.querySelector(".comments")
    var e = document.createElement("p");
    e.innerText = c,
    d.appendChild(e)
});

