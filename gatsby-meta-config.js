module.exports = {
  title: `github.com/Jinhyunly`,
  description: `나의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://github.com/Jinhyunly`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `zoomkoding/zoomkoding-gatsby-blog`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'UA-134826755-2', // Google Analytics Tracking ID
  author: {
    name: `이진현`,
    bio: {
      role: `개발자`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'zoomkoding.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/jinhyunly`,
      linkedIn: `https://www.instagram.com/jinhyunly/`,
      email: `dbdbddipp@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2018.03 ~ 2018.12',
        activity: '멋쟁이사자처럼 6기 경성대 운영진',
      },
      {
        date: '2019.05 ~ 2022.03',
        activity: '株式会社 情創 SI부서 정사원',
        links: {
          post: 'http://johso.co.jp/',
        },
      },

      {
        date: '2021.08 ~ ',
        activity: '4flower workshop guide site 개발 유지보수',
        links: {
          post: 'https://4flower.site',
        },
      },
      // {
      //   date: '2019.12 ~ 2020.06',
      //   activity: '스타트업 인턴십 진행 & Picky 개발',
      //   links: {
      //     post: '/start-up-app-development',
      //     googlePlay: 'https://play.google.com/store/apps/',
      //     appStore: 'https://apps.apple.com/app/',
      //     github: 'https://github.com/',
      //   },
      // },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '4flower workshop guide site 개발',
        description:
          '4flower workshop guide site로 갤러리관리, 이메일 문의가 가능한 서비스입니다.',
        techStack: ['spring boot', 'java'],
        thumbnailUrl: '4flower.png',
        links: {
          post: 'https://4flower.site',
        },
      },
      // {
      //   title: 'Picky(글로벌 스킨케어 제품 분석 모바일 앱) 개발',
      //   description:
      //     '알고리즘을 공부하기 위해 휴학을 하고 있던 중에 실무를 경험해보고자 구글 출신 선배가 창업한 스타트업에서 인턴십을 진행하게 되었습니다. 제가 팀에 합류한 후 회사가 기존 진행하던 사업에서 앱 사업으로 피버팅을 하게 되었고, 저는 홀로 개발을 맡아 새로운 앱 프로젝트 참여하게 되었습니다. 모르는 것들을 공부하고 주변에 물어보면서 두 달 가까이 되는 기간동안 열심히 개발을 진행하여, Picky라는 글로벌 앱 서비스를 배포하게 되었습니다. 빠르게 배포한 후에 유저들의 피드백을 적극 수용하며 지속적으로 앱을 발전시켜 나갔고, 점차 서비스 이용자가 늘어가는 것을 경험했습니다. 그렇게 약 4개월 넘게 유지보수를 진행하던 중에 학업을 위해 팀을 떠나게 되었습니다. 더 오랜 기간 함께 하지 못해 아쉽지만 스타트업 서비스의 첫 시작부터 여러 서비스의 변곡점을 경험하면서 개발적으로도 많이 성장할 수 있었을 뿐만 아니라 서비스 성장을 직접 목격하면서 시야를 넓힐 수 있었던 매우 값진 시간이었습니다.',
      //   techStack: ['flutter', 'nodejs'],
      //   thumbnailUrl: 'picky.png',
      //   links: {
      //     post: '/start-up-app-development',
      //     googlePlay: 'https://play.google.com/store/apps/details?id=care.jivaka.picky',
      //     appStore: 'https://apps.apple.com/app/picky-skincare-made-smarter/id1504197356',
      //   },
      // },
      // {
      //   title: '개발 블로그 테마 개발',
      //   description:
      //     '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
      //   techStack: ['gatsby', 'react'],
      //   thumbnailUrl: 'blog.png',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //     demo: 'https://www.zoomkoding.com',
      //   },
      // },
      // {
      //   title: '대학시간(대학교 수강신청 보조 웹 앱) 개발',
      //   description:
      //     '학생들이 예비 수강 신청 과정에서 겪게 되는 불편함을 개선하고자 예비 수강 신청을 도와줄 수 있는 웹사이트를 만들게 되었습니다. 특히 학기가 시작되기 전 빈번하게 바뀌는 과목 정보들을 주기적으로 최신화하고 수강 신청을 시작한 후에는 수강 공석(이삭)을 발견하여 이를 이메일로 알려주는 서비스를 진행했습니다. 2021년 1학기부터 운영하고 있으며 매학기 1000명이 넘는 재학생이 사용하고 있습니다.',
      //   techStack: ['react', 'nodejs'],
      //   thumbnailUrl: 'timetable.png',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //     demo: 'https://www.zoomkoding.com',
      //   },
      // },
    ],
  },
};
