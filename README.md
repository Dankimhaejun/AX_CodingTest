# AX_CodingTest

Test code with AX

1. HackerNews(https://news.ycombinator.com/) 에 있는 글 목록을 가져와 출력하는 프로그램을 작성하세요.
2. 웹 크롤링 경험이 없다면 구체적으로 어떤 과정을 거쳐 어떤 값을 이용하면 원하는 결과를 얻을 수 있을지 서술해주세요.

글 목록은 원 글과 동일한 순서여야 합니다.
글 목록은 제목과 원글 링크가 있어야 합니다.

1. getElement 를 통한 tbody의 전체 내용을 배열형태로 가져온다.
2. 하나의 글 내용이 class="athing"에 속해 있다.

- 핵심은 글 제목과 원글 링크이므로 배열을 순차적으로 돌아서
- class="rank" 에서 순서를 가져오고
- class="title" 내의 a href 링크에서 링크를 크롤링하고, value(제목) 을 크롤링하여 하나의 객체로 만드는 함수를 작성한다.
  [
  {
  rank : 1,
  link : 'https://mystery.knightlab.com/',
  title : 'SQL Murder Mystery'
  },
  {
  rank : 2,
  link : 'https......',
  title : 'SQL ....'
  },
  ......
  ]

  크롤링이라면 tbody를 전체 배열로 가져와서 각 class="athing"인 인자들을 순차적으로 돌아 원하는 값을 가져올 것 같습니다.
