import {ATTENDANCE_MESSAGE} from "@/constants/attendanceMessgae";

export const getAttendanceMessage = () => {
    const random = Math.floor(Math.random() * ATTENDANCE_MESSAGE.length);
    return ATTENDANCE_MESSAGE[random];
};