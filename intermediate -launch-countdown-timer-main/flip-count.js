export function flipCount(DOMubication, time) {

  const initTime = {
    days: 13,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  let totalSeconds = ((((initTime.days*24) + initTime.hours)*60 + initTime.minutes)*60 + initTime.seconds) * 1000

  document.querySelector(DOMubication).innerHTML += 
    `
    <div class="flip-container ${time}">
      <div class="frontTop ${time} flip-part-CSS"></div>
      <div class="backTop ${time} flip-part-CSS"></div>
      <div class="frontDown ${time} flip-part-CSS"></div>
      <div class="backDown ${time} flip-part-CSS"></div>
    </div>
    `

  document.querySelector(`.flip-container.${time}`).style.cssText =
    `
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      perspective: 300px;
    `

  let state = "on";
  let interval = setInterval(start, 1);

  window.addEventListener("click", function () {
    if (state === "on") {
      clearInterval(interval);
      state = "off";
    } else {
      interval = setInterval(start, 1);
      state = "on";
    }
  });

  function start() {
    function applyStyle(DOMObject, ObjectStyle) {
      const object = document.querySelector(DOMObject).style;
      const style =
        Object.entries(ObjectStyle)
          .map((elem) => elem[0] + ": " + elem[1])
          .join(";") + ";";
      return (object.cssText = style);
    }

    const presentTime = new Date(totalSeconds)
    const nextTime = new Date(totalSeconds - 1000)

    totalSeconds = totalSeconds - 1

    const selectedTime = {
      days: [presentTime.getUTCDate().toString().padStart(2, '0'), nextTime.getUTCDate().toString().padStart(2, '0')],
      hours: [presentTime.getUTCHours().toString().padStart(2, '0'), nextTime.getUTCHours().toString().padStart(2, '0')],
      minutes: [presentTime.getUTCMinutes().toString().padStart(2, '0'), nextTime.getUTCMinutes().toString().padStart(2, '0')],
      seconds: [presentTime.getUTCSeconds().toString().padStart(2, '0'), nextTime.getUTCSeconds().toString().padStart(2, '0')]
    }

    const timeArr = Object.entries(selectedTime).filter(elem => elem.includes(time))[0][1]
    //Diseño y programacion parte superior

    const frontTopCSS = 
      (timeArr[0] === timeArr[1]) ? ({
      width: "100%",
      height: "50%",
      "transform-origin": "bottom",
      "transform-style": "preserve-3d",
      "z-Index": "1",
      position: "absolute",
      top: "0%",
      overflow: "hidden",
      "border-radius": "8px 8px 0px 0px",
      "border-top": "1px solid black"
      }) : ({
      width: "100%",
      height: "50%",
      "transform-origin": "bottom",
      "transform-style": "preserve-3d",
      transform: `rotateX(${((1000-presentTime.getMilliseconds()) * -180) / 1000}deg)`,
      opacity: `${Math.round(presentTime.getMilliseconds() / 1000)}`,
      "z-Index": "1",
      position: "absolute",
      top: "0%",
      overflow: "hidden",
      "border-radius": "8px 8px 0px 0px",
      "border-top": "1px solid black"
      })

    const backTopCSS = {
      width: "100%",
      height: "50%",
      position: "absolute",
      display: "flex",
      "flex-direction": "column",
      "align-items": "center",
      "justify-content": "center",
      position: "absolute",
      top: "0%",
      overflow: "hidden",
      "border-radius": "8px 8px 0px 0px",
      "border-top": "1px solid black"
    };

    applyStyle(`.frontTop.${time}`, frontTopCSS);
    applyStyle(`.backTop.${time}`, backTopCSS);

    document.querySelector(`.frontTop.${time}`).innerHTML = `
  <span style = '
    width: 100%;
    height: 100%;
    position: absolute;
    top: 45%;
    left: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    '>${timeArr[0]}
      <div class="left-dot"></div>
      <div class="right-dot"></div>
    </span>
  `;

    document.querySelector(`.backTop.${time}`).innerHTML = `
  <span style = '
    width: 100%;
    height: 100%;
    position: absolute;
    top: 45%;
    left: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    '>${timeArr[1]}
      <div class="left-dot"></div>
      <div class="right-dot"></div>
    </span>
  `;

    //Diseño y programacion parte inferior

    const frontDownCSS = (timeArr[0] === timeArr[1]) ? ({
      width: "100%",
      height: "50%",
      "transform-origin": "top",
      "transform-style": "preserve-3d",
      "z-Index": "1",
      position: "absolute",
      top: "50%",
      overflow: "hidden",
      "border-radius": "0px 0px 8px 8px",
      "border-bottom": "1px solid black",
      "border-top": "1px inset var(---dark-desaturated-blue-line)"
    }) : ({
      width: "100%",
      height: "50%",
      "transform-origin": "top",
      "transform-style": "preserve-3d",
      transform: `rotateX(${((presentTime.getMilliseconds()) * 180) / 1000}deg)`,
      opacity: `${Math.round(1 - presentTime.getMilliseconds() / 1000)}`,
      "z-Index": "1",
      position: "absolute",
      top: "50%",
      overflow: "hidden",
      "border-radius": "0px 0px 8px 8px",
      "border-bottom": "1px solid black",
      "border-top": "1px inset var(---dark-desaturated-blue-line)"
    })

    const backDownCSS = {
      width: "100%",
      height: "50%",
      position: "absolute",
      display: "flex",
      "flex-direction": "column",
      "align-items": "center",
      "justify-content": "center",
      position: "absolute",
      top: "50%",
      overflow: "hidden",
      "border-radius": "0px 0px 8px 8px",
      "border-bottom": "1px solid black",
      "border-top": "1px inset var(---dark-desaturated-blue-line)"
    };

    applyStyle(`.frontDown.${time}`, frontDownCSS);
    applyStyle(`.backDown.${time}`, backDownCSS);

    document.querySelector(`.frontDown.${time}`).innerHTML = `
  <span style = '
    width: 100%;
    height: 100%;
    position: absolute;
    top: -55%;
    left: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    '>${timeArr[1]}
      <div class="left-dot"></div>
      <div class="right-dot"></div>
    </span>
  `;

    document.querySelector(`.backDown.${time}`).innerHTML = `
  <span style = '
    width: 100%;
    height: 100%;
    position: absolute;
    top: -55%;
    left: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    '>${timeArr[0]}
      <div class="left-dot"></div>
      <div class="right-dot"></div>
    </span>
  `;
  }
}
