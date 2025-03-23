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
      label: "전체게시글",
      path: "/new",
    },
    {
      label: "인기글",
      icon: popularity,
      path: "/popular",
    },
    {
      label: "출석",
      icon: attendance,
      path: "/attendance",
    },
    {
      label: "유리 갤러리",
      icon: gallery,
      path: "/gallery",
    },
    {
      label: "NOTICE",
      icon: notification,
      children: [
        { label: "공지사항", icon: notificationAnnouncement, path: "/notification/announcement" },
        { label: "이벤트", icon: notificationEvent, path: "/notification/event" },
        { label: "캘린더", icon: notificationCalendar, path: "/notification/calendar" },
        { label: "투표", icon: notificationPoll, path: "/notification/poll" },
      ],
    },
    {
      label: "모래 이야기",
      icon: sand,
      children: [
        { label: "자유게시판", path: "/morae/free" },
        { label: "질문게시판", path: "/morae/qna" },
        { label: "내가 그린 유리", path: "/morae/art" },
        { label: "내가 부른 유리", path: "/morae/cover" },
        { label: "To. 유리", path: "/morae/letter" },
      ],
    },
    {
      label: "유리 이야기",
      icon: yuree,
      children: [
        { label: "내가 좋아하는 유리 노래", icon: yureeSong, path: "/yuri/favorite-songs" },
        { label: "미발매곡 가사 탐구", icon: yureeLyrics, path: "/yuri/unreleased-lyrics" },
        { label: "콘서트 후기", icon: yureeConcert, path: "/yuri/concert-review" },
        { label: "굿즈 후기", icon: yureeGoods, path: "/yuri/goods-review" },
      ],
    },
    {
      label: "커뮤니티 이야기",
      icon: community,
      children: [
        { label: "건의하기", path: "/community/suggestion" },
        { label: "신고하기", path: "/community/complaint" },
        { label: "운영자 신청", path: "/community/manager-apply" },
      ],
    },
  ];