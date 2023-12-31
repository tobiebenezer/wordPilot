<template>
    <div class="card">
        <h4>Header Settings</h4>
        
        <div class="card-body">
            <div >
                <span class="title">
                    <span>Main Keyword <span class="title-required">*</span></span>
                    <span>60/80</span>
                </span>
                <div class="card-r">
                    <input type="text" placeholder="What do dermatologist prescribe for skin whitening?">
                    <button>Regenerate title</button>
                </div>
            </div>
            <div>
                <span class="title">
                    <span>Title <span class="title-required">*</span></span>
                    <span>66/100</span>
                </span>
                <input type="text">
            </div>
        </div>
        
    </div>

</template>


<style lang="less" scoped>

@import "../assets/base.less";
.card {
    padding:1rem 1.2rem;
    margin-top:2rem;
    .card-body{
        display:flex;
        flex-direction:column;
        margin-top:1rem;
        gap:1rem;

        
        div{
            
            display:flex;
            flex-direction: column;
            gap:0.4rem;

            .card-r {
                flex: 3;
                display: flex;
                flex-direction: row; 
                gap:1rem;

                button {
                    border:none;
                    background-color: @primary;
                    width:10rem;
                    border-radius: @bradius;
                    color:white;
                }
                
            }

            .title{
                .title();
                width:50rem;
            }
          

        }

    }
}


    input {
    padding: 0.4rem;
    width:74%;
    border: solid 1px @bgcolor;
    border-radius:@bradius;
    outline: none;
        &::placeholder {
            color: black
        }

    }

</style>