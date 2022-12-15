const checkDay = (day: number) : any => {
    if(day < 31 && day > 1) {
        return true
    }
    throw new Error('Day must be larger than 1 and smaller than 31')
}

const checkMonth = (month: number) : any => {
    if(month <= 12 && month > 1) {
        return true
    }
    throw new Error('Month must be larger than 1 and smaller than 12')
}

const checkYear = (year: number) : any => {
    const curretYear = new Date().getFullYear()
    if(year <= Number(curretYear) && year > 1) {
        return true
    }
    throw new Error(`Year must be larger than 1 and smaller than ${curretYear}` )
}



//Bài 1: Viết một hàm JavaScript để lấy ngày hiện tại
//Lưu ý: Truyền dấu phân tách làm đối số.
//getCurrentDate("/") => 17/08/2020

const getCurrentDate = (str: string) : string => {
    const now = new Date()
    return `${now.getDate() + str + (now.getMonth()+1) + str + now.getFullYear()}`
}
console.log(getCurrentDate('/'));


// Bài 2: Viết một hàm JavaScript để lấy số ngày trong tháng
// getDaysInMonth(8, 2020) => 31
const getDaysInMonth = (month:number, year: number): number => {
    checkMonth(month)
    checkYear(year)
    return new Date(year, month, 0).getDate();
}
console.log(getDaysInMonth(8, 2020));


// Bài 3: Viết một hàm JavaScript để kiểm tra xem một ngày có phải là ngày cuối tuần hay không.
const checkWeekDay = (day: number, month: number, year: number): boolean => {
    checkDay(day)
    checkMonth(month)
    checkYear(year)
    const dayOfWeek = new Date(year, month -1, day) 
    return dayOfWeek.getDay() === 6 || dayOfWeek.getDay() === 0
}

console.log(checkWeekDay(17,12,2022));
console.log(checkWeekDay(16,12,2022));



// Bài 4: Viết một hàm JavaScript sẽ trả về số phút theo giờ và phút
const returnMinutes = (hours: number, minutues: number): number => {
    return hours*60 + minutues
}
console.log(returnMinutes(1,5));


// Bài 5: Viết một hàm JavaScript để đếm số ngày đã trôi qua kể từ đầu năm.
const caculateDays = (): number=> {
    const now = new Date()
    console.log(now.getTime());
    const start = new Date(now.getFullYear(), 0, 0)
    console.log(start.getTime());
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return day
}
console.log(caculateDays());
const moonLanding = new Date();


// Bài 6: Viết chương trình JavaScript để tính tuổi.
// calculate_age(new Date(1982, 11, 4))
const caculateAge = (day: number, month: number, year: number): number => {
    checkDay(day)
    checkMonth(month)
    checkYear(year)
    const dayOfWeek = new Date(year, month -1, day) 
    const differentMs = Date.now() - dayOfWeek.getTime();
    const age = new Date(differentMs); 
    console.log(differentMs);
    console.log(dayOfWeek.getTime());
    return Math.abs(age.getFullYear() - 1970);
}

console.log(caculateAge(10, 10, 2001));


// Bài 7: Viết một hàm JavaScript để lấy ngày bắt đầu của tuần.
// let dt = new Date();
// startOfWeek(dt)
const startOfWeek = (now: Date): number => {
    const today = now.getDate();
    const currentDay = now.getDay(); 
    return today - currentDay + 1
}
let dt = new Date();
console.log(startOfWeek(dt))


// Bài 8: Viết một hàm JavaScript để lấy ngày kết thúc tháng
// dt = new Date();
// endOfMonth(dt);
const endOfMonth = (now: Date): number => {
    const date = new Date(now)
    const month = date.getMonth() + 1
    console.log(month);
    const year = date.getFullYear()
    return getDaysInMonth(month,year)
}
dt = new Date();
console.log(endOfMonth(dt));



// Bài 9: Viết hàm đếm ngược thời gian đến tết dương lịch
const countDownToNewYear = (): string => {
    const now = new Date()
    console.log(now.getTime());
    const endYear = new Date(now.getFullYear(), 11, 31)
    console.log(endYear);
    const coutDown = new Date(endYear.getTime() - now.getTime()).getTime()
    console.log(coutDown);
    const days = coutDown/1000 / 60 / 60/ 24
    const hours = (days % Math.floor(days))*24
    const minutues = (hours % Math.floor(hours))*60
    const seconds = (minutues % Math.floor(minutues))*60
    return `${Math.floor(days)} days ${Math.floor(hours)} hours ${Math.floor(minutues)} minutues ${Math.floor(seconds)} seconds` 
}
// setInterval(() => {
//     console.log(countDownToNewYear())
// },1000)
console.log(countDownToNewYear())


// Bài 10: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ với t = ''9:20:56'' và x = 7 thì kết quả là ''9:21:3''



//// reset Form
const obj = {
    name: "manh",
    age: 25,
    hobby: ["code", "play", "game"],
    family: {
      name: "tuna",
      age: 12, 
      hobby: ["code", "play", "game"],
      parent: {
        name: "Hoa", 
        age: 32,
        hobby: ["code", "play", "game"],
      },
    },
  };
  
  
  // ---> obj = {
  //   name : "",
  //   age : 0,
  //   hobby : [],
  //   family : {
  //     name : "",
  //     age : 0,
  //     parent : {
  //       name : ""
  //     }
  //   }
  // }

const resetForm = (obj: object): object => {
    const emptyObject = {} 
        for (const [key, value] of Object.entries(obj)) {
            if(typeof value === 'object' && !Array.isArray(value) && value !== null) {
                emptyObject[key] = resetForm(value)
            }
            else if (typeof value === 'string' ) emptyObject[key] = ''
            else if (typeof value === 'number' ) emptyObject[key] = 0
            else if (Array.isArray(value)) emptyObject[key] = []
            else throw new Error('unknow type')
        }                 
    return emptyObject
}
console.log(resetForm(obj));