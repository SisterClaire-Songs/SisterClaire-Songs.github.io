<template>
<div>
    <h2>이 사이트는?</h2>
    수녀님이 방송에서 불렀던 곡을 듣고싶어졌을 때,<br>
    「어떤 방송에서 그 곡을 불렀더라…?」했던 때가 계기가 되어서 만든 사이트입니다.<br>
    모든 방송을 직접 확인해서 추가한 것은 아니기 때문에, 빠진 노래가 있으면<br>
    트위터(<a :href="twitterURL" target="_blank">@Cella315</a>) 또는
    구글 폼(<a :href="googleMailFormURL" target="_blank">폼 링크</a>)
    으로 알려주시면 감사하겠습니다!<br>
    <br>
    틀린 데이터도 가르쳐 주시면 감사하겠습니다!<br>
    우선적으로 기능만을 생각해서 만들었기 때문에, 디자인은 추후 조금씩 고쳐나갈 예정입니다.<br>
    사이트의 코드는 <a :href="githubURL" target="_blank">{{githubURL}}</a>에 공개되어 있습니다.<br>
    혹시 다른 분의 사이트를 만들 때 쓰신다면, 트위터 등으로 한 마디 부탁드립니다.<br>
    다른 이유때문이 아니라, 어떻게 더 개선할 수 있을지 참고가 하고 싶어서입니다...
</div>
</template>

<script>
export default {
  name: 'AboutKR',
  data() {
    return {
      twitterURL: "https://twitter.com/Cella315",
      googleMailFormURL: "https://docs.google.com/forms/d/e/1FAIpQLSdRXwt6_MB2lUkA6TJAAZRN5wLeR6vl9ccVXho7eFoGrfvwEQ/viewform?usp=sf_link",
      githubURL: "https://github.com/SisterClaire-Songs/SisterClaire-Songs.github.io"
    };
  },
  components: {}
}
</script>
