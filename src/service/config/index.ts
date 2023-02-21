const TIME_OUT = 0
let BASE_URL = ""
if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://codercba.pro.com:8000"
} else {
  BASE_URL = "http://codercba.com:9002"
}
console.log(process.env.REACT_APP_BASE_URL)

export { BASE_URL, TIME_OUT }
