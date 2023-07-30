// const seededRandom = function (seed) {
//     var m = 2**35 - 31;
//     var a = 185852;
//     var s = seed % m;
//     return function () {
//         return (s = s * a % m) / m;
//     };
// }

// export function fetchAPI(date) {
//     let result = [];
//     let random = seededRandom(date.getDate());

//     for(let i = 17; i <= 23; i++) {
//         if(random() < 0.5) {
//             result.push(i + ':00');
//         }
//         if(random() < 0.5) {
//             result.push(i + ':30');
//         }
//     }
//     return result;
// };
// export function submitAPI(formData) {
//     return true;
// };


const seededRandom = seed => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
  
    return () => (s = s * a % m) / m;
  };
  
  const fetchAPI = date => {
    let result = [];
    let random = seededRandom(date.getDate());
  
    for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) result.push(i + ':00');
      if(random() < 0.5) result.push(i + ':30');
    }
  
    return result;
  };
  
  const submitAPI = formData => true;
  
  export {
    fetchAPI,
    submitAPI
  };
// const seededRandom = (seed: number) => {
//     const m = 2 ** 35 - 31;
//     const a = 185852;
//     let s = seed % m;
//     return function () {
//       return (s = (s * a) % m) / m;
//     };
//   };
  
//   export const fetchAPI = (date: Date): Array<string> => {
//     const result = [];
//     const random = seededRandom(date.getDate());
  
//     for (let i = 17; i <= 23; i++) {
//       if (random() < 0.5) {
//         result.push(i + ":00");
//       };
//       if (random() < 0.5) {
//         result.push(i + ":30");
//       };
//     };
//     return result;
//   };
  
//   export const submitAPI = (formData: { date: string, time: string, guests: number, occasion: string }): boolean => {
//     if (!true) console.log(formData);
//     return true;
//   };
  
//   export const updateTimes = (state: any, action: any) => {
//     switch (action.type) {
//       case "UPDATE_TIMES":
//         return { ...state, times: fetchAPI(action.date) };
//       default:
//         return state;
//     };
//   };
  
//   export const initializeTimes = () => {
//     // create a Date object to represent today's date
//     const today = new Date();
//     return { times: fetchAPI(today) };
//   };