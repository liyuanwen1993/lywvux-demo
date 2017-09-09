<template>
    <div>
        <transition :name="transitionName">
            <keep-alive>
                <router-view class="child-view"></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
            return {
                transitionName: 'slide-left',
                routerList: {
                    test1: 1,
                    test2: 2
                }
            }
        },
        beforeRouteUpdate(to, from, next) {
            if (this.routerList[to.name] < this.routerList[from.name]) {
                this.transitionName = 'slide-right'
            } else {
                this.transitionName = 'slide-left'
            }
            /*let isBack = this.$router.isBack
            if (isBack) {
              this.transitionName = 'slide-right'
            } else {
              this.transitionName = 'slide-left'
            }
            this.$router.isBack = false*/
            next()
        }
}
</script>
<style scoped>
.child-view {
    position: absolute;
    width: 100%;
    transition: all 0.8s ease;
}

.slide-left-enter,
.slide-right-leave-active {
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
}
</style>
