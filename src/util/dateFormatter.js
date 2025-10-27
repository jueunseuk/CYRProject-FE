export const formatDate = (dateString, formatType = 1) => {
    if (!dateString) return "";
  
    const date = new Date(dateString);
    const now = new Date();
  
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    const hour = `${date.getHours()}`.padStart(2, "0");
    const minute = `${date.getMinutes()}`.padStart(2, "0");
    const second = `${date.getSeconds()}`.padStart(2, "0");

    const isToday =
      date.getFullYear() === now.getFullYear() &&
      date.getMonth() === now.getMonth() &&
      date.getDate() === now.getDate();

    const isThisYear = date.getFullYear() === now.getFullYear();
  
    switch (formatType) {
      case 1:
        return `${year}년 ${month}월 ${day}일`;
      case 2:
        return `${year}.${month}.${day}`;
      case 3:
        if(isToday) return `${hour}:${minute}`;
        else if(isThisYear) return `${month}.${day}`;
        else return `${year}.${month}.${day}`;
      case 4:
        return `${year}년 ${month}월 ${day}일 ${hour}:${minute}`;
      case 5:
        return `${year}.${month}.${day}`;
      case 6:
        return `${hour}:${minute}:${second}`;
      case 7:
        return `${year}년 ${month}월 ${day}일 ${hour}:${minute}:${second}`;
      case 8:
        return `${hour}:${minute}`;
      default:
        return dateString;
    }
};

export const toJavaLocalDateTime = (date = new Date()) => {
  const offsetMs = date.getTimezoneOffset() * 60 * 1000;
  const localDate = new Date(date.getTime() - offsetMs);

  const pad = (n) => n.toString().padStart(2, "0");

  return `${localDate.getFullYear()}-${pad(localDate.getMonth() + 1)}-${pad(localDate.getDate())}T${pad(localDate.getHours())}:${pad(localDate.getMinutes())}:${pad(localDate.getSeconds())}`;
};