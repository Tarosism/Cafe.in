"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("posts", [
      {
        id: "1",
        title_img: "http://placeimg.com/300/300/animals",
        content_img: "http://placeimg.com/300/300/animals",
        content: "꿈과 모험이 가득한 신나는 카페",
        title: "젊은 베르테르의 슬픔",
        location: "대구",
        lat: 38.155,
        long: 123.5488,
      },
      {
        id: "2",
        title_img: "http://placeimg.com/300/300/arch",
        content_img: "http://placeimg.com/300/300/arch",
        content: "작업하기 좋은 카페입니다",
        title: "헌팅cafe ebiza",
        location: "오사카",
        lat: 38.155,
        long: 123.5488,
      },
      {
        id: "3",
        title_img: "http://placeimg.com/300/300/nature",
        content_img: "http://placeimg.com/300/300/nature",
        content: "콘센트 多, 1인석 多, 시간제한 無",
        title: "작업하기 좋은 날",
        location: "대전에 있으면 좋겠당",
        lat: 38.155,
        long: 123.5488,
      },
      {
        id: "4",
        title_img: "http://placeimg.com/300/300/people",
        content_img: "http://placeimg.com/300/300/people",
        content: "저희 업소는 대마초를 판매하지 않습니다",
        title: "cafe weed",
        location: "LA",
        lat: 38.155,
        long: 123.5488,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posts", null, {});
  },
};
