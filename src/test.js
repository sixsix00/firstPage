export const test = function () {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      var Counter = function (elem) {
        console.log("elem外:", this);
        this.count = 0;
        this.elem = elem;
        elem.addEventListener(
          "click",
          () => {
            console.log("elem內:", this);
            this.count++;
            this.show();

            document.getElementById("abc").addEventListener("click", () => {
              console.log("elem內內~~:", this);
            });
          },
          false
        );
      };

      Counter.prototype.show = function () {
        console.log("Counter內:", this);
        console.log(this.elem.id + "被點擊" + this.count + "次");
      };

      new Counter(document.getElementById("btn"));
    },
    false
  );
};
