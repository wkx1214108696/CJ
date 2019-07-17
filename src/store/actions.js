export default {
    chooseFruit (ctx, from) {
        // console.log(ctx, fruit);
        ctx.commit('chooseFruit',from)
    }
}