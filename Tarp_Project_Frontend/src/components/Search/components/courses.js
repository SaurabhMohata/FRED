const courses = [
  {
    key: 1,
    status: 1,
    reputation: 0,
    category: "Web Development",
    name: "The Complete 2021 Web Development Course",
    date: "Nov 2020",
    upvotes: 123,
    courseURL:
      "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    desc:
      "The Web Developer Bootcamp, Udemy's most popular web development course.  This course was just completely overhauled to prepare students for the 2021 job market, with over 60 hours of brand new content.",
    imgURL:
      "https://img-c.udemycdn.com/course/240x135/2776760_f176_5.jpg?Expires=1622242190&Signature=FWy0MjaZO29mRQuMSu7ucxh2x0sa88yYEHRBMT0xp0b-Mk~-E6u~XrA~-8j2CI0ENDWrARqasiwT33kf~XAp~tKke2wvYvsA8UsKXJb9CorI2Vnq39Hz1oCXmIC5cv8ylq03J4IHOBmfCrBtls99PTb5SW~m~rfvMM44W4cJxFdprbGaYNbuoG1oHSBgOBLj-iREKECaopv4jVqa50vIM1ZZGPuEgRL6RRfxhiuK~ws8c9dzotoO06A8qYSmXuI4O86MtfKFANjkx6Rx~xyXsIu5Jj2vBXuvStWUlC7i5NFzzvJzGrTEjl9ypIocqp8PVFkkCF8orGZPpEKC3JtteA__&Key-Pair-Id=APKAITJV77WS5ZT7262A"
  },
  {
    key: 2,
    upvotes: 123,
    status: 0,
    reputation: 0,
    category: "Network and Security",
    name: "Learn Ethical Hacking From Scratch",
    date: "May 2021",
    courseURL:
      "https://www.udemy.com/course/learn-ethical-hacking-from-scratch/",
    desc:
      "This course assumes you have NO prior knowledge and by the end of it you'll be able to hack systems like black-hat hackers and secure them like security experts!",
    imgURL:
      "https://img-c.udemycdn.com/course/240x135/857010_8239_2.jpg?Expires=1622242154&Signature=mDhCbjrE~7aisXMTkZUkusvlnFd9GJ-CDs3a01A9fX5kCyvScQMdDqM2e59WKZeMsv2XZ7vP3IBSK5~pkfL14FkXG-hnyH-aRsHqvOquBSCH-4UeSN79rlUj7IOVxDl-LEHQJUDG1gLqWDbI4ffMVSCHwSGMk3ZrjnHmSYYEADxkshO8iob3pM8C-FDmw26fvkBh~AZcIQVYSLJi4mcSvCpdw5X~lMTTtmtqX12XTrLL8reR1tK94ixsCHKVbkDHQLFK5m~664OPvIXm2O6bE51UbicVhplcsQd0tRqPFukHts8GrXEoX~8J7UwGozAVtw1WYb8QSSxQtlOyRqbw0A__&Key-Pair-Id=APKAITJV77WS5ZT7262A"
  },
  {
    key: 3,
    upvotes: 123,
    status: 1,
    reputation: 0,
    category: "Programming Languages",
    name: "100 Days of Code - The Complete Python Pro Bootcamp for 2021",
    date: "Feb 2021",
    courseURL: "https://www.udemy.com/course/100-days-of-code/",
    desc:
      "This Python course is without a doubt the most comprehensive Python course available anywhere online. Even if you have zero programming experience, this course will take you from beginner to professional.",
    imgURL:
      "https://img-c.udemycdn.com/course/240x135/1565838_e54e_12.jpg?Expires=1622185839&Signature=NKk~J5s98EvS7JitdACcAjFExkYCVOgp6Jfg2Lfpv7dPq~eZI07PU5l2YSndWD5A94fc5MdlpOklGkNt7TigkBAAbWop4XGN~QlbfwpXlWmvRFBk8MnLYvDanQuYQn3yH8dXNb6r4Esh0wrrsYoOzmjaAb5QLaO1YVBSVYfV7p-FQdkV1UHn9ONcjtvHR7dOUloNHIJ-d~qPRWEmSfzhc8LkvcS5387~S9KYafNlQRCTtg7dzCQ2ph59cO1D32Mp2PSZ9vGGfjZNhFYdV0cvX56XHaONKPJXHaTYhehhqUVSKA6Ctr6y35Cry7Gq7F2md-ty1q8iu43unIBJ45Vkwg__&Key-Pair-Id=APKAITJV77WS5ZT7262A"
  },
  {
    key: 4,
    upvotes: 123,
    status: 0,
    reputation: 0,
    category: "Programming Basics",
    name: "CS50",
    date: "April 2021",
    courseURL:
      "https://online-learning.harvard.edu/course/cs50-introduction-computer-science?delta=0",
    desc:
      "CS50 is an on-campus and online introductory course on computer science taught at Harvard University and Yale University. In 2016, CS50 became available to high school students as an AP course. ",
    imgURL:
      "https://online-learning.harvard.edu/sites/default/files/styles/social_share/public/course/cs50x-original.jpg?itok=kR_JV8DW"
  }
];

// status === 0, implies unapproved courses

export default courses;
