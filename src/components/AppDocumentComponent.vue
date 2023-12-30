<template>
  <section>
    <h4>Document</h4>
    <div class="savedoc">
      <div class="input">
        <div>
          <span class="title">Number of Videos</span>
          <div class="select-group">
            <select name="" id="">
              <option value=""><img src="../assets/icons8-usa-48.png" alt="Icon" /> 1</option>
            </select>
            <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
          </div>
        </div>
      </div>
      <div>
        <button>Change</button>
      </div>
    </div>
    <div class="publish">
      <div class="card">
        <h4>Publish to Wordpress</h4>
        <div class="card-body">
          <div class="left">
            <span class="title">Number of Videos</span>
            <div class="select-group">
              <select name="" id="">
                <option value=""><img src="../assets/icons8-usa-48.png" alt="Icon" /> 1</option>
              </select>
              <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
            </div>
          </div>
          <div class="right">
            <h6>Important</h6>
            <p>
              if you enable this option, all generated documents will be published on the selected
              site. Be careful with the setting and publication date.
            </p>
          </div>
        </div>
      </div>
    </div>
    <h4>Language Model</h4>
    <div class="model">
      <div class="left">
        <span class="title">Number of Videos</span>
        <div class="select-group">
          <select name="" id="">
            <option value=""><img src="../assets/icons8-usa-48.png" alt="Icon" /> 1</option>
          </select>
          <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
        </div>
      </div>
      <div class="right">
        <p>
          For optimal results, we use a mix of different models including BPT 3.5, GPT 3.5 Turbo
          16k, and GPT4 8l. ensuring the best quality.
        </p>
      </div>
    </div>
    <div class="model">
      <div class="left" >
        <span class="title">Number of Videos</span>
        <div class="select-group">
          <select name="" id="">
            <option value=""><img src="../assets/icons8-usa-48.png" alt="Icon" /> 1</option>
          </select>
          <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
        </div>
      </div>
      <div class="right">
        <p>
          You can connect you api key if you have used up our words and still have unspent Article
          Generation limits.
        </p>
      </div>
    </div>
    <div class="write">
      <button>
        <span><font-awesome-icon :icon="['fas', 'fa-pen-clip']" /></span> Write
      </button>
    </div>
  </section>
</template>


<style lang="less" scoped>
@import '../assets/base.less';
section {
    margin: 2.5rem 0;
    .savedoc {
        display:flex;
        margin: 1rem 0;
        gap:1.2rem;

        .input {
            width: 13rem;
        }

        .input + div {
            button {
                margin-top: 1.6rem;
                height: 2.4rem; 
                display:flex;
                align-items: center; 
            }
            
        }

    }

    .publish {
        margin: 1rem 0;
        .card {
            padding: 1rem;
            .card-body {
                margin-top:1rem;
                display:flex;
                gap:2rem;

                .left {
                    width:13rem;
                }

                .right {
                  h6 {
                    font-size:12px;

                  }
                    p {
                        width:36rem;
                        font-size:12px;
                    }
                }

            }
        }
    }

    .model {
        margin-top:1rem;
        display:flex;
        gap:2rem;

        .left {
            width:20rem;
        }

        .right {
          padding-top: 1.5rem ;
            p {
              
                width:37rem;
                font-size:12px;
            }
        }
    }

    .write {
      button {
        float: right;
        width: 16rem;
        height:1.9rem;
        display: flex;
        align-items:center;
        justify-content: center;
        gap:0.6rem;

      }
    }

    .select-group {
    .select-group(100%,2.3rem);
    border: solid 0.1px rgb(210, 209, 209);
  }

   button {
      border: none;
      background-color: @primary;
      padding: 1rem;
      border-radius: @bradius;
      color: white;
    }

  .title {
    .title();
    color: black;
    padding: 0rem 0 0.3rem 0;
  }
}
</style>