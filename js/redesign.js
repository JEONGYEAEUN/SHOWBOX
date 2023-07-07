$(document).ready(function () {

  let count = 0;

  $(".gnb>ul>li.onB").mouseover(function () {
    $("header").addClass("on")
  });
  $(".gnb>ul>li.onB").mouseout(function () {
    $("header").removeClass("on")
  });

  $(".nowContents li").mouseover(function () {
    $(this).addClass("on")
  });
  $(".nowContents li").mouseout(function () {
    $(this).removeClass("on")
  });


  // $(window).scroll(function () {
  //   let winTop = $(window).scrollTop()//스크롤바가 위에서 얼만큼 내려와있는지를 계산
  //   //윈도우스크롤이 400이상으로 내려가면 header태그의 스타일이 작은 스타일이 되고,
  //   //그렇지않다면 기본스타일이 젹용될 수 있도록
  //   if (winTop >= 400) {
  //     $("header").addClass("sma")
  //   } else {
  //     $("header").removeClass("sma")
  //   }
  // })

  // $(window).scroll(function () {
  //   let winst = $(window).scrollTop()
  //   if (winst > 1) {
  //     $("header").addClass("sma")
  //   } else {
  //     $("header").removeClass("sma")
  //   }
  // });

  $(function () {
    var prevScrollTop = 0;

    document.addEventListener("scroll", function () {

      var nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장

      if (nowScrollTop > prevScrollTop) { $('header').addClass('active'); }
      // 스크롤 방향(Down) 내릴때 -> 헤더에 active 클래스 추가
      else { $('header').removeClass('active'); } // 스크롤 방향(Up) 올릴때 -> 헤더에 active 클래스 제거
      prevScrollTop = nowScrollTop;  // prevScroll, nowScrollTop 조건 판단 후, 현재 스크롤값을 prevScrollTop 에 저장

    });

  });

  $(window).scroll(function () {
    //스크롤바가 움직일 때마다 실행되는 소스코드
    let winTop = $(window).scrollTop()//스크롤바가 위에서 얼만큼 내려와있는지를 계산
    //윈도우스크롤이 400이상으로 내려가면 header태그의 스타일이 작은 스타일이 되고,
    //그렇지않다면 기본스타일이 젹용될 수 있도록
    if (winTop >= 10) {
      $("header").css("background", "black")
      $("header img.hLogo").attr("src", "./img/SVG/showboxColorlogo.svg")
    } else {
      $("header").css("background", "transparent")
      $("header img.hLogo").attr("src", "./img/SVG/showbox_logo.svg")
    }
  })


  $(".langList").click(function () {
    if ($(".langList>ul").hasClass("on") == false) {
      //메뉴가 닫혀있는 상태 -> 여는 기능
      $(".langList>ul").addClass("on")

    } else {
      //메뉴가 열려있는 상태 -> 메뉴를 닫는 기능
      $(".langList>ul").removeClass("on")

    }
  });

  $(".familysite").click(function () {
    if ($(".familysite>ul").hasClass("on") == false) {
      //메뉴가 닫혀있는 상태 -> 여는 기능
      $(".familysite>ul").addClass("on")

    } else {
      //메뉴가 열려있는 상태 -> 메뉴를 닫는 기능
      $(".familysite>ul").removeClass("on")

    }
  });

  // const zoomElement = document.querySelector(".ad");
  // let zoom = 1;
  // const ZOOM_SPEED = 0.1;

  // document.addEventListener("wheel", function (e) {
  //   if (e.deltaY > 0) {
  //     zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
  //   } else {
  //     zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
  //   }
  // });



  let leftSliderTextArray = [
    `<div class="sTop">
              <h4>태극기 휘날리며</h4>
              <p class="about5">전쟁, 드라마, 액션 | 강제규 | 2004.02.05</p>
              <p class="con5">가족의 생계를 책임지기 위해 열심히 살아가는 ‘진태’는<br>
                약혼녀 ‘영신’과의 결혼과, 세상에서 가장 소중하게 생각<br>
                하는 동생 ‘진석’의 대학진학을 위해 어려운 상황에서도<br>
                씩씩하게 생활을 해나간다. 1950년 6월의 어느 날,<br>
                한반도에 전쟁이 일어났다는 호회가 배포되고, 두 형제는<br>
                평온한 일상에서 갑작스레 전쟁터로 내몰린다. 훈련받을<br>
                시간조차 없이 국군 최후의 보루인 낙동강 방어선으로<br>
                실전 투입된 ‘진태’와 ‘진석’. 끝내 생각지도 못한 운명의<br>
                덫이 두 형제를 기다리고 있는데…</p>

              <a href="#" class="moreview">자세히 보기</a>
            </div>`,
    `<div class="sTop">
            <h4>괴물</h4>
            <p class="about5">스릴러, 가족, SF | 봉준호 | 2006.07.27</p>
            <p class="con5">
              평화로운 한강 둔치 아버지가 운영하는 한강매점,<br>
              늘어지게 낮잠 자던 '강두'는 배달을 나갔다가 우연히<br>
              특이한 광경을 목격하게 된다. 생전 보도 못한 무언가가<br>
              한강다리에 매달려 움직이는 것이다. 그러나 그것도 잠시<br>
              정체를 알 수 없는 괴물은 둔치 위로 올라와 사람들을<br>
              거침없이 깔아뭉개고, 무차별로 물어뜯기 시작한다.<br>
              순식간에 아수라장으로 돌변하는 한강변.<br>
              '강두'도 뒤늦게 딸 '현서'를 데리고 도망가지만,<br>
              꼭 잡았던 딸의 손을 놓치고 만다. 갑작스런 괴물의<br>
              출현으로 하루아침에 집과 생계, 그리고 '현서'까지<br>
              모든 것을 잃게 된 강두 가족...<br>
              돈도 없고 빽도 없는 그들은 위험구역으로 선포된<br>
              한강 어딘가에 있을 '현서'를 찾아 나선다.
            </p>

            <a href="#" class="moreview">자세히 보기</a>
          </div>`,
    `<div class="sTop">
            <h4>도둑들</h4>
            <p class="about5">범죄, 액션, 드라마 | 최동훈 | 2012.07.25</p>
            <p class="con5">10인의 도둑, 1개의 다이아몬드 그들이 움직이기 시작했다!<br>
              한 팀으로 활동 중인 한국의 도둑 '뽀빠이'와 '예니콜',<br>
              '씹던껌', '잠파노'. 계획에 멋지게 성공한 이들은 '뽀빠이'의<br>
              과거 파트너였던 '마카오박'이 제안한 계획을 듣게 된다.<br>
              여기에 '마카오박'이 초대하지 않은 손님, '팹시'가 합류하고<br>
              5명은 각자 인생 최고의 반전을 꿈꾸며 홍콩으로 향한다.<br>
              한국과 중국, 최고의 전문가들이 세팅된 가운데 팽팽한<br>
              긴장감 속에 나타난 '마카오박'은 자신이 계획한 목표물을<br>
              밝힌다. 그것은 마카오 카지노에 숨겨진 희대의 다이아몬드<br>
              '태양의 눈물'. 성공을 장담할 수 없는 위험천만한 계획이지만<br>
              달콤한 제안을 거부할 수 없는 이들은 태양의 눈물을 훔치기<br>
              위한 작업에 착수한다. 훔치기 위해 모였지만 목적은 서로<br>
              다른 도둑들은 서서히 자신만의 플랜을 세우기 시작하는데…</p>

              <a href="#" class="moreview">자세히 보기</a>
          </div>`,
    `<div class="sTop">
            <h4>암살</h4>
            <p class="about5">액션, 드라마 | 최동훈 | 2015.07.22</p>
            <p class="con5">1933년 조국이 사라진 시대<br>
              대한민국 임시정부는 일본 측에 노출되지 않은 세 명을<br>
              암살작전에 지목한다. 한국 독립군 저격수 '안옥윤',<br>
              신흥무관학교 출신 속사포, 폭탄 전문가 '황덕삼'!<br>
              '김구'의 두터운 신임을 받는 임시정부 경무국 대장<br>
              '염석진'은 이들을 찾아 나서기 시작한다. 암살단의 타깃은<br>
              조선주둔군 사령관 '카와구치 마모루'와 친일파 '강인국'.<br>
              한편, 누군가에게 거액의 의뢰를 받은 청부살인업자<br>
              '하와이 피스톨'이 암살단의 뒤를 쫓는데...<br>
              친일파 암살작전을 둘러싼 이들의 예측할 수 없는<br>
              운명이 펼쳐진다!</p>

              <a href="#" class="moreview">자세히 보기</a>
          </div>`,
    `<div class="sTop">
            <h4>택시운전사</h4>
            <p class="about5">드라마 | 장훈 | 2017.08.02</p>
            <p class="con5">1980년 5월, 서울 택시운전사.<br>
              “광주? 돈 워리, 돈 워리! 아이 베스트 드라이버”<br>
              택시운전사 '만섭'은 외국손님을 태우고 광주에 갔다<br>
              통금 전에 돌아오면 밀린 월세를 갚을 수 있는 거금<br>
              10만원을 준다는 말에 독일기자 '피터'를 태우고<br>
              영문도 모른 채 길을 나선다. 광주 그리고 사람들.<br>
              “모르겄어라, 우덜도 우덜한테 와 그라는지…”<br>
              어떻게든 택시비를 받아야 하는 '만섭'의 기지로<br>
              검문을 뚫고 겨우 들어선 광주. 위험하니 서울로<br>
              돌아가자는 '만섭'의 만류에도 '피터'는 대학생 '재식'과<br>
              '황기사'의 도움 속에 촬영을 시작한다. 그러나 상황은<br>
              점점 심각해지고 '만섭'은 집에 혼자 있을 딸 걱정에<br>
              점점 초조해지는데…</p>

              <a href="#" class="moreview">자세히 보기</a>
          </div>`

  ]
  let slider = new Swiper(".station_top5right", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    on: {
      slideChange: function () {
        console.log(slider.realIndex);
        $(".numPlate").text("0" + (slider.realIndex + 1))
        $(".top5leftIn").html(leftSliderTextArray[slider.realIndex])
      }
    }
  })

  $("a.btnNext").click(function (e) {
    count++
    e.preventDefault()
    //기차가 왼쪽으로 500px
    if (count > 5) { count = 0 } //0은 처음으로 돌아가게 하는 기능
    moveSlider(count)
  })

  $("a.btnPrev").click(function (e) {
    e.preventDefault()
    count--
    if (count < 0) { count = 5 }
    moveSlider(count)
  })

  // ad 광고배너 스크롤

  $(window).scroll(function () {
    let startLine = $(window).height() * 0.6
    let winscroll = $(window).scrollTop()
    let targetTop = $(".bannFrame").offset().top
    if (winscroll + startLine >= targetTop && (winscroll + startLine - targetTop) < 200) {
      console.log(winscroll + startLine - targetTop)
      let percent = winscroll + startLine - targetTop
      $(".bannFrame").css("width", (30 + percent) + "%")
    }
  })

})

