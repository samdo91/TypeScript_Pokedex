1. 이 앱은 무엇인가?
 포켓몬 도감입니다
 포켓몬스터에 나오는 귀여운 몬스터들의 프로필을 얻을 수 있습니다. 
 mainPage에 포켓몬들이 띠부띠부씰 형식으로 나열되며 카드를 누르면 포켓몬의 디테일한 프로필을 볼 수 있는 Page로 넘어갑니다.

3. 무엇을 사용하였는가?
 소스 코드 에디터 
 - Visual Studio Code
 
 프로그래밍 언어 
 - react + TypeScript
 
 라이브러리 
 - @emotion/react
 - axios
 - react-intersection-observer
 - react-router-dom
 - jotai



3.어떻게 사용하였는가?


- Rest Api를 사용하는 법을 익히기 위해서
    이 페이지를 만들기 위해서 사용한 api는 https://pokeapi.co/에서 가져왔다. 
    
    api를 가져오기 위해서는 비동기처리해야 한다는 걸 알았다. (async & await를 사용한 function을 따로 만듬 이후axios로 변경 ) 
    
    미리 만든 api function을 사용하기 위해서는 useEffect를 사용하여 렌더링시 한번 불러오게 한다.
    
    단순히 불러오기 만하는 것만으로 내가 원하는 정보를 얻을 수 없다. 데이터를 추출하는 function을 만든다 (useEffect로 합침)
       이때 발생한 문제 Korean name을 찾을 수 없다. 
       = 해결 따로 Korean name 데이터를 가지고 있는 aip가 있었다. => 총 두 개의 api를 불러와서 필요한 데이터를 추출해주는 function을 만들자.(KoreanNameAbstraction 이후 pokeCard.tsx의 koreaNames로 변경)
    
    useState로 저장한다. => 이후 전역관리를 위해 context api로 교체



- infinite scroll의 사용법을 익히기 위해서 
    
    react-intersection-observer 라이브러리를 사용한다.(https://www.npmjs.com/package/react-intersection-observer)
    
    여기서 이전에 학습했으나 잊어버린 useRef를 다시 상기했다. (useRef로 관리하는 값은 값이 변해도 화면이 렌더링되지 않음)=? 왜 ref를 사용하는 지 찾아보기
    
    inView의 사용법을 알아야한다.
      Ref로 inView 값이 변하는 것으로 리랜더링을 막는다. 그리고 fokeInfiniteScroll의 값이 변할 때 실행되는 useEffect를 만들어낸다. 
      그렇다면 이제 fokeInfiniteScroll가 화면에 노출 될때마다 fokeInfiniteScroll의 값이 변할테고 useEffect가  실행되게 된다. 
    
    useEffect에 aip로 index 가져오고 값을 저장할 function을 만든다. (이후 ApiList로 통합했다.)

 
- context api를 효율적으로 사용하기 위해서 
    context api로 전역관리에 두가지 기능으로 쓰인다. 
    
      첫번째 api로 가져온 값을 사용하기 위해서 
         다음 인덱스를 가져오기 위해서
         detailPage에 사용하기 위해
    
      두번째 스프라이트를 변경하기 위해서
        스프라이트는 지금 보여지고 있는 포켓몬 그림의 종류를 말한다. 
        일괄적으로 (pokeBoard.tsx, pekeDetail.tsx) 모든 페이지에 쓰이는 그림의 종류를 변경한다. 
        그러기 위해서는 이미 만들어 놓은 context Api의 값을 변경하기만 하면 된다.
        
        
    사용 라이브러리
    - redux
    
     redux는 대중적으로 사용한다고 한다. 그러나 사용이 어려웠다. 
     
     
    - jotai
       

 이번에 새로 배운 것은  jotai로 아주 간단하다. 
 일단 jotai의 용법은 contextApi와 redux와 전혀 다르지 않다. 굉장히 간단하다. 가장 작은 단위인 atom을 지정하고 그것을 useState처럼 사용하면되는것이다.
 사용법의 거의 useState와 같으며 전역관리가 아주 쉽다. 
 앞으로도 jotai를 사용할 할 것 같다. 


4. 무엇을 배웠는가? 
