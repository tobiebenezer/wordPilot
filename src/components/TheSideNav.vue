<template>
    <div class="sidebar">
        <div class="logo">
            <img src="../assets/logo.png" alt="logo">
        </div>
        <hr>
        <div class="menu">
            <ul>
                <li><font-awesome-icon icon="fa-solid fa-user-secret" />Dashboard</li>
                <li><font-awesome-icon icon="fa-solid fa-user-secret" />Projects</li>
                <li><font-awesome-icon icon="fa-solid fa-user-secret" />Scheduler</li>
                <li><font-awesome-icon icon="fa-solid fa-user-secret" />Content Wizard</li>
                <li><font-awesome-icon icon="fa-solid fa-user-secret" />Documents</li>
                <li><font-awesome-icon icon="fa-solid fa-user-secret" />Log Out</li>
            </ul>
        </div>
    </div>
</template>

<script setup>


</script>

<style lang="less" scoped>
    @import "../assets/base.less";
    
    .sidebar {
        background: @secondary;
        height: 95vh;
        width: 16rem;
        position:sticky;
        top:0;
        padding: 1.3rem;
        color:white;
        flex:1 1 ;

        .logo{
            text-align:center;
        }

        hr {
            height: 1px;
            border: none;
            background-color: #7a7a7a;
            margin: 0.8rem 0 2.5rem 0;
        }

        li {
            display:flex;
            gap:0.5rem;
            align-items: center;
            list-style: none;
            padding: 0.3rem 1.2rem;
            margin: 0.4rem 0;
            

            &:nth-child(2) {
                background-color: @primary;
                border-radius: @bradius;
                
            }

        }


    }
</style>