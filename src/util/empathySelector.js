export const getEmpathyColor = (empathyCnt) => {
    if(empathyCnt > 50) {
        return "red";
    } else if(empathyCnt > 20) {
        return "orange";
    }
  };