export class TimeService {


  getTime() {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    const hour = (today.getHours() < 10 ? '0' : '') + today.getHours();
    const seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
    const time = hour + ':' + minutes + ':' + seconds;
    return date + 'T' + time + 'Z';
    // return getTimestamp(date + 'T' + time);
  }

  convertToTimestamp(date: string) {
    return Date.parse(date);
  }

}
