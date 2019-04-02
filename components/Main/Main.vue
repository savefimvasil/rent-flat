<template>
    <div class="post-header">
      <div class="container">
        <div class="container-info">
          <h1>{{ $t('index.title') }}</h1>
          <h2>{{ $t('index.subTitle') }}</h2>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Main" ,
      methods: {
      }
    }
</script>

<style lang="scss" scoped>
  $trolleyGray: #7C7C7C;
  $roseTaupe: #8B635C;
  $ghostWhite: #F7F9F9;

  .post-header{
    background: url("../../assets/index/bg.jpg") no-repeat center center fixed;
    background-size: cover;
    height: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
    div.container{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .container-info{
        max-width: 40%;
        float: left;
        background: rgba(124, 124, 124, .8);
        padding: 50px 30px;
        h1{
          font-size: 25px;
          line-height: 40px;
          padding-bottom: 10px;
          color: $ghostWhite;
          text-transform: uppercase;
          font-weight: 700;
        }
        h2{
          font-size: 20px;
          line-height: 25px;
          color: $ghostWhite;
          font-weight: 700;
        }
      }
    }
  }
  @media (max-width: 1200px) {
    .post-header{
      .darken{
        h1{
          font-size: 20px;
          line-height: 20px;
        }
      }
    }
  }
  @media (max-width: 992px) {
    .post-header{
      .darken{
        h1{
          font-size: 16px;
          line-height: 20px;
        }
        button{
          font-size: 20px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .post-header{
      .darken{
        h1{
          font-size: 18px;
        }
        button{
          font-size: 20px;
        }
      }
    }
  }
  @media (max-width: 576px) {
    .post-header{
      .darken{
        h1{
          font-size: 14px;
        }
        button{
          font-size: 20px;
        }
      }
    }
  }
</style>
