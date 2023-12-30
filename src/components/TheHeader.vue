<template>
   
   <header>
    <div class="card">
        <div class="r-head">
            <font-awesome-icon :icon="['fas', 'bars']" />
            <div >
                <input type="text" placeholder="My Workspace"> 
                <span><font-awesome-icon :icon="['fas', 'chevron-down']" style="color: #f5f7f9;" /></span>
            </div>
        </div>
        <div class="l-head">
            <div>
                <input type="text" placeholder="Search here"> 
                <span> Search <font-awesome-icon :icon="['fas', 'magnifying-glass']" /> </span>
            </div>
            <font-awesome-icon :icon="['fas', 'bell']" />
            <font-awesome-icon :icon="['fas', 'exclamation-circle']" />
            
            <div>
                <span>Welcome Grace</span>
                <span style="color: gray">Admin</span>
            </div>
                

        </div>
    </div>
    <div >
        <span><font-awesome-icon :icon="['fas', 'arrow-left']" style="color: #f5f7f9;" /></span>
        Write

    </div>
   </header>
</template>

<script setup>

</script>

<style lang="less" scoped>
   @import "../assets/base.less";

    header {  
        position: sticky;
        top:0;
        .card {
        display:flex;
        justify-content: space-between;
        align-items: center;
        
        padding: 0.5rem 0.5rem;
        
        .r-head {
            padding:0.5rem;
            gap:0.8rem;
            display: flex;
            justify-content: left;
            align-items: center;            
            & div:nth-of-type(1) {
                border: none;
                display: flex;

                span {
                    background-color: @primary;
                    font-size: 11px;
                    padding: 0.7rem;
                    color:white;
                    display: flex; 
                    align-items: center; 
                    gap:0.3rem
                }
            }
            
        }

        .l-head {
            padding:0.5rem;
            gap:0.8rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            & div:nth-of-type(1){
                border: none;
                display: flex;
                span {
                    background-color: @primary;
                    font-size: 11px;
                    padding: 0.4rem 2rem;
                    color:white;
                    display: flex; 
                    align-items: center; 
                    gap:0.3rem
                }
            }

            & div:nth-of-type(2){
                display: flex;
                flex-direction: column;
                margin-left: 3rem;
                font-size:13px;
                span:nth-of-type(2){
                    font-size: 10px;
                    line-height: 12px;
                }
            }
        }
    }
     & > div:nth-of-type(2){
        margin: 0.5rem 0;
        display:flex;
        align-items:center;
        gap:.5rem;
        font-size: 20px;

        span {
            background: @primary;
            padding: 0.3rem 1rem;
            font-size: 14px;
        }
    }

    }


    input {
    background: @bgcolor;
    padding: 0.4rem;
    width:13rem;
    border: none;
    outline: none;
        &::placeholder {
            color: rgb(163, 163, 163);
        }

    }
   


</style>