<template>
  <div class="Footer">
    <div class="footer container">
      <div>
        <p>Copyright 2018-2019 | Весь контент защищен авторским правом </p>
      </div>
      <div class="footer--follow-us">
        <div>
          <a href="" class="facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="" class="twitter"><i class="fab fa-twitter"></i></a>
          <a href="" class="google-plus"><i class="fab fa-google-plus-g"></i></a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="scss" scoped>
  $trolleyGray: #7C7C7C;
  $roseTaupe: #8B635C;
  $ghostWhite: #F7F9F9;

  h3, a, li{
    color: $ghostWhite;
  }
  h3{
    margin-bottom: 15px;
    font-size: 20px;
  }
  i{
    margin: 0 8px 0 0;
  }
  .Footer{
    background: $trolleyGray;
    color: $ghostWhite;
    padding: 10px 0 0 0;
    margin-top: 50px;
    .footer{
      display: flex;
      justify-content: space-between;
      &--get-started {
        ul {
          list-style: none;
          padding: 0 0 0 10px;
          li {
            a {
              color: white;
              text-decoration: none;
              font-size: 14px;
              line-height: 25px;
            }
          }
        }
      }
      &--follow-us{
        div{
          display: flex;
          a{
            display: flex;
            align-items: center;
            text-decoration: none;
            margin-right: 8px;
            width: 30px;
            height: 30px;
            color: white;
            border-radius: 2px;
            i{
              margin: 0 auto;
            }
            &.facebook{
              background: #415997;
            }
            &.twitter{
              background: #7aa9e9;
            }
            &.google-plus{
              background: #d44d3f;
            }
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    .Footer{
      .footer{
        flex-direction: column;
        &--get-started {
          padding: 10px 0;
        }
        &--follow-us{
          padding: 10px 0;
        }
        &--our-contacts{
          padding: 10px 0;
        }
      }
    }
  }
</style>
