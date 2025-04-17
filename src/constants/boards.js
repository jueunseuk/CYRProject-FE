import attendance from "@/assets/icon/board/attendance.svg";
import community from "@/assets/icon/board/community.svg";
import gallery from "@/assets/icon/board/gallery.svg";
import notification from "@/assets/icon/board/notification.svg";
import popularity from "@/assets/icon/board/popularity.svg";
import sand from "@/assets/icon/board/sand.svg";
import yuree from "@/assets/icon/board/yuree.svg";
import notificationAnnouncement from "@/assets/icon/board_sub/notification_announcement.svg";
import notificationCalendar from "@/assets/icon/board_sub/notification_calendar.svg";
import notificationEvent from "@/assets/icon/board_sub/notification_event.svg";
import notificationPoll from "@/assets/icon/board_sub/notification_poll.svg";
import yureeConcert from "@/assets/icon/board_sub/yuree_concert.svg";
import yureeGoods from "@/assets/icon/board_sub/yuree_goods.svg";
import yureeLyrics from "@/assets/icon/board_sub/yuree_lyrics.svg";
import yureeSong from "@/assets/icon/board_sub/yuree_song.svg";

export const BOARDS = [
    {
      id: 1,
      label: "전체게시글",
      path: "new",
    },
    {
      id: "2",
      label: "인기글",
      icon: popularity,
      path: "popular",
    },
    {
      id: "3",
      label: "출석",
      icon: attendance,
      path: "attendance",
    },
    {
      id: "4",
      label: "유리 갤러리",
      icon: gallery,
      path: "gallery",
    },
    {
      label: "NOTICE",
      icon: notification,
      children: [
        { id: "5", label: "공지사항", icon: notificationAnnouncement, path: "announcement" },
        { id: "6", label: "이벤트", icon: notificationEvent, path: "event" },
        { id: "7", label: "캘린더", icon: notificationCalendar, path: "calendar" },
        { id: "8", label: "투표", icon: notificationPoll, path: "poll" },
      ],
    },
    {
      label: "모래 이야기",
      icon: sand,
      children: [
        { id: 9, label: "자유게시판", path: "free" },
        { id: "10", label: "질문게시판", path: "qna" },
        { id: "11", label: "내가 그린 유리", path: "art" },
        { id: "12", label: "내가 부른 유리", path: "cover" },
        { id: "13", label: "To. 유리", path: "letter" },
      ],
    },
    {
      label: "유리 이야기",
      icon: yuree,
      children: [
        { id: "14", label: "내가 좋아하는 유리 노래", icon: yureeSong, path: "favorite" },
        { id: "15", label: "미발매곡 가사 탐구", icon: yureeLyrics, path: "unreleased" },
        { id: "16", label: "콘서트 후기", icon: yureeConcert, path: "concert" },
        { id: "17", label: "굿즈 후기", icon: yureeGoods, path: "goods" },
      ],
    },
    {
      label: "커뮤니티 이야기",
      icon: community,
      children: [
        { id: "18", label: "건의하기", path: "suggestion" },
        { id: "19", label: "신고하기", path: "complaint" },
        { id: "20", label: "운영자 신청", path: "apply" },
      ],
    },
  ];