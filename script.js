function Clock() {
  let date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  let day = date.getDay()
  let date_num = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  let session = (hours > 12) ? "PM" : "AM"
  let Arrayday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  hours = (hours > 12) ? hours - 12 : hours

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  date_num = (date_num < 10) ? "0" + date_num : date_num
  month = (month < 10) ? "0" + month : month

  document.body.querySelector(".date").innerHTML = date_num + " - " + month + " - " + year
  document.body.querySelector(".day").innerHTML = Arrayday[day]
  document.body.querySelector(".time").innerHTML = hours + " : " + minutes + " : " + seconds + "  " + session
}

setInterval((Clock), 1000)




