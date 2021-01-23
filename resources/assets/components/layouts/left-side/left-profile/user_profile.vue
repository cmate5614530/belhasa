<template>
    <div>
        <div class="user_section">
                    <div class="img-wrapper">
                        <img :src="this.$store.state.user.photo" alt="user profile image" class="rounded-circle user-profile-img">
                    </div>
                    <p class="mt-2 mb-1 user_name_max text-center profile-name">{{this.$store.state.user.name}}</p>
        </div>
    </div>
</template>
<style scoped lang="scss">
/*user section*/
@import "../../css/customvariables";

.user_section {
    height: 188px;
     padding: 15px 20px;

    .img-wrapper{
        width: 100px;
        border-radius:50%;
        padding:7px;
        margin:auto;
    }
    img {
        width: 84px;
        border: 2px solid #ccc;
    }

    p {
        font-size: 15px;
    }
    .leftuser_icons .logout_padd{
        padding: 1px !important;
        color: white;
    }
}
.user_name_max {
    text-transform:uppercase;
    font-weight:700;
    max-width: 210px;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
    margin: 0 0 -4px;
    padding-top: 2px;
    padding-bottom: 5px;
}

.leftuser_icons div {
    cursor: pointer;
    padding: 1px 12px;
    font-size:18px;
    background-color: transparent;
    margin-right: 3px;
    border-radius: 50px;
    margin: auto;
    width: 100%;
    display: inline;
}
.user_name_max,
.leftuser_icons i{
   // color:$menu_color;
    color:white;
}
    .profile-name{
        color:white;
        font-family: sans-serif;
    }
    .compact_data{
        color: white;
    }
.user-profile-img{
  width: 84px;
  height: 84px;
}

</style>
