import {ATTENDANCE_MESSAGE} from "@/constants/attendanceMessage";

export const getAttendanceMessage = () => {
    const random = Math.floor(Math.random() * ATTENDANCE_MESSAGE.length);
    return ATTENDANCE_MESSAGE[random];
};