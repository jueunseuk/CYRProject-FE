export const formatDate = (dateString, formatType = 1) => {
    if (!dateString) return "";
  
    const date = new Date(dateString);
  
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    const hour = `${date.getHours()}`.padStart(2, "0");
    const minute = `${date.getMinutes()}`.padStart(2, "0");
  
    switch (formatType) {
      case 1:
        return `${year}년 ${month}월 ${day}일`;
      case 2:
        return `${year}.${month}.${day}`;
      case 3:
        return `${month}.${day}`;
      case 4:
        return `${year}년 ${month}월 ${day}일 ${hour}:${minute}`;
      default:
        return dateString;
    }
};
